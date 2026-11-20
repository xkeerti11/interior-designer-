"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Raw unfinished brick room in Prayagraj",
  afterAlt = "WALL & DECO turnkey finished interior with fluted panels and warm lighting",
  aspectRatio = "aspect-[16/10] sm:aspect-[16/9]",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden select-none cursor-ew-resize border border-border-subtle shadow-md group @container touch-none`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      role="slider"
      aria-label="Before and after transformation slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* "After" Image (Background - Finished Interior) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
          quality={75}
          className="object-cover"
        />
        <div className="absolute bottom-5 right-5 z-10 pointer-events-none">
          <Badge variant="surface" className="backdrop-blur-md bg-surface/90 text-ink shadow-sm font-semibold">
            Finished Living Space
          </Badge>
        </div>
      </div>

      {/* "Before" Image (Foreground - Clipped Raw Shell) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-[100cqw] h-full">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
            quality={75}
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-5 left-5 z-10 pointer-events-none">
          <Badge variant="surface" className="backdrop-blur-md bg-ink/75 text-white border-white/20 shadow-sm font-semibold">
            Raw Concrete / Brick Shell
          </Badge>
        </div>
      </div>

      {/* Divider Bar & Grab Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-ink shadow-xl border border-black/10 flex items-center justify-center pointer-events-auto transition-transform group-hover:scale-110 active:scale-95">
          <MoveHorizontal className="w-5 h-5 text-accent" />
        </div>
      </div>

      {/* Floating Interactive Instruction Hint */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <span className="text-[11px] tracking-wide font-medium px-3 py-1 rounded-full bg-ink/65 text-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity">
          Drag slider or use arrow keys
        </span>
      </div>
    </div>
  );
};
