import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vieton.example"),
  icons: {
    icon: "/vieton-icon.png",
    apple: "/vieton-icon.png",
  },
  title: "Vieton — Xây dựng và mở rộng doanh nghiệp khắp Đông Nam Á",
  description:
    "Vieton kết hợp marketing hiệu suất, tìm nguồn hàng và vận hành thương mại điện tử để xây dựng và mở rộng doanh nghiệp khắp Đông Nam Á",
  openGraph: {
    title: "Vieton — Xây dựng và mở rộng doanh nghiệp khắp Đông Nam Á",
    description:
      "Chúng tôi xây dựng và phát triển doanh nghiệp khắp Đông Nam Á thông qua marketing hiệu suất, sourcing sản phẩm, thương mại điện tử và mở rộng thị trường",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieton",
    description:
      "Xây dựng và mở rộng doanh nghiệp khắp Đông Nam Á",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
