/* ============================================================
   Mingei — Type Definitions
   ============================================================ */

/** A single fillable region within an SVG template */
export interface SVGRegion {
  /** Unique identifier for this region */
  id: string;
  /** SVG path data (d attribute) */
  path: string;
  /** Human-readable label for the region (e.g., "花びら1") */
  label: string;
  /** Default stroke color */
  stroke?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Default fill (before coloring) — usually 'none' or white */
  defaultFill: string;
}

/** A coloring template category */
export type TemplateCategory = '花' | '動物' | '幾何学' | '自然' | '季節';

/** A complete coloring template */
export interface ColoringTemplate {
  /** Unique id */
  id: string;
  /** Display name */
  name: string;
  /** Category for filtering */
  category: TemplateCategory;
  /** Brief description */
  description: string;
  /** SVG viewBox attribute */
  viewBox: string;
  /** All fillable regions */
  regions: SVGRegion[];
  /** Optional background color for the SVG canvas */
  backgroundColor?: string;
}

/** Map of region id → fill color for a saved/in-progress work */
export type RegionColorMap = Record<string, string>;

/** A saved coloring work */
export interface SavedWork {
  /** Unique id */
  id: string;
  /** Reference to the template id */
  templateId: string;
  /** Template name (for display without having to look up template) */
  templateName: string;
  /** Filled colors for each region */
  colors: RegionColorMap;
  /** ISO timestamp of creation */
  createdAt: string;
  /** ISO timestamp of last update */
  updatedAt: string;
  /** Optional user-given title */
  title?: string;
  /** Thumbnail data URL (small base64 PNG) */
  thumbnail?: string;
}

/** A single undo/redo action */
export interface ColorAction {
  regionId: string;
  previousColor: string;
  newColor: string;
}

/** Editor state for the coloring canvas */
export interface EditorState {
  /** Currently selected color */
  selectedColor: string;
  /** History of recently used colors */
  recentColors: string[];
  /** Undo stack */
  undoStack: ColorAction[];
  /** Redo stack */
  redoStack: ColorAction[];
  /** Current color map */
  colorMap: RegionColorMap;
  /** Zoom level (1 = 100%) */
  zoom: number;
}

/** Preset color with name */
export interface PresetColor {
  /** Color hex value */
  value: string;
  /** Japanese name */
  name: string;
}
