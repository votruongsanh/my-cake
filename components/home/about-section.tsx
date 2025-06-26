"use client";

import { cn } from "@/lib/utils";
import storeImg from "@/public/img/home/about/storeImg.png";
import workerImg from "@/public/img/home/about/workerImg.png";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ButtonMain } from "../common/button-main";

export default function AboutSection() {
  return (
    <section
      className={cn(
        "bg-[url('/img/home/about/bgStory.png')] bg-cover bg-center bg-no-repeat",
        "p-8 bg-white"
      )}
    >
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-4")}>
        {/* Item1 chiếm 1/3 chiều rộng */}
        <div className="lg:col-span-4 pr-8">
          <Image
            src={storeImg}
            alt="Our Story"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Item2 chiếm 0.5/3 chiều rộng */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <Image
            src={workerImg}
            alt="Our Story"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Item3 chiếm 1.5/3 chiều rộng */}
        <div className="lg:col-span-6 p-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl  text-gray-800 mb-6 leading-tight">
              Câu Chuyện Về Tinh Tế Bakery
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Chúng tôi bắt đầu hành trình với niềm đam mê tạo ra những chiếc
              bánh không chỉ ngon miệng mà còn là tác phẩm nghệ thuật. Mỗi chiếc
              bánh tại Tinh Tế Bakery đều được làm thủ công từ những nguyên liệu
              tươi ngon nhất, với công thức độc đáo được truyền lại qua nhiều
              thế hệ.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chúng tôi tin rằng bánh ngọt không chỉ là món ăn, mà còn là cầu
              nối của những khoảnh khắc hạnh phúc, những kỷ niệm đáng nhớ. Hãy
              để Tinh Tế Bakery mang đến sự ngọt ngào và tinh tế cho cuộc sống
              của bạn.
            </p>
            <Link href="/about">
              <ButtonMain variant="outline" size="lg" className="py-6">
                Tìm Hiểu Thêm
                <MoveRight className="ml-2" />
              </ButtonMain>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
