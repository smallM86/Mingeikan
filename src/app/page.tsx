'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { templates, getCategories } from '@/data/templates';
import { TemplateCategory } from '@/types/types';
import styles from './page.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'すべて'>('すべて');
  const categories = getCategories();

  const filteredTemplates = useMemo(() => {
    if (activeCategory === 'すべて') return templates;
    return templates.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>🎨 日本の美を塗ろう</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>色で描く、</span>
            <span className={styles.heroTitleAccent}>日本の美</span>
          </h1>
          <p className={styles.heroSubtitle}>
            桜、富士山、伝統模様など、日本の美しいモチーフを自由に塗り絵で楽しめます。
            <br />
            あなただけのカラフルな作品を作りましょう。
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.decorCircle1} />
          <div className={styles.decorCircle2} />
          <div className={styles.decorCircle3} />
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className={styles.filterBar}>
          <button
            className={`${styles.filterBtn} ${activeCategory === 'すべて' ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory('すべて')}
          >
            すべて
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Template Grid */}
      <section className={styles.gallery}>
        <div className={styles.grid}>
          {filteredTemplates.map((template, index) => (
            <Link
              key={template.id}
              href={`/color/${template.id}`}
              className={styles.card}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={styles.cardPreview}>
                <svg
                  viewBox={template.viewBox}
                  className={styles.cardSvg}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#f5f0e8" />
                  {template.regions.map((region) => (
                    <path
                      key={region.id}
                      d={region.path}
                      fill={region.defaultFill}
                      stroke={region.stroke || '#333'}
                      strokeWidth={region.strokeWidth || 1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))}
                </svg>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardCategory}>{template.category}</span>
                <h3 className={styles.cardTitle}>{template.name}</h3>
                <p className={styles.cardDesc}>{template.description}</p>
              </div>
              <div className={styles.cardArrow}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
