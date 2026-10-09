export default function StatsBar() {
  return (
    <div className="stats-bar reveal">
      <div className="stats-inner">
        <div className="stat">
          <div className="stat-num"><span data-count="16">۰</span><span className="suffix">+</span></div>
          <div className="stat-label">سال سابقه تخصصی</div>
        </div>
        <div className="stat">
          <div className="stat-num"><span data-count="7000">۰</span><span className="suffix">+</span></div>
          <div className="stat-label">مقاله ترجمه و ویرایش‌شده</div>
        </div>
        <div className="stat">
          <div className="stat-num"><span data-count="2">۰</span></div>
          <div className="stat-label">مدرک دانشگاهی تخصصی</div>
        </div>
        <div className="stat">
          <div className="stat-num"><span data-count="8">۰</span><span className="suffix">+</span></div>
          <div className="stat-label">دستاورد راهبردی کلیدی</div>
        </div>
      </div>
    </div>
  );
}