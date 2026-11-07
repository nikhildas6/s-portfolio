"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  CheckCircle,
  Building,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
            <span>Academic &amp; Professional Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-4"
          >
            Certifications &amp; Education
          </motion.h2>

          <p className="text-base sm:text-lg text-[#243B53]/80">
            Formally trained in artificial intelligence applications in digital marketing, grounded in pure mathematical sciences.
          </p>
        </div>

        {/* 2 Floating Certificate / Degree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Professional Certification */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => soundManager.playChime("pop")}
            className="p-8 sm:p-10 rounded-[32px] glass-card border border-white/95 shadow-xl relative overflow-hidden group"
          >
            {/* Top Certificate Ribbon */}
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-sky-400 to-[#326789] text-white flex items-center justify-center shadow-lg shadow-sky-950/15 group-hover:rotate-6 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#326789] text-xs font-bold border border-sky-200">
                <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                Verified Credential
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#326789] block mb-1">
                Executive Certification
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display mb-3">
                Program in Digital Marketing (AI)
              </h3>
              <p className="text-base font-semibold text-[#326789] flex items-center gap-2">
                <Building className="w-4 h-4 text-sky-600" />
                <span>Illinois Tech | NSDC | Entri</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#EAF6FF]/70 border border-sky-100/80 mb-6">
              <p className="text-xs sm:text-sm text-[#243B53]/85 leading-relaxed">
                Comprehensive training covering AI-powered marketing automation, programmatic campaign optimization,
                predictive audience modeling, search engine optimization algorithms, and multi-channel attribution.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-sky-100">
              {["AI in Marketing", "Meta & Google Ads", "Data Analytics", "Campaign Architecture"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-xl bg-white text-[11px] font-semibold text-[#243B53] border border-sky-100 shadow-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Degree Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => soundManager.playChime("pop")}
            className="p-8 sm:p-10 rounded-[32px] glass-card-lavender border border-white/95 shadow-xl relative overflow-hidden group"
          >
            {/* Top Degree Ribbon */}
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-violet-500 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-violet-950/15 group-hover:rotate-6 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-violet-700 text-xs font-bold border border-violet-200">
                <Calendar className="w-3.5 h-3.5" />
                2020 – 2023
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-700 block mb-1">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display mb-3">
                B.Sc. Mathematics
              </h3>
              <p className="text-base font-semibold text-[#326789] flex items-center gap-2">
                <Building className="w-4 h-4 text-violet-600" />
                <span>University of Calicut</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 border border-violet-100/80 mb-6">
              <p className="text-xs sm:text-sm text-[#243B53]/85 leading-relaxed">
                Rigorous grounding in abstract mathematics, statistics, numerical analysis, probability theory,
                and quantitative logic — creating an innate aptitude for analyzing complex marketing datasets.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-100">
              {["Statistical Reasoning", "Quantitative Analysis", "Logic & Modeling", "Problem Solving"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-xl bg-white text-[11px] font-semibold text-[#243B53] border border-violet-100 shadow-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

