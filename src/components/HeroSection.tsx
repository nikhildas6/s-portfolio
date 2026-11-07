"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowDown,
  Mail,
  Phone,
  TrendingUp,
  BarChart2,
  Compass,
} from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { soundManager } from "./SoundEffects";

export default function HeroSection() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleScrollTo = (id: string) => {
    soundManager.playChime("sparkle");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center z-10">
        {/* Left Column: Heading, Subheading, Description, Badges, CTAs, Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/90 shadow-sm mb-6"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#326789]">
              Available for High-Impact Roles & Projects
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#326789] fill-sky-200" />
          </motion.div>

          {/* Main Heading: "Hi, I'm Sneha!" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#243B53] tracking-tight font-display leading-[1.1] mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-[#326789]">
              Sneha!
              {/* Pastel highlight underline brush */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute left-0 bottom-1.5 h-3 bg-[#A8D8F0]/40 -z-10 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheading: "Turning Creative Ideas Into Digital Growth." */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#326789] tracking-tight mb-5"
          >
            Turning Creative Ideas Into Digital Growth.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-base sm:text-lg text-[#243B53]/85 leading-relaxed max-w-xl mb-8"
          >
            I&apos;m a Digital Marketing Executive passionate about{" "}
            <strong className="text-[#326789] font-semibold">performance marketing</strong>,{" "}
            <strong className="text-[#326789] font-semibold">SEO</strong>, creative storytelling,
            and helping brands grow through data-driven strategies.
          </motion.p>

          {/* Action Buttons: "Explore My Journey" & "Let's Connect" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollTo("journey")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#326789] hover:bg-[#254f6b] text-white font-semibold text-base shadow-lg shadow-[#326789]/25 hover:shadow-xl hover:shadow-[#326789]/35 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              <span>Explore My Journey</span>
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full glass-card hover:bg-white/95 text-[#243B53] font-semibold text-base border border-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <span className="text-lg group-hover:scale-125 transition-transform">💌</span>
            </button>
          </motion.div>

          {/* Animated Social Media Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 pt-2"
          >
            <span className="text-xs font-semibold text-[#326789]/70 uppercase tracking-wider mr-1">
              Connect:
            </span>
            <a
              href="mailto:snehas10072002@gmail.com"
              onClick={() => soundManager.playChime("pop")}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#326789] hover:text-[#254f6b] hover:bg-white transition-all transform hover:scale-110 shadow-sm"
              title="Send an email to Sneha"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime("pop")}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#326789] hover:text-[#254f6b] hover:bg-white transition-all transform hover:scale-110 shadow-sm"
              title="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="tel:+916238265468"
              onClick={() => soundManager.playChime("pop")}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#326789] hover:text-[#254f6b] hover:bg-white transition-all transform hover:scale-110 shadow-sm"
              title="Call Sneha"
            >
              <Phone className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Character Showcase Artwork with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-5 relative flex items-center justify-center perspective-[1000px]"
        >
          {/* Glowing Pastel Halo Background */}
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#A8D8F0]/40 via-[#D9EEFF]/60 to-[#EAE4FF]/50 blur-2xl animate-pulse-glow" />

          {/* Realistic Character Frame with 3D Perspective Tilt */}
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.15s ease-out",
            }}
            className="relative w-[300px] sm:w-[380px] h-[360px] sm:h-[440px] rounded-[38px] p-4 glass-card shadow-2xl border-2 border-white/90 flex flex-col justify-between overflow-hidden"
          >
            {/* Dreamy Sky Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EAF6FF] via-[#D9EEFF]/70 to-[#EAE4FF]/60 -z-10" />

            {/* Floating Soft Cloud Arcs */}
            <div className="absolute top-8 -right-6 w-36 h-20 rounded-full bg-white/60 blur-md pointer-events-none animate-float-slow" />
            <div className="absolute top-28 -left-8 w-44 h-24 rounded-full bg-white/70 blur-md pointer-events-none animate-float-delayed" />

            {/* Top Stage Indicator */}
            <div className="relative z-10 flex items-center justify-between w-full mb-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#326789] bg-white/85 px-3 py-1 rounded-full border border-sky-100 shadow-xs">
                ✦ Sneha S • Digital Marketer
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Sneha's Authentic Portrait with Soft Glass Frame */}
            <div className="relative w-full h-[240px] sm:h-[270px] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#EAF6FF] to-[#D9EEFF] shadow-inner border border-white">
              <img
                src="/images/sneha-real.jpg"
                alt="Sneha S — Digital Marketing Executive"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
            </div>

            {/* Cloud Pedestal Base where Sneha stands */}
            <div className="relative z-10 w-full py-2.5 px-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 shadow-md flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-xs font-bold text-[#243B53]">Palakkad, Kerala</span>
              </div>
              <span className="text-[11px] font-semibold text-[#326789] bg-sky-50 px-2.5 py-0.5 rounded-full">
                Scroll to Start Journey ↓
              </span>
            </div>

            {/* Floating Badge 1 - Top Left: Performance Marketing */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl glass-card border border-white/90 shadow-lg flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 text-white flex items-center justify-center shadow-sm">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-sky-700">Focus</p>
                <p className="text-xs font-bold text-[#243B53]">Performance ROI</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Bottom Right: B.Sc. Mathematics */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl glass-card border border-white/90 shadow-lg flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-400 to-indigo-500 text-white flex items-center justify-center shadow-sm">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-violet-700">Mindset</p>
                <p className="text-xs font-bold text-[#243B53]">B.Sc. Mathematics</p>
              </div>
            </motion.div>

            {/* Floating Star Accents */}
            <div className="absolute -top-3 right-8 text-amber-300 animate-twinkle">
              <Sparkles className="w-6 h-6 fill-amber-200" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Indicator at the Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => handleScrollTo("about")}
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-[#326789]/70 group-hover:text-[#326789] transition-colors">
          Scroll to explore journey
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-[#326789] group-hover:bg-white shadow-sm"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
