"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import JuliaChildsImg from "@/public/img/home/quote-section/JuliaChilds.png";
import JacquesTorresImg from "@/public/img/home/quote-section/JacquesTorres.png";
import MaryBerryImg from "@/public/img/home/quote-section/MaryBerry.png";
import ErmaBombeckImg from "@/public/img/home/quote-section/ErmaBombeck.png";
import BuddyValastroImg from "@/public/img/home/quote-section/BuddyValastro.png";

const quotes = [
  {
    quote: "A party without cake is just a meeting.",
    author: "Julia Child",
    avatarSrc: JuliaChildsImg,
  },
  {
    quote: "Cakes are special. Every birthday ends with something sweet.",
    author: "Mary Berry",
    avatarSrc: MaryBerryImg,
  },
  {
    quote:
      "Seize the moment. Remember the women on Titanic who waved off dessert.",
    author: "Erma Bombeck",
    avatarSrc: ErmaBombeckImg,
  },
  {
    quote: "Cakes are like books, new ones to try, old ones to enjoy again.",
    author: "Buddy Valastro",
    avatarSrc: BuddyValastroImg,
  },
  {
    quote: "Life is short, eat dessert first.",
    author: "Jacques Torres",
    avatarSrc: JacquesTorresImg,
  },
];

export default function QuoteSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        ),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlideIndex, resetTimeout]);

  const goToNextSlide = () => {
    resetTimeout();
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    resetTimeout();
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const currentQuote = quotes[currentSlideIndex];

  return (
    <div className="bg-[#fdf8ed]">
      <div className="py-24 relative">
        <div className="overflow-hidden">
          <div className="px-8 flex flex-col items-center justify-center min-h-[300px] transition-opacity duration-700">
            <p className="text-2xl md:text-3xl italic leading-relaxed uppercase text-center mx-auto mt-[77px] mb-[45px] max-w-[1000px] text-[38px]">
              &ldquo;{currentQuote.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-foreground">
                <Image
                  src={currentQuote.avatarSrc}
                  alt={`Avatar of ${currentQuote.author}`}
                  fill
                  className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <p className="text-lg font-semibold text-gray-600">
                {currentQuote.author}
              </p>
            </div>
          </div>

          <div
            className="absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 text-3xl cursor-pointer"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft
              strokeWidth={1}
              className="text-gray-700 hover:text-gray-500"
              size="50"
            />
          </div>
          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-300 text-3xl cursor-pointer"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight
              strokeWidth={1}
              className="text-gray-700 hover:text-gray-500"
              size="50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
