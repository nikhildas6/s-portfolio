"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 12;
        return Math.min(prev + step, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#EAF6FF] via-[#D9EEFF] to-[#EAE4FF]"
        >
          {/* Decorative floating cloud background */}
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Sneha Avatar Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1.5 bg-gradient-to-tr from-[#A8D8F0] via-white to-[#EAE4FF] shadow-xl shadow-sky-200/50 mb-6"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-sky-100">
                <Image
                  src="/images/sneha-official-cropped.png"
                  alt="Sneha S — Official Animated Digital Marketing Character"
                  fill
                  priority
                  className="object-contain object-center hover:scale-105 transition-transform duration-500 p-1"
                />
              </div>

              {/* Floating Sparkle Badge */}
              <motion.div
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1 -right-1 bg-white text-[#326789] p-2 rounded-full shadow-md border border-[#A8D8F0]"
              >
                <Sparkles className="w-4 h-4 text-sky-500 fill-sky-200" />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-[#243B53] tracking-tight font-display mb-1"
            >
              Sneha S
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-widest text-[#326789] font-semibold mb-6 flex items-center gap-1.5"
            >
              <span>Digital Marketing Executive</span>
            </motion.p>

            {/* Progress bar container */}
            <div className="w-56 h-2.5 bg-white/80 rounded-full overflow-hidden p-0.5 border border-sky-100 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#A8D8F0] via-[#326789] to-[#A8D8F0] rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-xs text-[#326789]/75 font-medium">
              Entering Pastel Blue Dream World... {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

