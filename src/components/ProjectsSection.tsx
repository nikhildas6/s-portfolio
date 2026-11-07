"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Monitor,
  Smartphone,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

export default function ProjectsSection() {
  const projectUrl = "https://zara.neomaruby.in";
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
            <span>Featured Case Study</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-4"
          >
            Little Things I&apos;ve Created
          </motion.h2>

          <p className="text-base sm:text-lg text-[#243B53]/80">
            Real projects blending web design, search engine optimization, and measurable user analytics.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-[36px] glass-card border border-white/95 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Column: Interactive Browser Preview Mockup */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
              {/* Browser Header Bar with Device Switcher */}
              <div className="px-4 py-3 bg-[#EAF6FF] border-b border-sky-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Mock URL bar */}
                <div className="flex-1 max-w-xs sm:max-w-sm mx-2 sm:mx-4 px-3 py-1 rounded-full bg-white text-xs text-[#326789] font-mono border border-sky-200/80 flex items-center justify-center gap-1.5 truncate shadow-inner">
                  <Globe className="w-3 h-3 text-sky-500 flex-shrink-0" />
                  <span className="truncate">https://zara.neomaruby.in</span>
                </div>

                {/* Device Mode Switcher */}
                <div className="flex items-center gap-1 bg-white/80 p-0.5 rounded-lg border border-sky-100 shadow-xs">
                  <button
                    onClick={() => {
                      setDeviceMode("desktop");
                      soundManager.playChime("pop");
                    }}
                    className={`p-1.5 rounded-md text-xs font-semibold transition-all ${
                      deviceMode === "desktop"
                        ? "bg-[#326789] text-white shadow-xs"
                        : "text-slate-500 hover:text-[#326789]"
                    }`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      setDeviceMode("mobile");
                      soundManager.playChime("pop");
                    }}
                    className={`p-1.5 rounded-md text-xs font-semibold transition-all ${
                      deviceMode === "mobile"
                        ? "bg-[#326789] text-white shadow-xs"
                        : "text-slate-500 hover:text-[#326789]"
                    }`}
                    title="Mobile Viewport Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Website Preview Canvas (Responsive to Desktop / Mobile Switcher) */}
              <div
                className={`relative transition-all duration-500 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden group ${
                  deviceMode === "mobile"
                    ? "max-w-[280px] mx-auto my-6 rounded-[28px] border-4 border-slate-700 shadow-2xl aspect-[9/16]"
                    : "aspect-[16/10]"
                }`}
              >
                {/* Background ambient lighting */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Simulated Web Nav */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-display font-bold text-lg text-sky-200 tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                    ZARA PORTFOLIO
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-xs text-white/70">
                    <span>Home</span>
                    <span>Portfolio</span>
                    <span>About</span>
                    <span className="px-2.5 py-1 rounded-full bg-sky-500/30 text-sky-200 border border-sky-400/30">
                      Contact
                    </span>
                  </div>
                </div>

                {/* Simulated Web Hero Content */}
                <div className="relative z-10 my-auto py-4">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-sky-300 mb-2">
                    WordPress &amp; SEO Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display mb-3 text-white">
                    Modern Creative Portfolio
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-md line-clamp-2">
                    Engineered with WordPress, tailored metadata, content hierarchy, and Google Analytics tracking.
                  </p>
                </div>

                {/* Simulated Bottom Stats Bar */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Live Website
                    </span>
                    <span>• Fully Indexed</span>
                  </div>
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playChime("sparkle")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-[#243B53] font-bold text-xs hover:bg-sky-50 transition-colors shadow-md"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Details & Deliverables */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-3 self-start">
              <span>Client Showcase</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display mb-2">
              Website Creation &amp; SEO
            </h3>

            <p className="text-sm font-semibold text-[#326789] mb-4 flex items-center gap-1">
              <Globe className="w-4 h-4 text-sky-500" />
              <span>zara.neomaruby.in</span>
            </p>

            <p className="text-sm sm:text-base text-[#243B53]/85 leading-relaxed mb-6">
              A complete end-to-end web deployment and organic optimization initiative. From theme architecture
              and content structuring to search engine indexation and engagement tracking.
            </p>

            {/* Checklist of Deliverables */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                "Developed a clean, modern WordPress portfolio website",
                "Implemented rigorous on-page SEO & metadata tags",
                "Optimized keywords and content structure for search visibility",
                "Integrated Google Analytics and social media channels",
                "Monitored live website traffic, bounce rate, and user engagement",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#243B53]/90">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Visit Website CTA Button */}
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playChime("success")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#326789] hover:bg-[#254f6b] text-white font-bold text-sm shadow-lg shadow-[#326789]/25 hover:shadow-xl hover:shadow-[#326789]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer self-start"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

