'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSavedWorks, deleteWork } from '@/utils/storage';
import { SavedWork } from '@/types/types';
import styles from './gallery.module.css';

export default function GalleryPage() {
  const [works, setWorks] = useState<SavedWork[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setWorks(getSavedWorks().sort((a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ));
  }, []);

  const handleDelete = (id: string, name: string) => {
    if (!confirm(`「${name}」を削除しますか？`)) return;
    deleteWork(id);
    setWorks((prev) => prev.filter((w) => w.id !== id));
  };

  if (!isMounted) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>ギャラリー</h1>
          <p className={styles.subtitle}>読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>ギャラリー</h1>
        <p className={styles.subtitle}>
          {works.length > 0
            ? `${works.length}件の作品が保存されています`
            : '保存された作品はまだありません'}
        </p>
      </div>

      {works.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🎨</div>
          <h2 className={styles.emptyTitle}>作品がありません</h2>
          <p className={styles.emptyText}>
            テンプレートを選んで塗り絵を始めましょう！
          </p>
          <Link href="/" className={styles.startBtn}>
            塗り絵を始める
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {works.map((work, index) => (
            <div
              key={work.id}
              className={styles.card}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Link
                href={`/color/${work.templateId}`}
                className={styles.cardLink}
              >
                <div className={styles.cardPreview}>
                  {work.thumbnail ? (
                    <img
                      src={work.thumbnail}
                      alt={work.templateName}
                      className={styles.thumbnail}
                    />
                  ) : (
                    <div className={styles.placeholderThumb}>
                      <span>🖌️</span>
                    </div>
                  )}
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>
                    {work.title || work.templateName}
                  </h3>
                  <p className={styles.cardDate}>
                    {new Date(work.updatedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  <div className={styles.colorDots}>
                    {Object.values(work.colors)
                      .filter((v, i, a) => a.indexOf(v) === i)
                      .slice(0, 8)
                      .map((color, i) => (
                        <span
                          key={i}
                          className={styles.colorDot}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                  </div>
                </div>
              </Link>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(work.id, work.templateName)}
                title="削除"
                aria-label={`${work.templateName}を削除`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
