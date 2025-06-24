"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
  active?: boolean;
}

interface NavMenuProps {
  navItems: NavItem[];
}

export default function NavMenu({ navItems }: NavMenuProps) {
  return (
    <nav className="flex justify-center max-w-2xl">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 uppercase tracking-wide group">
        {navItems.map((item) => (
          <div key={item.href} className="relative flex justify-center">
            <Link
              href={item.href}
              className={cn(
                "relative px-4 py-2 font-light tracking-wide transition-all duration-300 text-black",
                item.active ? "font-bold" : "font-light",
                `hover:opacity-100  hover:font-medium`
              )}
            >
              <span className="relative z-10 uppercase">{item.label}</span>
              <div
                className={cn(
                  "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-300",
                  item.active ? "w-[50%]" : "w-0"
                )}
              ></div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
