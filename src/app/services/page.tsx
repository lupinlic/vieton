import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";

const services = [
  {
    title: "Marketing hiệu suất",
    description:
      "Biến sự chú ý thành doanh thu với hệ thống truyền thông thử nghiệm và tối ưu chuyển đổi",
    focus: "Thu hút · Kiểm thử · Tối ưu",
  },
  {
    title: "Tìm nguồn hàng",
    description:
      "Tìm sản phẩm có tiềm năng mở rộng thông qua lựa chọn nhà cung cấp, tối ưu chi phí và phát triển sản phẩm",
    focus: "Sản phẩm · Nhà cung cấp · Chất lượng",
  },
  {
    title: "Thương mại điện tử",
    description:
      "Xây dựng hệ thống bán hàng từ cửa hàng, landing page và thanh toán đến giao hàng, chăm sóc khách hàng",
    focus: "Cửa hàng · Chuyển đổi · Vận hành",
  },
  {
    title: "Mở rộng thị trường",
    description:
      "Ra mắt ở thị trường mới với địa phương hóa phù hợp, chiến lược kênh và mô hình vận hành đúng",
    focus: "Nghiên cứu · Địa phương hóa · Mở rộng",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" aria-label="Trang chủ Vieton">
            <BrandLogo alt="" className="brand-logo" />
          </Link>
          <nav className="topnav subpage-topnav" aria-label="Điều hướng chính">
            <Link href="/about">Giới thiệu</Link>
            <Link href="/services" aria-current="page">Dịch vụ</Link>
            <Link href="/markets">Thị trường</Link>
            <Link href="/work">Công việc</Link>
            <Link href="/contact">Liên hệ</Link>
          </nav>
        </div>
      </header>

      <main>
        <Reveal as="div" className="page-hero page-hero-services">
          <div className="crumbs" aria-label="Đường dẫn">
            <span>Vieton</span>
            <span>→</span>
            <span>Dịch vụ</span>
          </div>
          <p className="page-hero-eyebrow">Năng lực xuyên suốt hành trình</p>
          <h1>Mọi năng lực cho một mục tiêu tăng trưởng</h1>
          <p className="page-hero-note">
            Từ sản phẩm đầu tiên đến hệ thống sẵn sàng mở rộng trong khu vực
          </p>
        </Reveal>

        <Reveal as="section" className="content-panel services-page-panel">
          <div className="page-section-heading">
            <div>
              <p className="kicker">Hệ thống dịch vụ</p>
              <h2>Một đối tác, từ chiến lược đến thực thi</h2>
            </div>
            <Link className="text-link" href="/contact">
              Trao đổi với chúng tôi <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="service-page-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card service-page-card"
              >
                <div className="service-page-topline">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="service-page-mark" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-focus">{service.focus}</span>
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
