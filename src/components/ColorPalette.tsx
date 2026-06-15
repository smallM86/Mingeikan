'use client';

import { PresetColor } from '@/types/types';
import { japaneseColors } from '@/data/templates';
import styles from './ColorPalette.module.css';

interface ColorPaletteProps {
  selectedColor: string;
  recentColors: string[];
  onColorSelect: (color: string) => void;
}

export default function ColorPalette({
  selectedColor,
  recentColors,
  onColorSelect,
}: ColorPaletteProps) {
  // Group colors by category
  const colorGroups: { label: string; colors: PresetColor[] }[] = [
    { label: '赤・桃', colors: japaneseColors.slice(0, 6) },
    { label: '橙・黄', colors: japaneseColors.slice(6, 12) },
    { label: '緑', colors: japaneseColors.slice(12, 18) },
    { label: '青', colors: japaneseColors.slice(18, 24) },
    { label: '紫', colors: japaneseColors.slice(24, 28) },
    { label: '無彩・茶', colors: japaneseColors.slice(28) },
  ];

  return (
    <div className={styles.palette}>
      <h3 className={styles.title}>カラーパレット</h3>

      {/* Current color display */}
      <div className={styles.currentColor}>
        <div
          className={styles.currentSwatch}
          style={{ backgroundColor: selectedColor }}
        />
        <div className={styles.currentInfo}>
          <span className={styles.currentLabel}>選択中の色</span>
          <span className={styles.currentHex}>{selectedColor}</span>
        </div>
      </div>

      {/* Custom color picker */}
      <div className={styles.customPicker}>
        <label className={styles.pickerLabel}>
          カスタムカラー
          <input
            type="color"
            value={selectedColor}
            onChange={(e) => onColorSelect(e.target.value)}
            className={styles.pickerInput}
          />
        </label>
      </div>

      {/* Recent colors */}
      {recentColors.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>最近使った色</h4>
          <div className={styles.recentGrid}>
            {recentColors.map((color, i) => (
              <button
                key={`recent-${i}`}
                className={`${styles.swatch} ${color === selectedColor ? styles.swatchActive : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => onColorSelect(color)}
                title={color}
                aria-label={`色を選択: ${color}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Preset color groups */}
      {colorGroups.map((group) => (
        <div key={group.label} className={styles.section}>
          <h4 className={styles.sectionTitle}>{group.label}</h4>
          <div className={styles.colorGrid}>
            {group.colors.map((preset) => (
              <button
                key={preset.value}
                className={`${styles.swatch} ${preset.value === selectedColor ? styles.swatchActive : ''}`}
                style={{ backgroundColor: preset.value }}
                onClick={() => onColorSelect(preset.value)}
                title={preset.name}
                aria-label={`${preset.name} (${preset.value})`}
              >
                {preset.value === selectedColor && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
