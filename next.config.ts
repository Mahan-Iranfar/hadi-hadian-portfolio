import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // این خط برای ساخت خروجی استاتیک حیاتی است
  basePath: '/hadi-hadian-portfolio', // نام مخزن شما
  assetPrefix: '/hadi-hadian-portfolio/', // نام مخزن شما با اسلش انتهایی
  images: {
    unoptimized: true, // GitHub Pages از بهینه‌سازی تصویر Next.js پشتیبانی نمی‌کند
  },
  trailingSlash: true, // برای سازگاری بیشتر با GitHub Pages
};

export default nextConfig;
