"use client";

import { ChefHat } from "lucide-react";
import CartIcon from "./cart-icon";
import NavMenu from "./nav-menu";
import SocialMediaIcons from "./social-media-icons";

interface InitialHeaderContentProps {
  navItems: { href: string; label: string; active?: boolean }[];
}

export default function InitialHeaderContent({
  navItems,
}: InitialHeaderContentProps) {
  return (
    <>
      <div className="flex-shrink-0">
        <ChefHat className="w-8 h-8 lg:w-8 lg:h-8 text-black drop-shadow-lg" />
      </div>
      <div className="flex-grow flex items-center justify-center">
        <NavMenu navItems={navItems} />
        <CartIcon itemCount={0} />
      </div>
      <SocialMediaIcons />
    </>
  );
}
