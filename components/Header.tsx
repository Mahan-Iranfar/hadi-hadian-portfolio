export default function Header() {
  return (
    <>
      <header className="site-header" id="header">
        <div className="nav-wrap">
          <a href="#home" className="brand">
            <div className="brand-mark">ه.ه</div>
            <div className="brand-name">
              هادی هادیان‌پور
              <span className="brand-sub" style={{ marginTop: '6px' }}>
                EDUCATOR · TRANSLATOR · STRATEGIST
              </span>
            </div>
          </a>

          <nav>
            <ul className="nav-list" id="navList">
              {/* Panel Head (only shows on mobile) */}
              <li className="nav-panel-head">
                <div className="nav-panel-brand">
                  <div className="brand-mark">ه.ه</div>
                  <div className="nav-panel-brand-text">
                    <strong>هادی هادیان‌پور</strong>
                    <span>مدرس ارشد و استراتژیست زبان</span>
                  </div>
                </div>
              </li>

              <li><a href="#home" className="active">خانه</a></li>
              <li><a href="#about">درباره من</a></li>
              <li><a href="#credentials">سوابق علمی</a></li>
              <li><a href="#achievements">دستاوردها</a></li>
              <li><a href="#projects">طرح‌های ملی</a></li>
              <li><a href="#skills">مهارت‌ها</a></li>

              <li className="nav-cta-wrap">
                <a href="#contact" className="nav-cta">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  تماس با من
                </a>
              </li>

              <li className="nav-panel-foot">
                <span className="nav-panel-foot-label">در دسترس از طریق</span>
                <a href="tel:+989120897803" className="nav-panel-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>0912 089 7803</span>
                </a>
              </li>
            </ul>
          </nav>

          <button className="burger" id="burger" aria-label="باز کردن منو" aria-expanded="false" aria-controls="navList">
            <svg className="icon-menu" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            <svg className="icon-close" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Backdrop (outside header) */}
      <div className="nav-backdrop" id="navBackdrop" aria-hidden="true" />
    </>
  );
}