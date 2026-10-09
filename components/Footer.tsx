export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-mark">ه.ه</div>
          <div>
            <strong>هادی هادیان‌پور</strong>
            <span>مدرس ارشد و استراتژیست آموزش زبان انگلیسی</span>
          </div>
        </div>

        <div className="footer-copy">© ۱۴۰۴ — تمامی حقوق محفوظ است</div>

        <a href="#home" className="footer-back">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
          بازگشت به بالا
        </a>
      </div>
    </footer>
  );
}