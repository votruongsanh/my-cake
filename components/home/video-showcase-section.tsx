"use client";

import type React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import bgVideo from "@/public/img/home/video-section/bgVideo.png";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function VideoShowcaseSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const videoUrl =
    "https://player.vimeo.com/video/367372355?autoplay=1&muted=1&loop=1&byline=0&title=0&portrait=0";

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = sectionRef.current!.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
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

      {/* Play Icon and Circular Text */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button
            className={cn(
              `absolute z-20 text-white transition-opacity duration-150 ease-out
              flex items-center justify-center rounded-full cursor-none`,
              isHovered
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              transform: "translate(-50%, -50%)",
              width: "160px",
              height: "160px",
            }}
            aria-label="Play video"
          >
            <PlayCircle className="h-16 w-16 md:h-20 md:w-20 relative z-30" />
            {/* Circular Text */}
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{
                animation: "spin 15s linear infinite",
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
          <DialogTitle className="sr-only">Video</DialogTitle>
          {/* Video Embed */}
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
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
