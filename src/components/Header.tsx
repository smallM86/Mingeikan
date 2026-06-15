'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>民</span>
          <span className={styles.logoText}>Mingei</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            テンプレート
          </Link>
          <Link href="/gallery" className={styles.navLink} onClick={() => setMenuOpen(false)}>
            ギャラリー
          </Link>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ''}`} />
        </button>
      </div>
    </header>
  );
}
