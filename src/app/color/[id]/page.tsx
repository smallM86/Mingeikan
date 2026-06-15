'use client';

import { useState, useCallback, useRef, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { getTemplateById } from '@/data/templates';
import { RegionColorMap, ColorAction } from '@/types/types';
import {
  getSavedWorkByTemplate,
  saveWork,
  createNewWork,
} from '@/utils/storage';
import { svgToPngDataUrl, downloadDataUrl, generateThumbnail } from '@/utils/export';
import ColoringCanvas from '@/components/ColoringCanvas';
import ColorPalette from '@/components/ColorPalette';
import Toolbar from '@/components/Toolbar';
import styles from './editor.module.css';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditorPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const template = getTemplateById(resolvedParams.id);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Editor state
  const [selectedColor, setSelectedColor] = useState('#c24643');
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [colorMap, setColorMap] = useState<RegionColorMap>({});
  const [undoStack, setUndoStack] = useState<ColorAction[]>([]);
  const [redoStack, setRedoStack] = useState<ColorAction[]>([]);
  const [zoom, setZoom] = useState(1);
  const [workId, setWorkId] = useState<string | null>(null);
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Mount check for SSR safety
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load existing work if available
  useEffect(() => {
    if (!isMounted || !template) return;
    const existingWork = getSavedWorkByTemplate(template.id);
    if (existingWork) {
      setColorMap(existingWork.colors);
      setWorkId(existingWork.id);
    }
  }, [isMounted, template]);

  // Handle color selection
  const handleColorSelect = useCallback((color: string) => {
    setSelectedColor(color);
    setRecentColors((prev) => {
      const filtered = prev.filter((c) => c !== color);
      return [color, ...filtered].slice(0, 12);
    });
  }, []);

  // Handle region click (fill with selected color)
  const handleRegionClick = useCallback(
    (regionId: string) => {
      const previousColor = colorMap[regionId] || template?.regions.find((r) => r.id === regionId)?.defaultFill || '#ffffff';

      if (previousColor === selectedColor) return; // No change

      const action: ColorAction = {
        regionId,
        previousColor,
        newColor: selectedColor,
      };

      setUndoStack((prev) => [...prev, action]);
      setRedoStack([]);
      setColorMap((prev) => ({ ...prev, [regionId]: selectedColor }));
    },
    [colorMap, selectedColor, template]
  );

  // Undo
  const handleUndo = useCallback(() => {
    setUndoStack((prev) => {
      if (prev.length === 0) return prev;
      const action = prev[prev.length - 1];
      setRedoStack((redo) => [...redo, action]);
      setColorMap((cm) => {
        const next = { ...cm };
        if (action.previousColor === (template?.regions.find((r) => r.id === action.regionId)?.defaultFill || '#ffffff')) {
          delete next[action.regionId];
        } else {
          next[action.regionId] = action.previousColor;
        }
        return next;
      });
      return prev.slice(0, -1);
    });
  }, [template]);

  // Redo
  const handleRedo = useCallback(() => {
    setRedoStack((prev) => {
      if (prev.length === 0) return prev;
      const action = prev[prev.length - 1];
      setUndoStack((undo) => [...undo, action]);
      setColorMap((cm) => ({ ...cm, [action.regionId]: action.newColor }));
      return prev.slice(0, -1);
    });
  }, []);

  // Reset
  const handleReset = useCallback(() => {
    if (Object.keys(colorMap).length === 0) return;
    if (!confirm('すべての色をリセットしますか？')) return;
    setColorMap({});
    setUndoStack([]);
    setRedoStack([]);
  }, [colorMap]);

  // Save
  const handleSave = useCallback(async () => {
    if (!template) return;

    let thumbnail: string | undefined;
    if (svgRef.current) {
      try {
        thumbnail = await generateThumbnail(svgRef.current);
      } catch {
        // Thumbnail generation may fail, that's ok
      }
    }

    const work = workId
      ? {
          id: workId,
          templateId: template.id,
          templateName: template.name,
          colors: colorMap,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          thumbnail,
        }
      : createNewWork(template.id, template.name, colorMap);

    if (!workId) {
      setWorkId(work.id);
    }
    work.thumbnail = thumbnail;

    saveWork(work);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 2000);
  }, [template, colorMap, workId]);

  // Download
  const handleDownload = useCallback(async () => {
    if (!svgRef.current || !template) return;
    try {
      const dataUrl = await svgToPngDataUrl(svgRef.current);
      downloadDataUrl(dataUrl, `mingei-${template.id}.png`);
    } catch (err) {
      console.error('Download failed:', err);
      alert('ダウンロードに失敗しました。');
    }
  }, [template]);

  // Zoom
  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.25, 3)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.25, 0.25)), []);
  const handleZoomReset = useCallback(() => setZoom(1), []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'z' && !e.shiftKey) {
          e.preventDefault();
          handleUndo();
        } else if ((e.key === 'z' && e.shiftKey) || e.key === 'y') {
          e.preventDefault();
          handleRedo();
        } else if (e.key === 's') {
          e.preventDefault();
          handleSave();
        } else if (e.key === '=') {
          e.preventDefault();
          handleZoomIn();
        } else if (e.key === '-') {
          e.preventDefault();
          handleZoomOut();
        } else if (e.key === '0') {
          e.preventDefault();
          handleZoomReset();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo, handleSave, handleZoomIn, handleZoomOut, handleZoomReset]);

  // Template not found
  if (!template) {
    return (
      <div className={styles.notFound}>
        <h2>テンプレートが見つかりません</h2>
        <p>指定されたテンプレートは存在しません。</p>
        <button onClick={() => router.push('/')} className={styles.backBtn}>
          トップに戻る
        </button>
      </div>
    );
  }

  return (
    <div className={styles.editor}>
      <Toolbar
        canUndo={undoStack.length > 0}
        canRedo={redoStack.length > 0}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        onSave={handleSave}
        onDownload={handleDownload}
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
        templateName={template.name}
      />

      <div className={styles.workspace}>
        <div className={styles.canvasArea}>
          <ColoringCanvas
            template={template}
            colorMap={colorMap}
            selectedColor={selectedColor}
            zoom={zoom}
            onRegionClick={handleRegionClick}
            svgRef={svgRef}
          />
        </div>
        <aside className={styles.sidebar}>
          <ColorPalette
            selectedColor={selectedColor}
            recentColors={recentColors}
            onColorSelect={handleColorSelect}
          />
        </aside>
      </div>

      {/* Saved toast */}
      {showSavedToast && (
        <div className={styles.toast}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          保存しました
        </div>
      )}
    </div>
  );
}
