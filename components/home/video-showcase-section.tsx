"use client";

import type React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import bgVideo from "@/public/img/home/video-section/bgVideo.png";

export default function VideoShowcaseSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Placeholder video URL (replace with your actual video)
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; // Rick Astley - Never Gonna Give You Up

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the section
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Reset mouse position when leaving to avoid jump on re-enter
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <Image
        src={bgVideo}
        alt="Elegant Chocolate Showcase"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isHovered ? "opacity-20" : "opacity-0"
        }`}
      ></div>

      {/* Play Icon and Circular Text - wrapped in DialogTrigger */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button
            className={cn(
              `absolute z-20 text-white transition-all duration-150 ease-out
              flex items-center justify-center rounded-full cursor-none`,
              isHovered
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
            style={{
              // Position the button centered on the mouse cursor
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)", // Center the button itself
              width: "160px", // Larger size to accommodate text
              height: "160px",
            }}
            aria-label="Play video"
          >
            <PlayCircle className="h-16 w-16 md:h-20 md:w-20 relative z-30" />

            {/* Circular Text using SVG */}
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{
                animation: "spin 15s linear infinite", // Apply spin animation
                width: "100%",
                height: "100%",
              }}
            >
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 80, 80 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text
                  fill="#FFFFFF"
                  className="uppercase font-sans tracking-widest text-[10px]"
                >
                  <textPath
                    href="#circlePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    YOUR LOVE THESE ROMANCE PRALINES EXPRESS
                  </textPath>
                </text>
              </svg>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-transparent">
          {/* Video Embed */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {" "}
            {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
