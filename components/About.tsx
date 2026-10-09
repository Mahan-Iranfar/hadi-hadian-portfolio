export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-num">۰۱ — درباره من</div>
          <h2 className="section-title">معرفی کوتاه</h2>
          <p className="section-desc">نگاهی اجمالی به مسیر حرفه‌ای، رویکرد و محورهای تخصصی</p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal d1">
            <p>
              اینجانب <strong>هادی هادیان‌پور</strong>، با بیش از <strong>۱۶ سال سابقه تخصصی</strong> در حوزه آموزش زبان انگلیسی، ترجمه، رسانه و تولید محتوای فرهنگی، فعالیت حرفه‌ای خود را بر پایه تلفیق آموزش راهبردمحور، فناوری‌های نوین زبانی و روایت رسانه‌ای بنا نهاده‌ام.
            </p>
            <p>
              محور اصلی فعالیت‌های اینجانب، <strong>طراحی مدل‌های آموزشی نوین</strong>، اجرای پروژه‌های فاخر فرهنگی و توسعه ظرفیت‌های علمی و رسانه‌ای در سطح استانی و ملی است.
            </p>
          </div>

          <aside className="about-side">
            <div className="about-card reveal d1">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h4>تحصیلات تخصصی</h4>
                <p>کارشناسی ارشد آموزش زبان انگلیسی (TEFL) و کارشناسی مترجمی زبان انگلیسی</p>
              </div>
            </div>

            <div className="about-card reveal d2">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <h4>عرصه بین‌الملل</h4>
                <p>مشاور امور بین‌الملل اتاق بازرگانی، صنایع، معادن و کشاورزی گرگان</p>
              </div>
            </div>

            <div className="about-card reveal d3">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <div>
                <h4>ترجمه و ویرایش علمی</h4>
                <p>ویرایش و ترجمه بیش از ۷۰۰۰ مقاله علمی و تخصصی در مقاطع کارشناسی ارشد و دکتری</p>
              </div>
            </div>

            <div className="about-card reveal d4">
              <div className="about-card-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                </svg>
              </div>
              <div>
                <h4>رسانه و روایت</h4>
                <p>برگزیده گویندگی خبر رادیو و راوی مستندهای ملی و بین‌المللی</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}