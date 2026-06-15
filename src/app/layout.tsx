import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-jp',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mingei — 塗り絵',
  description:
    '美しい日本の伝統的なモチーフを塗り絵で楽しめるWebアプリケーション。桜、蓮、猫、麻の葉模様など、多彩なテンプレートを用意しています。',
  keywords: ['塗り絵', 'coloring', 'art', '日本', '伝統', 'mingei', '民芸'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body>
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
