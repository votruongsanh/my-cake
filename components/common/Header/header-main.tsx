"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import FixedHeaderContent from "./fixed-header-content";
import InitialHeaderContent from "./initial-header-content";

const navItems = [
  { href: "/", label: "Home", active: true },
  { href: "/recipe", label: "Recipe" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/presets", label: "Presets" },
  { href: "/print", label: "Print" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/travel", label: "Travel" },
];

const HeaderMain = () => {
  const [isScrolledPastSlider, setIsScrolledPastSlider] = useState(false);
  const [isFixedHeaderVisible, setIsFixedHeaderVisible] = useState(false);
  const lastScrollY = useRef(0);
  const initialHeaderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const initialHeaderHeight = initialHeaderRef.current
        ? initialHeaderRef.current.offsetHeight
        : 0;
      const sliderHeight = window.innerHeight; // Giả định HeroSlider chiếm toàn bộ chiều cao viewport

      const scrollThreshold = sliderHeight - initialHeaderHeight;

      setIsScrolledPastSlider(currentScrollY > scrollThreshold);

      if (currentScrollY > lastScrollY.current) {
        setIsFixedHeaderVisible(false);
      } else {
        setIsFixedHeaderVisible(true);
      }

      if (currentScrollY <= 0) {
        setIsScrolledPastSlider(false);
        setIsFixedHeaderVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative">
        {/* Header ban đầu: Nổi lên trên slider, trong suốt, chữ trắng */}
        <header
          ref={initialHeaderRef}
          className={cn(
            "absolute top-0 left-0 right-0 w-full z-40 transition-opacity duration-300 ease-in-out",
            isScrolledPastSlider
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          )}
        >
          <div className="container mx-auto flex items-center justify-between px-8 py-6">
            <InitialHeaderContent navItems={navItems} />
          </div>
        </header>
        {/* Header cố định */}
        <header
          className={cn(
            "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out bg-white shadow-md",
            isScrolledPastSlider && isFixedHeaderVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto flex items-center justify-between px-8 py-6">
            <FixedHeaderContent navItems={navItems} />
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderMain;
