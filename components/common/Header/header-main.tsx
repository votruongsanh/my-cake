"use client";

import { cn } from "@/lib/utils";
import { ChefHat } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import CartIcon from "./cart-icon";
import InitialHeaderContent from "./initial-header-content";
import MobileNavMenu from "./mobile-nav-menu";

const navItems = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
];

const HeaderMain = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // State for desktop header scroll behavior
  const [isScrolledPastSlider, setIsScrolledPastSlider] = useState(false);
  const [isFixedHeaderVisible, setIsFixedHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const initialHeaderRef = useRef<HTMLElement>(null);

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const mobileHeaderRef = useRef<HTMLElement>(null);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);

  useEffect(() => {
    const measureHeader = () => {
      if (mobileHeaderRef.current) {
        setMobileHeaderHeight(mobileHeaderRef.current.offsetHeight);
      }
    };

    measureHeader();
    window.addEventListener("resize", measureHeader);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // Mobile header visibility logic (for all pages)
      if (isScrollingDown && currentScrollY > 100) {
        setIsMobileHeaderVisible(false);
      } else {
        setIsMobileHeaderVisible(true);
      }

      // Desktop header visibility logic (ONLY for the homepage)
      if (isHomePage) {
        const initialHeaderHeight = initialHeaderRef.current?.offsetHeight || 0;
        const sliderHeight = window.innerHeight;
        const scrollThreshold = sliderHeight - initialHeaderHeight;

        setIsScrolledPastSlider(currentScrollY > scrollThreshold);

        if (isScrollingDown && currentScrollY > initialHeaderHeight) {
          setIsFixedHeaderVisible(false);
        } else {
          setIsFixedHeaderVisible(true);
        }
      }

      // Reset states at the top of the page
      if (currentScrollY <= 0) {
        setIsMobileHeaderVisible(true);
        if (isHomePage) {
          setIsScrolledPastSlider(false);
          setIsFixedHeaderVisible(false); // Hide fixed header when initial is visible
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", measureHeader);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]); // Re-run if page changes

  return (
    <>
      {/* --- Mobile Header --- */}
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
            className="relative flex items-center justify-center h-[60px] w-[60px] cursor-pointer rounded-full border border-gray-300 bg-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 ease-in-out hover:bg-gray-100 active:scale-95"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <MobileNavMenu
        navItems={navItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        headerHeight={mobileHeaderHeight}
        isHeaderVisible={isMobileHeaderVisible}
      />
      {/* On non-home pages, add a placeholder to prevent content from being obscured by the fixed mobile header */}
      {!isHomePage && <div style={{ height: mobileHeaderHeight }} className="md:hidden" />}

      {/* --- Desktop Header --- */}
      <div className="hidden md:block">
        {/* Initial Transparent Header (Homepage Only) */}
        {isHomePage && (
          <header
            ref={initialHeaderRef}
            className={cn(
              "absolute top-0 left-0 right-0 w-full z-40 transition-opacity duration-300 ease-in-out",
              isScrolledPastSlider ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <div className="container mx-auto flex items-center justify-between px-8 py-6">
              <InitialHeaderContent navItems={navItems} />
            </div>
          </header>
        )}

        {/* Main Desktop Header (Fixed on Home, Sticky on others) */}
        <header
          className={cn(
            "w-full z-50 bg-white shadow-md", // Common styles
            isHomePage
              ? cn(
                  "fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out",
                  isScrolledPastSlider && isFixedHeaderVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0 pointer-events-none"
                )
              : "sticky top-0"
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
