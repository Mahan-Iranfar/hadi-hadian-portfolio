export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-text reveal d1">
            <div className="section-num">۰۶ — ارتباط</div>
            <h2>آماده همکاری در پروژه‌های بین‌المللی</h2>
            <p>
              جهت همکاری در زمینه‌های آموزش زبان تخصصی، ترجمه و بومی‌سازی محتوا، تولید محتوای بین‌المللی، برندینگ صادراتی و مشاوره امور بین‌الملل، از طریق راه‌های زیر در دسترس هستم.
            </p>
          </div>

          <div className="contact-methods reveal d2">
            <a href="tel:+989120897803" className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="label">تلفن همراه</div>
                <div className="value">0912 089 7803</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="label">حوزه فعالیت</div>
                <div className="value fa">استان گلستان، ایران</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="label">حوزه تخصصی</div>
                <div className="value fa">آموزش زبان · ترجمه · امور بین‌الملل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}