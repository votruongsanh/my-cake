"use client";

import { cn } from "@/lib/utils";
import { ShoppingBasket } from "lucide-react";

interface CartIconProps {
  itemCount: number;
}

export default function CartIcon({ itemCount }: CartIconProps) {
  return (
    <div className="relative ml-6 flex-shrink-0">
      <ShoppingBasket className={cn("h-6 w-6")} />
      <span
        className={cn(
          "absolute -top-2 -right-2 text-xs rounded-full h-4 w-4 flex items-center justify-center",
          "bg-black",
          "text-white"
        )}
      >
        {itemCount}
      </span>
    </div>
  );
}
