"use client";

import React from "react";

export interface RiggedCharacterProps {
  walkCycle: number; // 0 to 1 continuous walk phase
  isWalking: boolean;
  pose: "idle" | "walk" | "point" | "inspect" | "celebrate" | "wave";
  direction: 1 | -1; // 1 facing right, -1 facing left
  className?: string;
  speechText?: string;
}

export default function RiggedCharacter({
  walkCycle,
  isWalking,
  pose,
  direction,
  className = "",
  speechText,
}: RiggedCharacterProps) {
  // Trigonometric walking stride bounce & tilt
  const walkPhase = walkCycle * Math.PI * 2;
  const bodyBounceY = isWalking ? -Math.abs(Math.sin(walkPhase)) * 6 : 0;
  const walkTilt = isWalking ? Math.sin(walkPhase) * 3 : 0;

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        transform: `scaleX(${direction})`,
        transformOrigin: "center center",
      }}
    >
      {/* Speech Bubble (counter-transformed so text is always right-side up) */}
      {speechText && (
        <div
          className="absolute -top-14 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-sky-100 text-xs font-bold text-[#243B53] whitespace-nowrap z-40 select-none"
          style={{
            transform: `translateX(-50%) scaleX(${direction})`,
          }}
        >
          <span className="text-[#326789] mr-1">✦</span>
          {speechText}
          {/* Bubble tail */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 bg-white border-r border-b border-sky-100 rotate-45" />
        </div>
      )}

      {/* Dynamic Ground Shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#326789]/25 rounded-full blur-[3.5px] transition-all"
        style={{
          transform: `translateX(-50%) scale(${isWalking ? 0.88 : 1})`,
          opacity: isWalking ? 0.22 : 0.3,
        }}
      />

      {/* Sneha's Clean Character Container with Walking Physics (Tilt & Bounce) */}
      <div
        className="relative flex flex-col items-center justify-end w-36 sm:w-44 md:w-48 h-56 sm:h-64 md:h-72 select-none"
        style={{
          transform: `translate3d(0, ${bodyBounceY}px, 0) rotate(${walkTilt}deg)`,
          transition: isWalking ? "none" : "transform 0.3s ease-out",
        }}
      >
        {/* User's Exact Character Illustration */}
        <div className="relative w-full h-full filter drop-shadow-[0_10px_20px_rgba(50,103,137,0.22)]">
          <img
            src="/images/sneha-official-cropped.png"
            alt="Sneha S — Official Digital Marketing Character"
            className="w-full h-full object-contain pointer-events-none"
          />

          {/* Glasses Sparkle Reflection Accent */}
          <div className="absolute top-[22%] right-[32%] w-2 h-2 rounded-full bg-white/75 blur-[0.8px] animate-twinkle pointer-events-none" />

          {/* Milestone Reaction Gestures */}
          {pose === "wave" ? (
            <div className="absolute top-10 -right-2 z-30 animate-hair-sway">
              <span className="text-2xl select-none filter drop-shadow-md">👋</span>
            </div>
          ) : pose === "point" ? (
            <div className="absolute top-14 -right-3 z-30 animate-bounce">
              <span className="text-2xl select-none filter drop-shadow-md">👉</span>
            </div>
          ) : pose === "inspect" ? (
            <div className="absolute top-14 -right-3 z-30 animate-spin-slow">
              <span className="text-2xl select-none filter drop-shadow-md">🔍</span>
            </div>
          ) : pose === "celebrate" ? (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 animate-gentle-bounce">
              <span className="text-2xl select-none filter drop-shadow-md">🎓</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
