"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FloatingClouds() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft pastel background ambient gradient blobs */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#D9EEFF]/60 via-[#EAE4FF]/40 to-transparent blur-3xl" />
      <div className="absolute top-[30%] -right-[15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-bl from-[#A8D8F0]/40 via-[#D9EEFF]/50 to-transparent blur-3xl" />
      <div className="absolute top-[65%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#EAE4FF]/50 via-[#D9EEFF]/40 to-transparent blur-3xl" />
      <div className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-[#A8D8F0]/50 via-[#EAF6FF]/60 to-transparent blur-3xl" />

      {/* Floating Cloud 1 - Top Left */}
      <motion.div
        className="absolute top-[8%] left-[4%] opacity-60 drop-shadow-sm"
        animate={{
          x: [0, 25, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CloudShape width={140} height={70} color="#FFFFFF" opacity={0.85} />
      </motion.div>

      {/* Floating Cloud 2 - Top Right */}
      <motion.div
        className="absolute top-[18%] right-[8%] opacity-70 drop-shadow-sm"
        animate={{
          x: [0, -30, 0],
          y: [0, 14, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <CloudShape width={210} height={95} color="#FFFFFF" opacity={0.9} />
      </motion.div>

      {/* Floating Cloud 3 - Mid Left */}
      <motion.div
        className="absolute top-[45%] left-[2%] opacity-50 drop-shadow-sm"
        animate={{
          x: [0, 20, 0],
          y: [0, 12, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <CloudShape width={180} height={80} color="#FFFFFF" opacity={0.75} />
      </motion.div>

      {/* Floating Cloud 4 - Mid Right */}
      <motion.div
        className="absolute top-[68%] right-[4%] opacity-65 drop-shadow-sm"
        animate={{
          x: [0, -25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <CloudShape width={240} height={105} color="#FFFFFF" opacity={0.88} />
      </motion.div>

      {/* Floating Cloud 5 - Bottom Left */}
      <motion.div
        className="absolute top-[88%] left-[6%] opacity-60 drop-shadow-sm"
        animate={{
          x: [0, 22, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CloudShape width={160} height={75} color="#FFFFFF" opacity={0.85} />
      </motion.div>

      {/* Tiny Sparkling Stars scattered across */}
      {[
        { top: "12%", left: "22%", size: 14, delay: 0 },
        { top: "28%", left: "85%", size: 16, delay: 1.5 },
        { top: "38%", left: "15%", size: 12, delay: 0.8 },
        { top: "52%", left: "92%", size: 15, delay: 2.2 },
        { top: "62%", left: "18%", size: 14, delay: 1.1 },
        { top: "78%", left: "80%", size: 16, delay: 0.4 },
        { top: "90%", left: "35%", size: 13, delay: 1.8 },
      ].map((star, idx) => (
        <motion.div
          key={idx}
          className="absolute text-[#A8D8F0]"
          style={{ top: star.top, left: star.left }}
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.3, 0.9, 0.3],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="#A8D8F0">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function CloudShape({
  width = 160,
  height = 80,
  color = "#FFFFFF",
  opacity = 0.8,
}: {
  width: number;
  height: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M35 70C21.1929 70 10 58.8071 10 45C10 32.1287 19.7188 21.5283 32.2289 20.1555C36.6347 8.52838 48.0642 0 61.5 0C77.0605 0 89.9216 11.2335 92.5448 25.8679C95.5397 24.6622 98.8147 24 102.25 24C116.609 24 128.25 35.6406 128.25 50C128.25 50.8407 128.21 51.6719 128.131 52.4916C138.647 53.6495 147 62.4849 147 70H35Z"
        fill={color}
      />
    </svg>
  );
}

