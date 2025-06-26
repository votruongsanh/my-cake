"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

interface MobileNavMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  headerHeight: number;
  isHeaderVisible: boolean;
}

export default function MobileNavMenu({
  navItems,
  isOpen,
  onClose,
  headerHeight,
  isHeaderVisible,
}: MobileNavMenuProps) {
  if (headerHeight === 0) {
    return null; // Don't render until header height is calculated
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 md:hidden", // z-index is below the header's z-50
        "transition-transform duration-300 ease-in-out",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full",
        !isOpen && "pointer-events-none" // Allow clicks to pass through when closed
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        style={{ top: `${headerHeight}px` }}
        className={cn(
          "absolute left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
      >
        <nav className="flex flex-col items-center p-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "text-2xl font-light tracking-wider uppercase text-gray-700 transition-colors duration-300",
                item.active ? "text-black font-semibold" : "hover:text-black"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

}
