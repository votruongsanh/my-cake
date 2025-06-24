"use client";

import { Heart, Plus } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ButtonMain } from "../common/button-main";

interface ProductCardProps {
  image: StaticImageData;
  name: string;
  price: string;
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full aspect-[3/4] overflow-hidden group">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className="absolute bottom-0 left-0 right-0 py-4 flex items-center justify-center space-x-2
                        transform translate-y-full opacity-0 transition-all duration-300 ease-out
                        group-hover:translate-y-0 group-hover:opacity-100"
        >
          <div className="flex space-x-2 bg-white/90 rounded-full p-2">
            <ButtonMain
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white border-gray-300 text-gray-700 hover:text-black"
            >
              <Plus className="h-4 w-4" />
            </ButtonMain>
            <ButtonMain
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white border-gray-300 text-gray-700 hover:text-black"
            >
              <Heart className="h-4 w-4" />
            </ButtonMain>
          </div>
        </div>
      </div>

      <div className="relative py-8">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 z-10 opacity-100 hover:scale-110 transition-transform duration-300"></div>

        <h3 className="font-serif text-xl text-gray-800 mt-2">{name}</h3>
        <p className="text-gray-600 text-lg">{price}</p>
      </div>
    </div>
  );
}
