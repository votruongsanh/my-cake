"use client";

import { cn } from "@/lib/utils";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CartIcon from "./cart-icon";
import InitialHeaderContent from "./initial-header-content";
import MobileNavMenu from "./mobile-nav-menu";

// Danh sách các mục menu đã được cập nhật để trỏ đến các trang thực
const navItems = [
  { href: "/", label: "Home", active: true },
  // { href: "/recipe", label: "Recipe" }, // Tạm ẩn
  // { href: "/blog", label: "Blog" }, // Tạm ẩn
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" }, // Giữ lại gallery vì có thể là một phần của trang chủ
  { href: "/shop", label: "Shop" },
];

const HeaderMain = () => {
  // State for desktop header scroll behavior
  const [isScrolledPastSlider, setIsScrolledPastSlider] = useState(false);
  const [isFixedHeaderVisible, setIsFixedHeaderVisible] = useState(false);
  const lastScrollY = useRef(0);
  const initialHeaderRef = useRef<HTMLElement>(null);

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const mobileHeaderRef = useRef<HTMLElement>(null);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);

  useEffect(() => {
    // Measure mobile header height for positioning the mobile menu
    if (mobileHeaderRef.current) {
      setMobileHeaderHeight(mobileHeaderRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // --- Mobile Header Logic ---
      if (isScrollingDown && currentScrollY > 100) {
        setIsMobileHeaderVisible(false);
      } else {
        setIsMobileHeaderVisible(true);
      }

      // --- Desktop Header Logic ---
      const initialHeaderHeight = initialHeaderRef.current
        ? initialHeaderRef.current.offsetHeight
        : 0;
      const sliderHeight = window.innerHeight;
      const scrollThreshold = sliderHeight - initialHeaderHeight;

      setIsScrolledPastSlider(currentScrollY > scrollThreshold);

      if (isScrollingDown && currentScrollY > initialHeaderHeight) {
        setIsFixedHeaderVisible(false);
      } else {
        setIsFixedHeaderVisible(true);
      }

      // Reset states at top
      if (currentScrollY <= 0) {
        setIsScrolledPastSlider(false);
        setIsFixedHeaderVisible(false);
        setIsMobileHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header - Fixed */}
      <header
        ref={mobileHeaderRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white shadow-md p-4 md:hidden",
          "transition-transform duration-300 ease-in-out",
          isMobileHeaderVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <Link href="/" aria-label="Home">
          <ChefHat className="w-8 h-8 text-black" />
        </Link>
        <div className="flex items-center gap-6">
          <CartIcon itemCount={0} />
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={cn(
              "relative flex items-center justify-center h-9 w-20 rounded-full border border-gray-300 bg-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 ease-in-out hover:bg-gray-100 active:scale-95",
              "h-[60px] w-[60px] cursor-pointer"
            )}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu - Slides down from under the header */}
      <MobileNavMenu
        navItems={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        headerHeight={mobileHeaderHeight}
        isHeaderVisible={isMobileHeaderVisible}
      />

      {/* Desktop Headers - Logic remains for larger screens */}
      <div className="hidden md:block relative">
        {/* Initial Header: Transparent, over slider */}
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
            {/* Using InitialHeaderContent for both, assuming text color is handled or acceptable */}
            <InitialHeaderContent navItems={navItems} />
          </div>
        </header>

        {/* Fixed Header: Appears on scroll */}
        <header
          className={cn(
            "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out bg-white shadow-md",
            isScrolledPastSlider && isFixedHeaderVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto flex items-center justify-between px-8 py-6">
            <InitialHeaderContent navItems={navItems} />
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderMain;
