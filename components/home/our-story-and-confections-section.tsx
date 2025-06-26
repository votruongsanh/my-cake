"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import img1 from "@/public/img/home/confections-section/image1.png";
import img2 from "@/public/img/home/confections-section/image2.png";
import img3 from "@/public/img/home/confections-section/image3.png";
import img4 from "@/public/img/home/confections-section/image4.png";
import img5 from "@/public/img/home/confections-section/image5.png";
import img6 from "@/public/img/home/confections-section/image6.png";
import Link from "next/link";

export default function OurStoryAndConfectionsSection() {
  const confections = [
    {
      id: 1,
      image: img1,
      name: "Praline Hạt Dẻ",
      category: "Sô Cô La Cao Cấp",
    },
    {
      id: 2,
      image: img2,
      name: "Kẹo Dẻo Trái Cây",
      category: "Kẹo Thủ Công",
    },
    {
      id: 3,
      image: img3,
      name: "Hoa Hồng Sô Cô La",
      category: "Nghệ Thuật Bánh",
    },
    {
      id: 4,
      image: img4,
      name: "Sô Cô La Óc Chó",
      category: "Sô Cô La Hạt",
    },
    {
      id: 5,
      image: img5,
      name: "Truffle Đen",
      category: "Truffle Đặc Biệt",
    },
    {
      id: 6,
      image: img6,
      name: "Trứng Sô Cô La Trắng",
      category: "Sô Cô La Trắng",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#FDF8F0] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo Description */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-8">
            Since 2012
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto text-gray-700">
            <div className="text-left">
              <p className="text-base leading-relaxed mb-4">
                Tại Tinh Tế Bakery, chúng tôi tự hào với di sản hơn một thế kỷ
                trong nghệ thuật làm bánh. Từ năm 2012, mỗi công thức, mỗi
                nguyên liệu đều được chọn lọc kỹ lưỡng, đảm bảo mang đến hương
                vị tinh túy nhất.
              </p>
              <p className=" text-lg font-medium mt-4">Alan Perry</p>
            </div>
            <div className="text-left">
              <p className="text-base leading-relaxed mb-4">
                Chúng tôi không ngừng sáng tạo để kết hợp truyền thống với những
                xu hướng hiện đại, tạo ra những sản phẩm không chỉ ngon miệng mà
                còn là biểu tượng của sự sang trọng và đẳng cấp.
              </p>
              <p className=" text-lg font-medium mt-4">Maria T. Jones</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Confections List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-16">
          {confections.map((confection) => (
            <Link
              key={confection.id}
              href={`/products/${confection.id}`}
              className="relative group overflow-hidden aspect-square"
            >
              <Image
                src={confection.image}
                alt={confection.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div
                className={cn(
                  "absolute inset-x-0 top-0 left-0 w-full h-full bg-white/70 p-4",
                  "flex flex-col items-center justify-center text-center",
                  "transform translate-y-full opacity-0 transition-all duration-300 ease-out",
                  "group-hover:translate-y-0 group-hover:opacity-100"
                )}
              >
                <h3 className="text-lg  font-medium mb-1">{confection.name}</h3>
                <p className="text-sm text-[#988779]">{confection.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
