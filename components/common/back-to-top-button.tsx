"use client";

import { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        onClick={scrollToTop}
        className={cn(
          "flex flex-col items-center gap-2 transition-opacity duration-300 cursor-pointer",
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <MoveUp strokeWidth={1} size="42" />
        <p className="uppercase">Top</p>
      </div>
    </div>
  );
}
