import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";

const work = [
  { name: "Ra mắt mỹ phẩm", market: "Thái Lan", result: "ROAS 4.8x" },
  { name: "Hàng gia dụng", market: "Malaysia", result: "+160% doanh số" },
  { name: "Tăng trưởng DTC", market: "Indonesia", result: "Mở rộng 3 thị trường" },
];

export default function WorkPage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" aria-label="Trang chủ Vieton">
            <BrandLogo alt="" className="brand-logo" />
          </Link>
          <nav className="topnav subpage-topnav" aria-label="Điều hướng chính">
            <Link href="/about">Giới thiệu</Link>
            <Link href="/services">Dịch vụ</Link>
            <Link href="/markets">Thị trường</Link>
            <Link href="/work" aria-current="page">Công việc</Link>
            <Link href="/contact">Liên hệ</Link>
          </nav>
        </div>
      </header>

      <main>
        <Reveal as="div" className="page-hero page-hero-work">
          <div className="crumbs" aria-label="Đường dẫn">
            <span>Vieton</span>
            <span>→</span>
            <span>Công việc</span>
          </div>
          <p className="page-hero-eyebrow">Kết quả từ thực tế</p>
          <h1>Chiến lược chuyển hóa thành tăng trưởng</h1>
          <p className="page-hero-note">
            Một vài ví dụ về cách thương hiệu phát triển cùng Vieton tại Đông
            Nam Á
          </p>
        </Reveal>

        <Reveal as="section" className="content-panel work-page-panel">
          <div className="page-section-heading">
            <div>
              <p className="kicker">Công việc nổi bật</p>
              <h2>Tăng trưởng phù hợp từng thị trường</h2>
            </div>
            <p>
              Từ ra mắt sản phẩm đến mở rộng khu vực, mỗi kết quả bắt đầu bằng
              việc hiểu đúng cơ hội
            </p>
          </div>
          <div className="case-grid work-page-grid">
            {work.map((item) => (
              <article key={item.name} className="case-card">
                <div className="case-visual">
                  <span className="case-visual-label">{item.market}</span>
                  <div className="case-visual-result">
                    <span>Kết quả chiến dịch</span>
                    <strong>{item.result}</strong>
                  </div>
                  <div className="case-chart" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="case-body">
                  <span className="case-kicker">Case study</span>
                  <h3>{item.name}</h3>
                  <div className="case-meta">
                    <span>{item.market}</span>
                    <span>Đông Nam Á</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </main>

      <Reveal as="footer" className="site-footer">
        <div className="footer-grid">
          <div>
            <BrandLogo className="footer-brand-logo" />
            <p className="footer-tagline">Xây dựng · Thị trường · Mở rộng</p>
          </div>
          <div className="footer-group">
            <h4>Khám phá</h4>
            <ul>
              <li><Link href="/about">Giới thiệu</Link></li>
              <li><Link href="/services">Dịch vụ</Link></li>
              <li><Link href="/markets">Thị trường</Link></li>
            </ul>
          </div>
          <div className="footer-group">
            <h4>Mạng lưới</h4>
            <ul>
              <li>Việt Nam</li>
              <li>Thái Lan</li>
              <li>Indonesia</li>
            </ul>
          </div>
          <div className="footer-group">
            <h4>Liên hệ</h4>
            <ul>
              <li><Link href="/contact">Liên hệ</Link></li>
              <li>hello@vieton.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© Vieton</span>
          <span>Từ Việt Nam, khắp Đông Nam Á</span>
        </div>
      </Reveal>
    </div>
  );
}
