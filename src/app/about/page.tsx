import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader variant="subpage" />

      <main>
        <Reveal as="div" className="page-hero page-hero-about">
          <div className="crumbs" aria-label="Đường dẫn">
            <span>Vieton</span>
            <span>→</span>
            <span>Giới thiệu</span>
          </div>
          <p className="page-hero-eyebrow">Câu chuyện của chúng tôi</p>
          <h1>Xây dựng từ Việt Nam, vươn ra Đông Nam Á</h1>
          <p className="page-hero-note">
            Kết nối sản phẩm tiềm năng với những thị trường rộng mở hơn
          </p>
        </Reveal>

        <Reveal as="section" className="content-panel about-page-panel">
          <div className="about-story">
            <p className="kicker">Từ cơ hội đến tăng trưởng</p>
            <p className="about-story-lead">
              Vieton được xây dựng trên một ý tưởng đơn giản: tìm cơ hội kinh
              doanh mạnh và đưa chúng tới những thị trường lớn hơn
            </p>
            <p>
              Bắt đầu từ marketing hiệu suất và thương mại điện tử, Vieton phát
              triển năng lực trong nghiên cứu sản phẩm, sourcing, kiểm thử thị
              trường, hệ thống bán hàng và mở rộng khắp Đông Nam Á
            </p>
            <p>
              Chúng tôi kết hợp trực giác, thực thi và hệ thống vận hành có khả
              năng nhân rộng để sản phẩm không chỉ được ra mắt — mà còn phát
              triển, thích ứng và mở rộng qua nhiều thị trường mới
            </p>
          </div>
          <div className="about-journey" aria-label="Hành trình phát triển">
            <div>
              <span>01</span>
              <p>Khám phá cơ hội</p>
            </div>
            <div>
              <span>02</span>
              <p>Kiểm thử thị trường</p>
            </div>
            <div>
              <span>03</span>
              <p>Mở rộng tăng trưởng</p>
            </div>
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
