"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import image1 from "@/public/img/home/category-showcase-section/image1.png";
import image2 from "@/public/img/home/category-showcase-section/image2.png";

export default function CategoryShowcaseSection() {
  const categories = [
    {
      id: 1,
      image: image1,
      title: "Truffles Caramel",
      description:
        "Khám phá hương vị caramel tan chảy trong từng viên truffle.",
      categorySlug: "truffles-caramel",
    },
    {
      id: 2,
      image: image2,
      title: "Pralines Hạt Phỉ",
      description: "Những viên praline giòn tan với nhân hạt phỉ béo ngậy.",
      categorySlug: "pralines-hat-phi",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.categorySlug}`}
              className="relative block w-full aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay for text content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-3xl md:text-4xl  mb-2 drop-shadow-md">
                  {category.title}
                </h3>
                <p className="text-base md:text-lg font-light mb-4 drop-shadow-sm">
                  {category.description}
                </p>
                <div className="flex items-center space-x-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <MoveRight
                    stroke="#fff"
                    strokeWidth={1}
                    size={32}
                    className="transition-transform group-hover:translate-x-1 duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
