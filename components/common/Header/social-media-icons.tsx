"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SocialMediaIcons() {
  const iconColorClass = "text-black";

  const socialItems = [
    {
      icon: <Facebook className={cn("h-5 w-5", iconColorClass)} />,
      label: "Facebook",
      href: "https://www.facebook.com/",
    },
    {
      icon: <Instagram className={cn("h-5 w-5", iconColorClass)} />,
      label: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      icon: <Twitter className={cn("h-5 w-5", iconColorClass)} />,
      label: "Twitter",
      href: "https://twitter.com/",
    },
    {
      icon: <Youtube className={cn("h-5 w-5", iconColorClass)} />,
      label: "Youtube",
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="flex items-center space-x-6 flex-shrink-0">
      <div className="flex space-x-4 group">
        <nav className="hidden lg:flex items-center space-x-8">
          {socialItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              aria-label={item.label}
              className="hover:opacity-100 transition-opacity group-hover:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
