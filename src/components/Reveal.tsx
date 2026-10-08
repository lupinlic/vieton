"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

type RevealElement =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "main"
  | "article"
  | "aside"
  | "ul"
  | "li"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "nav";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: RevealElement;
  delay?: number;
};

export function Reveal({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.14 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const commonProps = {
    className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
    style: { transitionDelay: delay ? `${delay}ms` : undefined },
  };

  switch (Component) {
    case "section":
      return (
        <section ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </section>
      );
    case "header":
      return (
        <header ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </header>
      );
    case "footer":
      return (
        <footer ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </footer>
      );
    case "main":
      return (
        <main ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </main>
      );
    case "article":
      return (
        <article ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </article>
      );
    case "aside":
      return (
        <aside ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </aside>
      );
    case "ul":
      return (
        <ul ref={ref as RefObject<HTMLUListElement>} {...commonProps}>
          {children}
        </ul>
      );
    case "li":
      return (
        <li ref={ref as RefObject<HTMLLIElement>} {...commonProps}>
          {children}
        </li>
      );
    case "p":
      return (
        <p ref={ref as RefObject<HTMLParagraphElement>} {...commonProps}>
          {children}
        </p>
      );
    case "span":
      return (
        <span ref={ref as RefObject<HTMLSpanElement>} {...commonProps}>
          {children}
        </span>
      );
    case "h1":
      return (
        <h1 ref={ref as RefObject<HTMLHeadingElement>} {...commonProps}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={ref as RefObject<HTMLHeadingElement>} {...commonProps}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={ref as RefObject<HTMLHeadingElement>} {...commonProps}>
          {children}
        </h3>
      );
    case "nav":
      return (
        <nav ref={ref as RefObject<HTMLElement>} {...commonProps}>
          {children}
        </nav>
      );
    case "div":
    default:
      return (
        <div ref={ref as RefObject<HTMLDivElement>} {...commonProps}>
          {children}
        </div>
      );
  }
}
