import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="site-shell">
      <SiteHeader variant="subpage" />

      <main>
        <Reveal as="div" className="page-hero page-hero-contact">
          <div className="crumbs" aria-label="Đường dẫn">
            <span>Vieton</span>
            <span>→</span>
            <span>Liên hệ</span>
          </div>
          <p className="page-hero-eyebrow">Bắt đầu một cuộc trò chuyện</p>
          <h1>Cùng đưa cơ hội tiếp theo đi xa hơn</h1>
          <p className="page-hero-note">
            Chia sẻ mục tiêu của bạn — chúng tôi sẽ cùng tìm hướng phát triển
            phù hợp
          </p>
        </Reveal>

        <Reveal as="section" className="content-panel contact-page-panel">
          <div className="contact-page-copy">
            <p className="kicker">Kết nối cùng Vieton</p>
            <h2>Từ ý tưởng đầu tiên đến thị trường tiếp theo</h2>
            <p className="lead">
              Chúng tôi giúp các thương hiệu khám phá, ra mắt và mở rộng khắp
              Đông Nam Á thông qua marketing hiệu suất, sourcing sản phẩm,
              thương mại điện tử và mở rộng thị trường
            </p>
            <div className="contact-page-services">
              <span>Marketing hiệu suất</span>
              <span>Tìm nguồn hàng</span>
              <span>Thương mại điện tử</span>
              <span>Mở rộng thị trường</span>
            </div>
          </div>
          <div className="contact-page-card">
            <span className="contact-page-index">Vieton · Đông Nam Á</span>
            <h3 className="contact-form-heading">Gửi thông tin cho chúng tôi</h3>
            <ContactForm />
            <a
              href="mailto:nguyentrunghuyenhvtc@gmail.com"
              className="contact-email-link"
            >
              Hoặc email trực tiếp <span aria-hidden="true">↗</span>
            </a>
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
              <li>nguyentrunghuyenhvtc@gmail.com</li>
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
