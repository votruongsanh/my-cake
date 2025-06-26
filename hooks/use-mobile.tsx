"use client";

import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // Tailwind's 'md' breakpoint is 768px

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
