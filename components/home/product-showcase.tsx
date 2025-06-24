"use client";

import { cn } from "@/lib/utils";
import Image1 from "@/public/img/home/product-showcase/ChocolateTruffles.png";
import Image2 from "@/public/img/home/product-showcase/ChocoPralines.png";
import Image4 from "@/public/img/home/product-showcase/DarkChocolate.png";
import Image3 from "@/public/img/home/product-showcase/SelectionOfFinest.png";
import { StaticImageData } from "next/image";
import ProductCard from "./product-card";

interface Product {
  id: number;
  image: StaticImageData;
  name: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: Image1,
    name: "Chocolate Truffles",
    price: "$29.00",
  },
  {
    id: 2,
    image: Image2,
    name: "Choco Pralines",
    price: "$31.00",
  },
  {
    id: 3,
    image: Image3,
    name: "Selection Of Finest",
    price: "$52.00",
  },
  {
    id: 4,
    image: Image4,
    name: "Dark Chocolate",
    price: "$43.00",
  },
];

export default function ProductShowcase() {
  return (
    <section className="container mx-auto">
      {/* Titles Section */}
      <div className="relative text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-serif text-gray-800 uppercase leading-tight">
          WE CREATE LOVELY
          <br />
          MEMORIES
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
            // Để mô phỏng font script, có thể dùng font-family tùy chỉnh nếu có
            // Hoặc dùng một font serif nhẹ và màu sắc để tạo cảm giác tương tự
            fontFamily: "Playfair Display, serif", // Ví dụ font có thể dùng
            color: "#B8860B", // Màu vàng nâu nhẹ
            opacity: 0.7, // Độ trong suốt nhẹ
          }}
        >
          Choco
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(index % 2 === 0 ? "mt-4" : "mt-8")}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
