"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Image1 from "@/public/img/home/gallery-section/image1.png";
import Image2 from "@/public/img/home/gallery-section/image2.png";
import Image3 from "@/public/img/home/gallery-section/image3.png";
import Image4 from "@/public/img/home/gallery-section/image4.png";
import Image5 from "@/public/img/home/gallery-section/image5.png";
import Image6 from "@/public/img/home/gallery-section/image6.png";
import Image7 from "@/public/img/home/gallery-section/image7.png";
import imageInstagram from "@/public/img/home/gallery-section/imageInstagram.png";

export default function GallerySection() {
  // Placeholder images for each section of the collage
  // In a real application, these would be distinct, optimized images.
  const galleryItems = [
    {
      id: 1,
      type: "instagram-promo",
      image: imageInstagram,
      alt: "Instagram Promotion",
      //   instagramText: "INSTAGRAM",
      followUsText: "Follow Us",
      socialIcons: [
        {
          icon: <Instagram className="h-5 w-5 text-gray-800" />,
          href: "https://www.instagram.com/",
        },
        {
          icon: <Facebook className="h-5 w-5 text-gray-800" />,
          href: "https://www.facebook.com/",
        },
        {
          icon: <Twitter className="h-5 w-5 text-gray-800" />,
          href: "https://twitter.com/",
        },
      ],
    },
    {
      id: 2,
      type: "image",
      image: Image1,
      alt: "Box of Chocolates",
    },
    {
      id: 3,
      type: "image",
      image: Image2,
      alt: "Dessert on Gold Plate",
    },
    {
      id: 4,
      type: "image",
      image: Image3,
      alt: "Various Chocolates",
    },
    {
      id: 5,
      type: "image",
      image: Image4,
      alt: "Bakery Storefront",
    },
    {
      id: 6,
      type: "image",
      image: Image5,
      alt: "Chocolate Book",
    },
    {
      id: 7,
      type: "image",
      image: Image6,
      alt: "White Chocolate Stack",
    },
    {
      id: 8,
      type: "image",
      image: Image7,
      alt: "Chocolate Bars",
    },
  ];

  return (
    <section className="bg-[#FDF8F0]">
      <Link href="/">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden aspect-square"
            >
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              {/* {item.type === "instagram-promo" && (
              <div className="flex flex-col items-center justify-center p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/50">
                <h3 className="text-xl uppercase tracking-wide mb-2">
                  {item.followUsText}
                </h3>
                <div className="flex space-x-4">
                  {item.socialIcons?.map((social, idx) => (
                    <Link
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.href}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            )} */}
            </div>
          ))}
        </div>
      </Link>
    </section>
  );
}
