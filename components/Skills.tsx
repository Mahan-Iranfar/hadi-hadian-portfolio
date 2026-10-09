export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num">۰۵ — مهارت‌ها</div>
          <h2 className="section-title">مهارت‌های نرم‌افزاری</h2>
          <p className="section-desc">تسلط تخصصی بر ابزارهای حرفه‌ای مورد استفاده در مستندسازی، ارائه و پژوهش آکادمیک</p>
        </div>

        <div className="skills-grid">
          <div className="skill-card reveal d1">
            <div className="skill-head">
              <div className="skill-logo">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                </svg>
              </div>
              <div>
                <h4>Microsoft Word</h4>
                <span className="skill-en">DOCUMENT AUTHORING</span>
              </div>
            </div>
            <p>تدوین مستندات رسمی و راهبردی، صفحه‌آرایی مقالات علمی و طراحی آزمون‌های استاندارد</p>
          </div>

          <div className="skill-card reveal d1">
            <div className="skill-head">
              <div className="skill-logo">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <h4>Microsoft PowerPoint</h4>
                <span className="skill-en">PRESENTATION DESIGN</span>
              </div>
            </div>
            <p>طراحی ارائه‌های اجرایی، اسلایدهای آموزشی تعاملی و سخنرانی‌های همایشی</p>
          </div>

          <div className="skill-card reveal d2">
            <div className="skill-head">
              <div className="skill-logo">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div>
                <h4>EndNote</h4>
                <span className="skill-en">REFERENCE MANAGEMENT</span>
              </div>
            </div>
            <p>مدیریت استاندارد علمی و رفرنس‌دهی مقالات آکادمیک بر اساس شیوه‌نامه‌های بین‌المللی (APA, IEEE)</p>
          </div>

          <div className="skill-card reveal d2">
            <div className="skill-head">
              <div className="skill-logo">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <div>
                <h4>Turnitin / iThenticate</h4>
                <span className="skill-en">PLAGIARISM &amp; INTEGRITY</span>
              </div>
            </div>
            <p>ارزیابی اصالت علمی، بررسی همانندجویی و نظارت بر سلامت محتوای مقالات و مستندات</p>
          </div>
        </div>
      </div>
    </section>
  );
}