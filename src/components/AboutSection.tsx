"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calculator,
  TrendingUp,
  Search,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

const highlights = [
  {
    icon: Briefcase,
    title: "Digital Marketing Executive",
    tagline: "End-to-End Campaign Strategy",
    description:
      "Crafting omnichannel digital campaigns that connect with healthcare audiences, scale brand recall, and fuel high-retention customer journeys.",
    badge: "Active Practitioner",
    color: "from-sky-400 to-[#326789]",
    bgTint: "bg-white/80",
    borderTint: "border-sky-100",
  },
  {
    icon: Calculator,
    title: "B.Sc. Mathematics",
    tagline: "Calicut University (2020–2023)",
    description:
      "Bringing mathematical reasoning, statistical analysis, and algorithmic clarity to campaign budget distribution and ad performance modeling.",
    badge: "Analytical Core",
    color: "from-indigo-400 to-violet-600",
    bgTint: "bg-[#EAE4FF]/60",
    borderTint: "border-violet-100",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    tagline: "ROI & ROAS Optimization",
    description:
      "Precision execution across Meta Ads, Google Ads, and YouTube. Continuously tracking CTR, reducing CPC, and maximizing acquisition efficiency.",
    badge: "Data-Driven",
    color: "from-blue-400 to-sky-600",
    bgTint: "bg-[#D9EEFF]/70",
    borderTint: "border-sky-200",
  },
  {
    icon: Search,
    title: "SEO & Lead Generation",
    tagline: "Organic Traffic & High-Intent Funnels",
    description:
      "Mastering on-page & off-page SEO, keyword architecture, content structuring, and lead nurturing pipelines that convert visitors into loyal clients.",
    badge: "Sustainable Growth",
    color: "from-teal-400 to-emerald-600",
    bgTint: "bg-white/80",
    borderTint: "border-teal-100",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <span>My Core Foundation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-6"
          >
            A Little About Me
          </motion.h2>

          {/* Core Philosophy Quote with Sneha's Real Photo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-6 sm:p-8 rounded-3xl glass-card border border-white/95 shadow-md"
          >
            <div className="flex flex-col sm:flex-row items-center gap-5 text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 bg-sky-100">
                <img
                  src="/images/sneha-real.jpg"
                  alt="Sneha S"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-base sm:text-lg text-[#243B53] font-medium leading-relaxed italic">
                  &ldquo;I combine creativity with analytical thinking to build marketing strategies that attract audiences, generate quality leads, and drive measurable business growth.&rdquo;
                </p>
                <p className="text-xs font-bold text-[#326789] uppercase tracking-wider mt-2">
                  — Sneha S • Digital Marketing Executive
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Highlight Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseEnter={() => soundManager.playChime("pop")}
                className={`p-8 rounded-3xl ${item.bgTint} backdrop-blur-md border ${item.borderTint} shadow-lg shadow-sky-950/5 relative overflow-hidden group`}
              >
                {/* Background Subtle Gradient Blobs */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md shadow-sky-900/15 group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#326789] shadow-sm border border-sky-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#243B53] font-display mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#326789] mb-3.5">
                  {item.tagline}
                </p>
                <p className="text-sm sm:text-base text-[#243B53]/85 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Creative + Analytical Synergy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl glass-card border border-white/95 shadow-md flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-md text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4FF] text-[#4f46e5] text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>The Synergy</span>
            </div>
            <h4 className="text-2xl font-bold text-[#243B53] font-display mb-2">
              Why Mathematics Elevates Digital Marketing
            </h4>
            <p className="text-sm text-[#243B53]/80 leading-relaxed">
              Marketing is not guessing — it&apos;s hypothesis testing. My background in mathematics
              equips me to look past vanity metrics, isolate high-performing variables, and engineer
              consistently profitable ad pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 shadow-sm text-center">
              <span className="text-2xl font-extrabold text-[#326789] block font-display">100%</span>
              <span className="text-xs font-medium text-[#243B53]/75">Data-Backed Logic</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#EAE4FF]/80 border border-violet-100 shadow-sm text-center">
              <span className="text-2xl font-extrabold text-violet-700 block font-display">Fresh</span>
              <span className="text-xs font-medium text-[#243B53]/75">Creative Storytelling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

