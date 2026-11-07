"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if fine pointer (mouse) is detected
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive-cursor"))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    // Smooth trailing ring
    let rafId: number;
    const updateTrail = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      rafId = requestAnimationFrame(updateTrail);
    };
    rafId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [position.x, position.y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Outer soft pastel ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-[#A8D8F0]/70 bg-[#D9EEFF]/20 backdrop-blur-[1px] pointer-events-none"
        style={{
          width: isPointer ? 44 : 28,
          height: isPointer ? 44 : 28,
          transform: `translate3d(${trailingPos.x - (isPointer ? 22 : 14)}px, ${
            trailingPos.y - (isPointer ? 22 : 14)
          }px, 0)`,
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease",
        }}
      />
      {/* Inner sparkle dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#326789] pointer-events-none shadow-sm shadow-[#326789]/50"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
        }}
      />
    </div>
  );
}

