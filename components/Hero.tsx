'use client';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="eyebrow reveal">
              <span className="eyebrow-dot" />
              پورتفولیوی حرفه‌ای
              <span className="eyebrow-latin">PROFESSIONAL PORTFOLIO</span>
            </span>

            <h1 className="hero-name reveal d1">
              هادی <span className="accent">هادیان‌پور</span>
            </h1>

            <p className="hero-title reveal d2">
              مدرس ارشد و استراتژیست آموزش زبان انگلیسی
              <span className="sep">|</span>
              مترجم و متخصص بومی‌سازی محتوا
              <span className="sep">|</span>
              گوینده خبر
            </p>

            <p className="hero-domain reveal d3">
              طراحی و اجرای برنامه‌های عملیاتی برای توانمندسازی بین‌المللی فعالان اقتصادی، آماده‌سازی کارخانه‌ها و شرکت‌های تولیدی برای حضور در بازارهای خارجی، ارتقای برندینگ صادراتی و توسعه ارتباطات تجاری بین‌المللی استان گلستان.
            </p>

            <div className="hero-contacts reveal d3">
              <a href="tel:+989120897803" className="chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ direction: 'ltr' }}>0912 089 7803</span>
              </a>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                استان گلستان، ایران
              </span>
              <span className="chip">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                کارشناسی ارشد TEFL
              </span>
            </div>

            <div className="hero-actions reveal d4">
              <a href="#contact" className="btn btn-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                راه‌های ارتباطی
              </a>
              <button onClick={() => window.print()} className="btn btn-outline">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                چاپ / ذخیره PDF
              </button>
            </div>
          </div>

          <div className="hero-photo reveal d2">
            <div className="photo-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="IMG_20250610_210750_868.webp"
                alt="هادی هادیان‌پور"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  if (el.parentElement) {
                    el.parentElement.style.background = 'linear-gradient(160deg,#F4EFE6,#EAE3D5)';
                  }
                }}
              />
            </div>
            <div className="photo-badge">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              مشاور امور بین‌الملل
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}