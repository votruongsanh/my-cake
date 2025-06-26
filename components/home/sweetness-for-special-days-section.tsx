"use client";

import { Store, Wine, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SweetnessForSpecialDaysSection() {
  const featureItems = [
    {
      icon: <Store className="h-16 w-16 text-gray-800" />,
      title: "Tiệm Bánh Ngọt",
      description:
        "Nơi mỗi chiếc bánh là một tác phẩm nghệ thuật, mang đến hương vị ngọt ngào và những trải nghiệm khó quên.",
    },
    {
      icon: (
        <div className="relative flex items-center justify-center">
          <Wine className="h-16 w-16 text-gray-800 transform -rotate-12 translate-x-2" />
          <Wine className="h-16 w-16 text-gray-800 transform rotate-12 -translate-x-2" />
        </div>
      ),
      title: "Dịp Kỷ Niệm",
      description:
        "Hoàn hảo cho mọi bữa tiệc và sự kiện đặc biệt, từ sinh nhật đến lễ kỷ niệm, tạo nên những khoảnh khắc đáng nhớ.",
    },
    {
      icon: <Gift className="h-16 w-16 text-gray-800" />,
      title: "Sô Cô La Nguyên Chất",
      description:
        "Sản phẩm sô cô la cao cấp, được chế biến từ 100% hạt cacao nguyên chất, mang đến hương vị đậm đà và tinh khiết.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Title Block */}
        <div className="relative text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
            CHOCO LOVE
          </p>
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 uppercase leading-tight">
            SWEETNESS FOR
            <br />
            SPECIAL DAYS
          </h2>
          {/* Decorative "Choco" text */}
          <span
            className={cn(
              "absolute text-4xl md:text-5xl font-serif font-light text-yellow-700/70",
              "left-1/2 transform -translate-x-1/2", // Căn giữa ban đầu
              "mt-2 md:mt-4", // Khoảng cách từ dòng trên
              "top-[calc(50%+1.5rem)] md:top-[calc(50%+2rem)]", // Điều chỉnh vị trí dọc
              "translate-x-[calc(50%+1rem)] md:translate-x-[calc(50%+2rem)]", // Dịch sang phải để chồng lên
              "rotate-[-5deg]" // Xoay nhẹ để giống chữ viết tay
            )}
            style={{
              fontFamily: "Playfair Display, serif", // Ví dụ font có thể dùng
              color: "#B8860B", // Màu vàng nâu nhẹ
              opacity: 0.7, // Độ trong suốt nhẹ
            }}
          >
            Choco
          </span>
        </div>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {featureItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
