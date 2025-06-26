import HeaderMain from "@/components/common/header/header-main";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import BackToTopButton from "@/components/common/back-to-top-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "My Cake",
  description:
    "Khám phá thế giới bánh ngọt diệu kỳ tại My Cake. Chúng tôi cung cấp các loại bánh kem, bánh mì, và bánh ngọt được làm thủ công với tình yêu và nguyên liệu tốt nhất.",
  url: "https://b5ca-115-73-213-198.ngrok-free.app",
  ogImage: "https://b5ca-115-73-213-198.ngrok-free.app/og-image.png",
  // Thêm thông tin doanh nghiệp cho Structured Data
  streetAddress: "123 Đường Bánh Ngọt, Quận 1", // Thay bằng địa chỉ thật
  city: "Thành phố Hồ Chí Minh",
  zip: "700000",
  country: "VN",
  phone: "+84 376 110 682", // Thay bằng SĐT thật
  twitterUsername: "@mycake", // Thay bằng tài khoản Twitter thật
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "tiệm bánh",
    "bánh kem",
    "bánh ngọt",
    "đặt bánh online",
    "bánh sinh nhật",
    "bakery",
    "cake shop",
  ],
  authors: [{ name: "My Cake Team" }],
  creator: "My Cake Team",

  // URL chính tắc cho trang chủ
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterUsername,
  },
  // Giải quyết lỗi xung đột favicon bằng cách chỉ định các icon cụ thể hơn
  // và để trình duyệt tự tìm file /favicon.ico trong thư mục public.
  icons: {
    shortcut: `${siteConfig.url}/favicon.ico`,
    apple: `${siteConfig.url}/apple-touch-icon.png`,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  // Thêm mã xác minh cho các công cụ tìm kiếm (thay bằng mã thật của bạn)
  verification: {
    google: "your-google-verification-code",
  },
};

// Cấu hình Viewport và Theme Color theo cách mới của Next.js
export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Dữ liệu có cấu trúc (Structured Data) cho SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery", // Loại hình kinh doanh cụ thể là Tiệm bánh
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      postalCode: siteConfig.zip,
      addressCountry: siteConfig.country,
    },
    url: siteConfig.url,
    telephone: siteConfig.phone,
    openingHours: "Mo-Su 08:00-22:00", // Cập nhật giờ mở cửa thực tế
    image: siteConfig.ogImage,
    priceRange: "$$", // Cập nhật khoảng giá nếu muốn (ví dụ: $, $$, $$$)
  };

  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Chèn Structured Data vào đầu thẻ body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeaderMain />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
