'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { ColoringTemplate, RegionColorMap, ColorAction } from '@/types/types';
import styles from './ColoringCanvas.module.css';

interface ColoringCanvasProps {
  template: ColoringTemplate;
  colorMap: RegionColorMap;
  selectedColor: string;
  zoom: number;
  onRegionClick: (regionId: string) => void;
  svgRef: React.RefObject<SVGSVGElement | null>;
}

export default function ColoringCanvas({
  template,
  colorMap,
  selectedColor,
  zoom,
  onRegionClick,
  svgRef,
}: ColoringCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [paintEffect, setPaintEffect] = useState<{ x: number; y: number; color: string } | null>(null);

  // Pan state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOrigin = useRef({ x: 0, y: 0 });

  // Handle region click with paint splash effect
  const handleRegionClick = useCallback(
    (regionId: string, event: React.MouseEvent) => {
      const rect = (event.target as Element).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setPaintEffect({ x: event.clientX, y: event.clientY, color: selectedColor });
      setTimeout(() => setPaintEffect(null), 500);

      onRegionClick(regionId);
    },
    [onRegionClick, selectedColor]
  );

  // Pan with middle mouse or when holding space
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 1 || e.altKey) {
        e.preventDefault();
        setIsPanning(true);
        panStart.current = { x: e.clientX, y: e.clientY };
        panOrigin.current = { ...pan };
      }
    },
    [pan]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPanning) {
        const dx = e.clientX - panStart.current.x;
        const dy = e.clientY - panStart.current.y;
        setPan({
          x: panOrigin.current.x + dx,
          y: panOrigin.current.y + dy,
        });
      }
    },
    [isPanning]
  );

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
  }, []);

  // Wheel zoom
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      // Let the parent handle zoom via keyboard shortcuts
    },
    []
  );

  // Reset pan when zoom resets
  useEffect(() => {
    if (zoom === 1) {
      setPan({ x: 0, y: 0 });
    }
  }, [zoom]);

  return (
    <div
      ref={containerRef}
      className={styles.canvasContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{ cursor: isPanning ? 'grabbing' : 'default' }}
    >
      {/* Paint splash effect */}
      {paintEffect && (
        <div
          className={styles.paintSplash}
          style={{
            left: paintEffect.x,
            top: paintEffect.y,
            backgroundColor: paintEffect.color,
          }}
        />
      )}

      <div
        className={styles.svgWrapper}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
        }}
      >
        <svg
          ref={svgRef}
          viewBox={template.viewBox}
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect
            width="100%"
            height="100%"
            fill={template.backgroundColor || '#f5f0e8'}
            rx="4"
          />

          {/* Regions */}
          {template.regions.map((region) => {
            const fill = colorMap[region.id] || region.defaultFill;
            const isHovered = hoveredRegion === region.id;
            const isClickable = region.defaultFill !== 'none';

            return (
              <path
                key={region.id}
                d={region.path}
                fill={fill}
                stroke={region.stroke || '#333'}
                strokeWidth={region.strokeWidth || 1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`${styles.region} ${isClickable ? styles.regionClickable : ''}`}
                style={{
                  opacity: isHovered && isClickable ? 0.85 : 1,
                  filter: isHovered && isClickable ? 'brightness(1.1)' : 'none',
                }}
                onMouseEnter={() => isClickable && setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={(e) => isClickable && handleRegionClick(region.id, e)}
              >
                <title>{region.label}</title>
              </path>
            );
          })}
        </svg>
      </div>

      {/* Hover tooltip */}
      {hoveredRegion && (
        <div className={styles.tooltip}>
          <div
            className={styles.tooltipSwatch}
            style={{ backgroundColor: selectedColor }}
          />
          <span>
            {template.regions.find((r) => r.id === hoveredRegion)?.label}
          </span>
        </div>
      )}
    </div>
  );
}
