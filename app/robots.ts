import { MetadataRoute } from "next";
import { URL } from "./sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Áp dụng cho tất cả các bot
      allow: "/", // Cho phép thu thập dữ liệu từ tất cả các trang
      disallow: "/private/", // Ví dụ: không cho phép thu thập dữ liệu từ trang private
    },
    sitemap: `${URL}/sitemap.xml`, // Đường dẫn đến file sitemap.xml được tạo tự động
  };
}
