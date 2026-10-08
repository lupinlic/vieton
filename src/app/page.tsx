"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";

function CountUp({
  value,
  suffix = "",
  decimals = 0,
  pad = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  pad?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let startTime: number | undefined;
    const duration = 1500;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = (time: number) => {
      if (reduceMotion) {
        setCount(value);
        return;
      }

      startTime ??= time;
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(value * (1 - (1 - progress) ** 3));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  const formattedCount = count.toFixed(decimals);

  return (
    <>
      {pad ? formattedCount.padStart(pad, "0") : formattedCount}
      {suffix}
    </>
  );
}

const services = [
  {
    number: "01",
    title: "Marketing hiệu suất",
    description: "Biến sự chú ý thành doanh thu",
    items: [
      "Meta Ads",
      "TikTok Ads",
      "Google Ads",
      "Kiểm thử sáng tạo",
      "Tối ưu chuyển đổi",
      "Mở rộng chiến dịch",
    ],
  },
  {
    number: "02",
    title: "Tìm nguồn hàng",
    description: "Tìm sản phẩm có tiềm năng mở rộng",
    items: [
      "Nghiên cứu sản phẩm",
      "Tìm nhà cung cấp",
      "Nhập khẩu",
      "Tối ưu chi phí",
      "Kiểm soát chất lượng",
      "Phát triển sản phẩm",
    ],
  },
  {
    number: "03",
    title: "Thương mại điện tử",
    description: "Xây dựng hệ thống đẩy mạnh doanh số",
    items: [
      "Thiết lập cửa hàng",
      "Landing page",
      "Thanh toán",
      "Vận hành giao hàng",
      "Hỗ trợ khách hàng",
      "Tối ưu chuyển đổi",
    ],
  },
  {
    number: "04",
    title: "Mở rộng thị trường",
    description: "Một sản phẩm, nhiều thị trường",
    items: [
      "Nghiên cứu thị trường",
      "Địa phương hóa",
      "Lokal hóa sáng tạo",
      "Quảng cáo",
      "Vận hành ship hàng",
      "Kiểm thử thị trường",
    ],
  },
];

const caseStudies = [
  {
    kicker: "Case study 01",
    title: "Ra mắt mỹ phẩm",
    market: "Thái Lan",
    channel: "Meta Ads",
    result: "ROAS 4.8x",
  },
  {
    kicker: "Case study 02",
    title: "Hàng gia dụng",
    market: "Malaysia",
    channel: "TikTok + Search",
    result: "+160% doanh số",
  },
  {
    kicker: "Case study 03",
    title: "Tăng trưởng DTC",
    market: "Indonesia",
    channel: "Full-funnel",
    result: "Mở rộng 3 thị trường",
  },
];

const markets = [
  {
    name: "Việt Nam",
    items: ["Thâm nhập thị trường", "Khám phá sản phẩm", "Hệ thống mở rộng"],
  },
  {
    name: "Thái Lan",
    items: [
      "Địa phương hóa sáng tạo",
      "Marketing hiệu suất",
      "Vận hành giao hàng",
    ],
  },
  {
    name: "Indonesia",
    items: [
      "Kiểm thử chiến dịch",
      "Vận hành sàn thương mại",
      "Mở rộng tăng trưởng",
    ],
  },
  {
    name: "Malaysia",
    items: ["Nghiên cứu đối tượng", "Mua quảng cáo", "Kích hoạt thương mại"],
  },
  {
    name: "Philippines",
    items: ["Địa phương hóa", "Hành trình khách hàng", "Kiểm thử thị trường"],
  },
  {
    name: "Singapore",
    items: ["Trung tâm khu vực", "Vị thế thương hiệu", "Hiểu biết hiệu suất"],
  },
];

const reasons = [
  {
    title: "Dữ liệu thay cho đoán mò",
    text: "Quyết định được đưa ra dựa trên phản hồi thị trường thực tế, hiệu suất sản phẩm và tăng trưởng có thể đo lường",
  },
  {
    title: "Tốc độ quan trọng",
    text: "Kiểm thử nhanh, học nhanh và mở rộng với kỷ luật khi cơ hội đã được chứng minh",
  },
  {
    title: "Suy nghĩ theo địa phương",
    text: "Mỗi thị trường có người tiêu dùng, hành vi và bối cảnh văn hóa khác nhau, vì vậy chúng tôi thiết kế theo thực tế địa phương",
  },
  {
    title: "Xây dựng để mở rộng",
    text: "Mục tiêu không chỉ là một chiến dịch thắng lợi mà là một hệ thống vận hành có thể lặp lại để tăng trưởng",
  },
  {
    title: "Toàn diện",
    text: "Từ tìm nguồn hàng đến marketing và bán hàng, chúng tôi bao phủ toàn bộ động lực kinh doanh đằng sau sự tăng trưởng",
  },
  {
    title: "Hiệu suất là ưu tiên",
    text: "Chúng tôi tập trung vào kết quả kinh doanh — tỷ lệ chuyển đổi, lợi nhuận, tốc độ và mở rộng thị trường bền vững",
  },
];

const globePoints = [
  { name: "Việt Nam", left: "36%", top: "62%" },
  { name: "Thái Lan", left: "48%", top: "38%" },
  { name: "Malaysia", left: "58%", top: "62%" },
  { name: "Singapore", left: "66%", top: "46%" },
  { name: "Indonesia", left: "75%", top: "58%" },
  { name: "Philippines", left: "69%", top: "30%" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const processListRef = useRef<HTMLOListElement | null>(null);
  const navLinks = [
    { href: "/about", label: "Giới thiệu" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/markets", label: "Thị trường" },
    { href: "/work", label: "Công việc" },
    { href: "/contact", label: "Liên hệ" },
  ];

  useEffect(() => {
    const node = processListRef.current;
    if (!node) return;

    const activateWhenVisible = () => {
      const bounds = node.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
        setProcessVisible(true);
        window.removeEventListener("scroll", activateWhenVisible);
        window.removeEventListener("resize", activateWhenVisible);
      }
    };

    window.addEventListener("scroll", activateWhenVisible, { passive: true });
    window.addEventListener("resize", activateWhenVisible);
    activateWhenVisible();
    return () => {
      window.removeEventListener("scroll", activateWhenVisible);
      window.removeEventListener("resize", activateWhenVisible);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand" aria-label="Trang chủ Vieton">
            <BrandLogo alt="" className="brand-logo" />
          </Link>

          <nav className="topnav" aria-label="Điều hướng chính">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
          </button>
        </div>

        <div
          className={`site-menu ${menuOpen ? "is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="site-menu-panel">
            <button
              type="button"
              className="menu-close"
              aria-label="Đóng menu"
              onClick={() => setMenuOpen(false)}
            >
              Đóng
            </button>

            <div className="nav-menu-items">
              {navLinks.map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span>0{index + 1}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Reveal
          as="section"
          className="relative overflow-hidden py-16 md:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8 xl:px-12">
            <div className="relative z-10">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600 animate-slide-left">
                Từ Việt Nam ra khắp Đông Nam Á
              </p>
              <h1 className="m-0 text-[2rem] space-y-6 font-medium leading-[0.9] tracking-[-0.06em] text-slate-900 md:text-[3rem] xl:text-[3rem]">
                <span className="block animate-slide-left animate-delay-1">
                  Từ một sản phẩm
                </span>
                <span className="block animate-slide-left animate-delay-2">
                  Đến một thị trường
                </span>
                <span className="block animate-slide-left animate-delay-3">
                  Đến cả Đông Nam Á
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 animate-slide-left animate-delay-4 md:text-lg">
                Chúng tôi xây dựng và phát triển doanh nghiệp khắp Đông Nam Á
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 animate-fade-up animate-delay-4">
                <div className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-4 shadow-sm">
                  <div className="text-xl font-semibold tracking-[-0.05em] text-slate-900">
                    <CountUp value={6} pad={2} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Thị trường
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-4 shadow-sm">
                  <div className="text-xl font-semibold tracking-[-0.05em] text-slate-900">
                    <CountUp value={1000} suffix="+" />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Sản phẩm test
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-4 shadow-sm">
                  <div className="text-xl font-semibold tracking-[-0.05em] text-slate-900">
                    <CountUp value={4.8} decimals={1} suffix="x" />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    ROAS mục tiêu
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-delay-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(21,94,239,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  Khám phá Vieton →
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                >
                  Công việc của chúng tôi →
                </Link>
              </div>
            </div>

            <div
              className="relative flex items-center justify-center animate-fade-up animate-delay-3"
              aria-label="Hình minh họa mạng lưới thị trường Đông Nam Á"
            >
              <svg
                viewBox="0 0 640 560"
                className="hero-network-backdrop pointer-events-none absolute inset-[-8%] z-0 h-[116%] w-[116%]"
                aria-hidden="true"
              >
                <g
                  fill="none"
                  stroke="rgba(21,94,239,0.18)"
                  strokeWidth="1.2"
                  strokeDasharray="3 12"
                >
                  <path d="M40 170 145 105 250 145 340 70 470 120 590 65" />
                  <path d="M20 330 125 250 235 300 345 220 460 280 610 205" />
                  <path d="M60 470 170 400 285 445 390 370 520 425 620 350" />
                  <path d="M145 105 125 250 170 400M250 145 235 300 285 445M340 70 345 220 390 370M470 120 460 280 520 425" />
                  <path d="M40 170 235 300 470 120M125 250 345 220 590 65M170 400 390 370 610 205" />
                </g>
                <g fill="rgba(21,94,239,0.38)">
                  <circle cx="40" cy="170" r="2.5" />
                  <circle cx="145" cy="105" r="3" />
                  <circle cx="250" cy="145" r="2.5" />
                  <circle cx="340" cy="70" r="3" />
                  <circle cx="470" cy="120" r="2.5" />
                  <circle cx="590" cy="65" r="3" />
                  <circle cx="20" cy="330" r="2.5" />
                  <circle cx="125" cy="250" r="3" />
                  <circle cx="235" cy="300" r="2.5" />
                  <circle cx="345" cy="220" r="3" />
                  <circle cx="460" cy="280" r="2.5" />
                  <circle cx="610" cy="205" r="3" />
                  <circle cx="60" cy="470" r="2.5" />
                  <circle cx="170" cy="400" r="3" />
                  <circle cx="285" cy="445" r="2.5" />
                  <circle cx="390" cy="370" r="3" />
                  <circle cx="520" cy="425" r="2.5" />
                  <circle cx="620" cy="350" r="3" />
                </g>
              </svg>
              <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),rgba(234,242,255,0.7)_38%,rgba(21,94,239,0.04)_62%,transparent_82%)] blur-[6px]" />
              <div className="globe-scene relative z-10 w-full max-w-[540px]">
                <Image
                  src="/globe-network.png"
                  alt="Mạng lưới toàn cầu Vieton"
                  width={540}
                  height={520}
                  className="relative z-10 w-full max-w-[540px] drop-shadow-[0_20px_42px_rgba(12,33,68,0.08)]"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 z-20">
                  <svg
                    viewBox="0 0 540 520"
                    className="globe-network-lines h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M155 255 C205 225, 230 200, 250 195 S310 180, 360 210 S420 260, 450 245"
                      stroke="rgba(21,94,239,0.38)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="7 10"
                    />
                    <path
                      d="M180 295 C228 312, 260 288, 300 245 S382 200, 430 228"
                      stroke="rgba(21,94,239,0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="7 10"
                    />
                    <path
                      d="M245 120 C270 150, 290 170, 320 185 S370 225, 410 280"
                      stroke="rgba(21,94,239,0.26)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="6 11"
                    />
                    <path
                      d="M248 337 L291 367 L350 335 L390 216"
                      stroke="rgba(21,94,239,0.24)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="7 9"
                    />
                  </svg>

                  {globePoints.map((point, index) => (
                    <div
                      key={point.name}
                      className="globe-point absolute -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: point.left,
                        top: point.top,
                        animationDelay: `${index * 0.25}s`,
                      }}
                    >
                      <span className="globe-dot absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_8px_rgba(21,94,239,0.14)]" />
                      <span className="globe-label ml-5 inline-flex items-center rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 shadow-sm backdrop-blur-sm">
                        {point.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" className="section-shell">
          <div className="about-grid">
            <div className="about-copy">
              <p className="kicker">01 — Về Vieton</p>
              <h2 className="section-title space-y-4 ">
                <span>Chúng tôi xây cho một</span>
                <span>thế giới lớn hơn</span>
              </h2>
              <div className="container" style={{ marginTop: "32px" }}>
                <p className="lead">
                  Vieton là công ty tăng trưởng và thương mại điện tử kết hợp
                  marketing hiệu suất, tìm nguồn hàng và vận hành thương mại
                  điện tử để khám phá, ra mắt và mở rộng sản phẩm khắp Đông Nam
                  Á.
                </p>
                <p className="lead" style={{ marginTop: "12px" }}>
                  Từ khám phá sản phẩm đến mở rộng thị trường, Vieton xây dựng
                  động lực tăng trưởng cho sản phẩm và doanh nghiệp.
                </p>
              </div>
            </div>

            <div className="about-rail" aria-label="Chuỗi giá trị thương hiệu">
              <span className="story-step">
                <small>Sản phẩm</small>Khám phá
              </span>
              <span className="story-step">
                <small>Marketing</small>Thuyết phục
              </span>
              <span className="story-step">
                <small>Thương mại</small>Bán hàng
              </span>
              <span className="story-step">
                <small>Thị trường</small>Mở rộng
              </span>
              <span className="story-step">
                <small>Tăng trưởng</small>Phát triển
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="network-heading"
        >
          <div className="container">
            <p className="kicker" id="network-heading">
              Từ Việt Nam → Đông Nam Á
            </p>
          </div>

          <div className="network-banner">
            <div className="network-intro">
              <span className="network-eyebrow">VIETON REGIONAL NETWORK</span>
              <h3>Một khu vực, nhiều thị trường cùng kết nối</h3>
              <p>Từ Việt Nam, chúng tôi kết nối sản phẩm với khách hàng và cơ hội trên khắp Đông Nam Á</p>
            </div>
            <div className="network-graphic" aria-label="Mạng lưới kết nối các thị trường Đông Nam Á">
              <svg
                viewBox="0 0 1200 450"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Các tuyến kết nối Việt Nam với Thái Lan, Malaysia, Singapore, Indonesia và Philippines"
              >
                <defs>
                  <linearGradient id="sea-route" x1="0" x2="1">
                    <stop offset="0%" stopColor="#155eef" stopOpacity=".22" />
                    <stop offset="50%" stopColor="#155eef" stopOpacity=".8" />
                    <stop offset="100%" stopColor="#55b5f7" stopOpacity=".35" />
                  </linearGradient>
                  <radialGradient id="sea-glow">
                    <stop offset="0%" stopColor="#d9eaff" stopOpacity=".85" />
                    <stop offset="100%" stopColor="#edf5ff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="570" cy="235" rx="390" ry="205" fill="url(#sea-glow)" />
                <g transform="translate(-206 -34) scale(1.4 1.2)">
                  <g className="network-land" fill="#dceaff">
                    <path d="m337 77 26-14 28 7 14 18-8 17 15 16-9 20-24 5-12 22-20-4-13-22-21-8-5-20 15-13-5-15z" />
                    <path d="m402 145 21-8 22 10 12 22-12 19-2 24-17 20-8 28-14-13-3-24-14-15 7-22-8-17z" />
                    <path d="m440 212 23-13 25 9 14 21-9 20-20 4-10 18-19-5-9-22z" />
                    <path d="m466 258 17-9 14 12-3 20-14 12-12-13z" />
                    <path d="m495 292 11-5 10 9-4 11-12 2-8-8z" />
                    <path d="m532 302 19-9 20 11 17-4 18 14 22 2 20 15 26 3 17 17-11 17-25 3-17-12-23 3-18-13-23 4-14-18-25-3-15-16-22 1-13-13z" />
                    <path d="m649 99 18-9 17 7 8 17-10 16-17-4-12-11z" />
                    <path d="m678 137 23-7 18 12 4 22-15 16-24-7-11-17z" />
                    <path d="m709 184 16-8 11 12-7 15-14-2z" />
                    <path d="m735 217 12-5 8 11-9 9-12-5z" />
                    <path d="m773 256 13-6 10 10-7 12-14-2z" />
                    <path d="m828 286 16-4 14 9-4 12-17 3-13-8z" />
                  </g>
                  <g className="network-routes" fill="none" stroke="url(#sea-route)" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M514 172 Q470 150 430 176" />
                    <path d="M514 172 Q491 210 476 239" />
                    <path d="M514 172 Q531 213 511 274" />
                    <path d="M514 172 Q560 248 610 333" />
                    <path d="M514 172 Q595 123 680 151" />
                    <path d="M430 176 Q459 199 476 239" />
                    <path d="M476 239 Q494 256 511 274" />
                    <path d="M511 274 Q563 292 610 333" />
                  </g>
                  <circle className="network-signal" cx="514" cy="172" r="5" fill="#155eef" />
                </g>
              </svg>

              <div className="network-hub-label">VIETON <span>Trung tâm kết nối</span></div>
              <span className="network-node node-vn" aria-label="Việt Nam"><i />Việt Nam</span>
              <span className="network-node node-th" aria-label="Thái Lan"><i />Thái Lan</span>
              <span className="network-node node-my" aria-label="Malaysia"><i />Malaysia</span>
              <span className="network-node node-sg" aria-label="Singapore"><i />Singapore</span>
              <span className="network-node node-id" aria-label="Indonesia"><i />Indonesia</span>
              <span className="network-node node-ph" aria-label="Philippines"><i />Philippines</span>
              <div className="network-legend"><span /> Thị trường kết nối</div>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="services-heading"
        >
          <div className="services-wrap">
            <p className="kicker" id="services-heading">
              02 — Chúng tôi làm gì
            </p>
            <h2 className="section-title">Năng lực</h2>

            <div className="process-grid">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="service-card animate-fade-up"
                >
                  <div>
                    <span className="service-number">{service.number}</span>
                    <h3 className="service-title">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="product-heading"
        >
          <div className="product-grid">
            <div>
              <p className="kicker" id="product-heading">
                Một sản phẩm, nhiều thị trường
              </p>
              <h2 className="section-title space-y-4">
                <span>Một sản phẩm</span>
                <span>Nhiều thị trường</span>
              </h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                Sản phẩm được kiểm thử, tinh chỉnh và mở rộng thông qua hệ thống
                hiệu suất phù hợp, sự kết hợp thị trường đúng và mô hình vận
                hành phù hợp.
              </p>
            </div>

            <div
              className="product-visual"
              aria-label="Sơ đồ một sản phẩm được mở rộng sang nhiều thị trường"
            >
              <svg
                viewBox="0 0 620 400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Một sản phẩm được kiểm chứng kết nối tới năm thị trường Đông Nam Á"
              >
                <defs>
                  <linearGradient id="product-route" x1="0" x2="1">
                    <stop offset="0%" stopColor="#155eef" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#3d8cf5" stopOpacity=".8" />
                  </linearGradient>
                </defs>
                <path className="product-route" d="M205 200 C270 200 280 72 360 72" />
                <path className="product-route" d="M205 200 C275 200 288 135 360 135" />
                <path className="product-route" d="M205 200 C275 200 288 200 360 200" />
                <path className="product-route" d="M205 200 C275 200 288 265 360 265" />
                <path className="product-route" d="M205 200 C270 200 280 328 360 328" />
                <circle className="product-route-node" cx="205" cy="200" r="5" />
              </svg>

              <div className="product-focus">
                <span>Sản phẩm</span>
                <small>Đã kiểm chứng</small>
              </div>
              <div className="product-market-list" aria-label="Các thị trường mở rộng">
                <div className="product-market"><i />Việt Nam<span>Thị trường gốc</span></div>
                <div className="product-market"><i />Thái Lan<span>Địa phương hóa</span></div>
                <div className="product-market"><i />Malaysia<span>Thương mại</span></div>
                <div className="product-market"><i />Singapore<span>Trung tâm khu vực</span></div>
                <div className="product-market"><i />Indonesia<span>Mở rộng tăng trưởng</span></div>
              </div>
            </div>
          </div>
        </Reveal>

        <section
          className="section-shell process-section"
          aria-labelledby="process-heading"
        >
          <div className="container process-layout">
            <div className="process-intro">
              <p className="kicker" id="process-heading">
                03 — Cách chúng tôi mở rộng
              </p>
              <h2 className="section-title">Từ cơ hội đến tăng trưởng</h2>
              <p>
                Một quy trình xuyên suốt giúp biến sản phẩm tiềm năng thành
                doanh nghiệp có thể mở rộng trong khu vực
              </p>
            </div>

            <ol
              ref={processListRef}
              className={`process-list ${processVisible ? "is-active" : ""}`}
            >
              <li data-step="01">
                <strong>Khám phá</strong>
                <span>Tìm sản phẩm và cơ hội có tiềm năng thị trường</span>
              </li>
              <li data-step="02">
                <strong>Nguồn hàng</strong>
                <span>
                  Tìm nhà cung cấp và tối ưu hóa kinh tế sản phẩm cho lợi nhuận
                  và tốc độ
                </span>
              </li>
              <li data-step="03">
                <strong>Kiểm thử</strong>
                <span>
                  Đo lường sản phẩm, sáng tạo, nhóm khách hàng, ưu đãi, landing
                  page và thị trường mục tiêu trước khi mở rộng
                </span>
              </li>
              <li data-step="04">
                <strong>Mở rộng</strong>
                <span>
                  Tăng đầu tư cho các chiến dịch, sản phẩm và hệ thống chuyển
                  đổi đang hoạt động tốt
                </span>
              </li>
              <li data-step="05">
                <strong>Phát triển</strong>
                <span>
                  Đưa sản phẩm thành công vào các thị trường Đông Nam Á khác với
                  mô hình lặp lại
                </span>
              </li>
            </ol>
          </div>
        </section>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="work-heading"
        >
          <div className="container case-heading pb-10">
            <div>
              <p className="kicker" id="work-heading">
                04 — Công việc nổi bật
              </p>
              <h2 className="section-title">
                <span>Tăng trưởng có số liệu</span>
              </h2>
            </div>
            <p className="case-intro">
              Mỗi chiến dịch được thiết kế theo thị trường, ngành hàng và mục
              tiêu tăng trưởng cụ thể
            </p>
          </div>

          <div className="case-grid">
            {caseStudies.map((entry) => (
              <article key={entry.kicker} className="case-card animate-fade-up">
                <div className="case-visual">
                  <span className="case-visual-label">{entry.market}</span>
                  <div className="case-visual-result">
                    <span>Kết quả chiến dịch</span>
                    <strong>{entry.result}</strong>
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
                  <span className="case-kicker">{entry.kicker}</span>
                  <h3>{entry.title}</h3>
                  <div className="case-meta">
                    <span>{entry.market}</span>
                    <span>{entry.channel}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="markets-heading"
        >
          <div className="container market-heading pb-10">
            <div>
              <p className="kicker" id="markets-heading">
                05 — Thị trường của chúng tôi
              </p>
              <h2 className="section-title">
                <span>Một khu vực Sáu thị trường</span>
                <span></span>
              </h2>
            </div>
            <p className="market-intro">
              Mỗi quốc gia có cách tiếp cận riêng, cùng kết nối trong một hành
              trình tăng trưởng xuyên Đông Nam Á
            </p>
          </div>

          <div className="market-grid">
            {markets.map((market, index) => (
              <article
                key={market.name}
                className="country-card animate-fade-up"
                data-market-index={String(index + 1).padStart(2, "0")}
              >
                <span className="market-card-label">
                  Thị trường {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{market.name}</h3>
                <ul>
                  {market.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="why-heading"
        >
          <div className="container why-heading pb-10">
            <div>
              <p className="kicker" id="why-heading">
                Vì sao chọn Vieton
              </p>
              <h2 className="section-title ">
                <span>Lợi thế cho tăng trưởng dài hạn</span>
                
              </h2>
            </div>
            <p className="why-intro">
              Từ dữ liệu đến vận hành, mọi quyết định đều hướng đến tăng trưởng
              thực chất và có thể mở rộng
            </p>
          </div>

          <div className="why-grid">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="reason-card animate-fade-up"
              >
                <span className="reason-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
                <span className="reason-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="mission-heading"
        >
          <div className="mission-grid">
            <div className="mission-box animate-fade-up">
              <span className="mission-label">
                <span>01</span>
                Mục đích
              </span>
              <h3 id="mission-heading">Sứ mệnh</h3>
              <p>
                Biến sản phẩm tốt thành
                <strong>doanh nghiệp vững mạnh</strong>
              </p>
              <span className="mission-footnote">Từ tiềm năng đến tăng trưởng</span>
            </div>
            <div className="vision-box animate-fade-up animate-delay-1">
              <span className="mission-label">
                <span>02</span>
                Định hướng
              </span>
              <h3>Tầm nhìn</h3>
              <p>
                Xây dựng từ Việt Nam
                <strong>Mở rộng khắp Đông Nam Á</strong>
              </p>
              <span className="vision-route" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="mission-footnote">Việt Nam <b>→</b> Đông Nam Á</span>
            </div>
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="section-shell"
          aria-labelledby="contact-heading"
        >
          <div className="cta-panel contact-panel animate-fade-up">
            <div className="contact-panel-copy">
              <p className="kicker" style={{ color: "#dbeafe" }}>
                Sẵn sàng xây dựng điều lớn hơn?
              </p>
              <h3 id="contact-heading">Hãy nói chuyện</h3>
              <p className="contact-panel-note">
                Để lại thông tin để bắt đầu trao đổi cùng Vieton
              </p>
            </div>
            <div className="contact-fields" role="group" aria-label="Thông tin liên hệ">
              <label className="contact-field">
                <span>Họ và tên</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Tên của bạn"
                />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="ban@congty.com"
                />
              </label>
              <label className="contact-field">
                <span>Số điện thoại</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+84"
                />
              </label>
              <label className="contact-field">
                <span>Doanh nghiệp</span>
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Tên doanh nghiệp"
                />
              </label>
              <label className="contact-field contact-field-message">
                <span>Bạn muốn trao đổi về điều gì?</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Chia sẻ ngắn về mục tiêu của bạn"
                />
              </label>
              <div className="contact-form-actions">
                <p>Biểu mẫu chưa kết nối chức năng gửi</p>
                <button className="contact-submit" type="button">
                  Gửi thông tin <span aria-hidden="true">→</span>
                </button>
              </div>
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
              <li>
                <Link href="/about">Giới thiệu</Link>
              </li>
              <li>
                <Link href="/services">Dịch vụ</Link>
              </li>
              <li>
                <Link href="/markets">Thị trường</Link>
              </li>
              <li>
                <Link href="/work">Công việc</Link>
              </li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Mạng lưới</h4>
            <ul>
              <li>Việt Nam</li>
              <li>Thái Lan</li>
              <li>Indonesia</li>
              <li>Singapore</li>
            </ul>
          </div>

          <div className="footer-group">
            <h4>Liên hệ</h4>
            <ul>
              <li>
                <Link href="/contact">Liên hệ</Link>
              </li>
              <li>hello@vieton.com</li>
              <li>+84 000 000 000</li>
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
