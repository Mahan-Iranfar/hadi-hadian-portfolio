import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'هادی هادیان‌پور | مدرس ارشد و استراتژیست آموزش زبان انگلیسی',
  description:
    'پورتفولیوی حرفه‌ای هادی هادیان‌پور — مدرس ارشد و استراتژیست آموزش زبان انگلیسی، مترجم و متخصص بومی‌سازی محتوا، مشاور امور بین‌الملل',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}