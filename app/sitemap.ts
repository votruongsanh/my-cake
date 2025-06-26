import { MetadataRoute } from "next";

// Giả sử đây là URL trang web của bạn
export const URL = "https://b5ca-115-73-213-198.ngrok-free.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Thêm các trang tĩnh của bạn vào đây
  const staticPages = [
    "/",
    "/recipe",
    "/blog",
    "/about",
    "/contact",
    "/gallery",
    "/shop",
    "/presets",
    "/print",
    "/lifestyle",
    "/travel",
  ];

  const staticPageUrls = staticPages.map((page) => ({
    url: `${URL}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const, // Hoặc "daily", "monthly", "yearly"
    priority: page === "/" ? 1 : 0.8, // Trang chủ có độ ưu tiên cao nhất
  }));

  // Nếu bạn có các trang động (ví dụ: các bài blog, sản phẩm)
  // bạn cần fetch dữ liệu và tạo URL cho chúng ở đây.
  // Ví dụ:
  // const products = await fetch('https://.../products').then(res => res.json());
  // const productUrls = products.map(product => ({
  //   url: `${URL}/shop/${product.slug}`,
  //   lastModified: new Date(product.updatedAt),
  //   priority: 0.7,
  // }));

  return [
    ...staticPageUrls,
    // ...productUrls, // Thêm các URL động vào đây
  ];
}
