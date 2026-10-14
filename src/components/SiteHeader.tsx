"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";

type SiteHeaderProps = {
  variant?: "default" | "subpage";
};

const navLinks = [
  { href: "/about", label: "Giới thiệu" },
  { href: "/services", label: "Dịch vụ" },
  { href: "/markets", label: "Thị trường" },
  { href: "/work", label: "Công việc" },
  { href: "/contact", label: "Liên hệ" },
];

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const topNavClassName =
    variant === "subpage" ? "topnav subpage-topnav" : "topnav";

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" aria-label="Trang chủ Vieton">
          <BrandLogo alt="" className="brand-logo" />
        </Link>

        <nav className={topNavClassName} aria-label="Điều hướng chính">
          {navLinks.map(({ href, label }) => {
            const isCurrent = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link key={href} href={href} aria-current={isCurrent ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
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
            {navLinks.map(({ href, label }, index) => {
              const isCurrent = pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isCurrent ? "page" : undefined}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span>0{index + 1}</span>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
