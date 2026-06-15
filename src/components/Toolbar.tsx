'use client';

import styles from './Toolbar.module.css';

interface ToolbarProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onSave: () => void;
  onDownload: () => void;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  templateName: string;
}

export default function Toolbar({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onSave,
  onDownload,
  zoom,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  templateName,
}: ToolbarProps) {
  return (
    <div className={styles.toolbar}>
      <div className={styles.left}>
        <h2 className={styles.title}>{templateName}</h2>
      </div>

      <div className={styles.center}>
        {/* Undo / Redo */}
        <div className={styles.group}>
          <button
            className={styles.btn}
            onClick={onUndo}
            disabled={!canUndo}
            title="元に戻す (Ctrl+Z)"
            aria-label="元に戻す"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
          <button
            className={styles.btn}
            onClick={onRedo}
            disabled={!canRedo}
            title="やり直し (Ctrl+Y)"
            aria-label="やり直し"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
            </svg>
          </button>
        </div>

        {/* Zoom */}
        <div className={styles.group}>
          <button
            className={styles.btn}
            onClick={onZoomOut}
            disabled={zoom <= 0.25}
            title="縮小"
            aria-label="縮小"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
          <button
            className={styles.zoomLabel}
            onClick={onZoomReset}
            title="ズームリセット"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            className={styles.btn}
            onClick={onZoomIn}
            disabled={zoom >= 3}
            title="拡大"
            aria-label="拡大"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
        </div>

        {/* Actions */}
        <div className={styles.group}>
          <button
            className={styles.btn}
            onClick={onReset}
            title="リセット"
            aria-label="全消去"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.btnSecondary} onClick={onSave} title="保存">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          <span>保存</span>
        </button>
        <button className={styles.btnPrimary} onClick={onDownload} title="ダウンロード">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>PNG</span>
        </button>
      </div>
    </div>
  );
}
