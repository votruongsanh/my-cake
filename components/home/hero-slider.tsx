"use client";

import Image1 from "@/public/img/home/hero-slider/image1.png";
import Image2 from "@/public/img/home/hero-slider/image2.png";
import Image3 from "@/public/img/home/hero-slider/image3.png";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: Image1,
    title: "Khám phá vẻ đẹp tiềm ẩn",
    subtitle: "Nơi mỗi khoảnh khắc là một câu chuyện",
  },
  {
    id: 2,
    image: Image2,
    title: "Hành trình của sự sáng tạo",
    subtitle: "Nghệ thuật và cuộc sống hòa quyện",
  },
  {
    id: 3,
    image: Image3,
    title: "Phong cách sống tinh tế",
    subtitle: "Đơn giản là vẻ đẹp vĩnh cửu",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            // fill
            className="z-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-5xl md:text-6xl font-serif  mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-xl md:text-2xl font-light text-gray-500 drop-shadow-md">
                {slide.subtitle}
              </p>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
