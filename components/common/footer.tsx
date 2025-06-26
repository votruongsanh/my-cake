"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/products" },
    { label: "Liên hệ", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const favoriteCategories = [
    { label: "Bánh Ngọt", href: "/products?category=banh-ngot" },
    { label: "Sô Cô La", href: "/products?category=socola" },
    { label: "Kẹo Thủ Công", href: "/products?category=keo-thu-cong" },
    { label: "Bánh Kem", href: "/products?category=banh-kem" },
  ];

  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8 text-gray-700">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl  font-medium mb-4 text-gray-800">
            Về Chúng Tôi
          </h3>
          <p className="text-sm leading-relaxed">
            Tại Tinh Tế Bakery, chúng tôi tin rằng mỗi chiếc bánh là một tác
            phẩm nghệ thuật, được tạo ra từ niềm đam mê và những nguyên liệu tốt
            nhất.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl  font-medium mb-4 text-gray-800">
            Liên Kết Nhanh
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Favorite Categories */}
        <div>
          <h3 className="text-xl  font-medium mb-4 text-gray-800">
            Danh Mục Yêu Thích
          </h3>
          <ul className="space-y-2">
            {favoriteCategories.map((category, index) => (
              <li key={index}>
                <Link
                  href={category.href}
                  className="text-sm hover:text-gray-900 transition-colors"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl  font-medium mb-4 text-gray-800">Liên Hệ</h3>
          <p className="text-sm">123 Đường Bánh Ngọt, Quận 1, TP.HCM</p>
          <p className="text-sm">Điện thoại: (028) 1234 5678</p>
          <p className="text-sm">Email: info@tinh-te-bakery.com</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <Youtube className="h-6 w-6 text-gray-600 hover:text-gray-900 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
        © {new Date().getFullYear()} Tinh Tế Bakery. All rights reserved.
      </div>
    </footer>
  );
}
