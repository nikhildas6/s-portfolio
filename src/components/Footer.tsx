"use client";

import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { soundManager } from "./SoundEffects";

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playChime("sparkle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-sky-100 bg-gradient-to-b from-[#EAF6FF] to-[#D9EEFF] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Branding */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-bold text-[#243B53] font-display">
            <span>Sneha S</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-xs font-semibold text-[#326789] uppercase tracking-wider">
              Digital Marketing Executive
            </span>
          </div>
          <p className="text-xs text-[#243B53]/70 mt-1 flex items-center justify-center md:justify-start gap-1">
            <span>Pastel Blue Dream World</span>
            <span>•</span>
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-400" />
            <span>&amp; data-driven strategy</span>
          </p>
        </div>

        {/* Right Nav & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-medium text-[#243B53]/80">
            <a href="#about" className="hover:text-[#326789] transition-colors">About</a>
            <a href="#journey" className="hover:text-[#326789] transition-colors">Journey</a>
            <a href="#skills" className="hover:text-[#326789] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#326789] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#326789] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#326789] hover:bg-white hover:scale-105 transition-all shadow-sm"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

