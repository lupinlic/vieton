import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";

const markets = [
  { name: "Việt Nam", summary: "Thị trường gốc và nơi khởi nguồn sản phẩm" },
  { name: "Thái Lan", summary: "Nhu cầu theo hướng hiệu suất và tăng trưởng nhanh" },
  { name: "Indonesia", summary: "Thương mại quy mô lớn và mở rộng thị trường" },
  { name: "Malaysia", summary: "Tăng trưởng xuyên biên giới và thu hút ổn định" },
  { name: "Philippines", summary: "Nhu cầu kỹ thuật số hướng tới cộng đồng" },
  { name: "Singapore", summary: "Trung tâm khu vực và xác thực thương hiệu" },
];

export default function MarketsPage() {
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
            <Link href="/markets" aria-current="page">Thị trường</Link>
            <Link href="/work">Công việc</Link>
            <Link href="/contact">Liên hệ</Link>
          </nav>
        </div>
      </header>

      <main>
        <Reveal as="div" className="page-hero page-hero-markets">
          <div className="crumbs" aria-label="Đường dẫn">
            <span>Vieton</span>
            <span>→</span>
            <span>Thị trường</span>
          </div>
          <p className="page-hero-eyebrow">Mạng lưới Đông Nam Á</p>
          <h1>Mỗi thị trường, một cách tiếp cận riêng</h1>
          <p className="page-hero-note">
            Kết nối từ Việt Nam đến những nền kinh tế năng động trong khu vực
          </p>
        </Reveal>

        <Reveal as="section" className="content-panel markets-page-panel">
          <div className="page-section-heading">
            <div>
              <p className="kicker">Thấu hiểu địa phương</p>
              <h2>Sáu thị trường, một mạng lưới tăng trưởng</h2>
            </div>
            <p>
              Mỗi quốc gia có đặc điểm riêng — chiến lược được xây dựng theo
              nhu cầu, hành vi và cơ hội tại chỗ
            </p>
          </div>
          <div className="market-grid market-page-grid">
            {markets.map((market, index) => (
              <article
                key={market.name}
                className="country-card market-page-card"
                data-market-index={String(index + 1).padStart(2, "0")}
              >
                <span className="market-card-label">
                  Thị trường {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{market.name}</h3>
                <p>{market.summary}</p>
              </article>
            ))}
          </div>
          <div className="market-page-foot">
            <span className="market-page-route" aria-hidden="true">
              <i /><i /><i /><i /><i /><i />
            </span>
            <p>Việt Nam <b>→</b> Đông Nam Á</p>
            <Link className="text-link" href="/contact">
              Khám phá cơ hội mở rộng <span aria-hidden="true">→</span>
            </Link>
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
