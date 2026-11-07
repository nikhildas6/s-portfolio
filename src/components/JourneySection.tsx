"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  BarChart,
  Users2,
  Target,
  FileText,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

const responsibilities = [
  {
    icon: Target,
    title: "Meta Paid Advertising",
    description: "Managed Facebook and Instagram advertising campaigns with high-intent audience segmentation.",
    badge: "Paid Social",
  },
  {
    icon: Sparkles,
    title: "Healthcare Ad Creatives",
    description: "Created targeted ad creatives and empathetic visual assets tailored for healthcare and wellness audiences.",
    badge: "Creative Design",
  },
  {
    icon: BarChart,
    title: "SEO & Keyword Optimization",
    description: "Implemented on-page SEO and structured keyword strategies to rank high-value treatment services organically.",
    badge: "Organic Growth",
  },
  {
    icon: BarChart,
    title: "Metrics & Conversion Tracking",
    description: "Monitored CTR, CPC, and conversion rates to constantly optimize campaign budget and maximize patient inquiries.",
    badge: "Data Analytics",
  },
  {
    icon: FileText,
    title: "Content Calendar Management",
    description: "Managed social media content calendars, ensuring consistent healthcare thought-leadership and seasonal wellness campaigns.",
    badge: "Content Strategy",
  },
  {
    icon: Users2,
    title: "Cross-Functional Synergy",
    description: "Collaborated seamlessly with clinical and administrative teams to accurately translate medical services into patient-friendly messaging.",
    badge: "Team Collaboration",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-sky-500" />
            <span>Professional Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-4"
          >
            My Journey
          </motion.h2>

          <p className="text-base sm:text-lg text-[#243B53]/80">
            Following my path through dynamic digital marketing challenges and real-world brand impact.
          </p>
        </div>

        {/* Timeline Showcase Card */}
        <div className="relative">
          {/* Main Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-[36px] glass-card border border-white/95 shadow-xl relative overflow-hidden"
          >
            {/* Top Header with Role & Company */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-sky-100">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#326789] to-[#82B9D9] text-white flex items-center justify-center shadow-lg shadow-sky-950/10 flex-shrink-0">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Present Role</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display">
                    Digital Marketing Executive
                  </h3>
                  <p className="text-lg font-semibold text-[#326789] mt-0.5">
                    Badrinath Ayurveda Hospital
                  </p>
                </div>
              </div>

              {/* Location & Timeframe Badges */}
              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#243B53] text-xs font-semibold shadow-sm border border-sky-100">
                  <Calendar className="w-3.5 h-3.5 text-[#326789]" />
                  January 2026 – Present
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#326789] text-xs font-semibold border border-sky-200">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  Aluva, Ernakulam, Kerala
                </span>
              </div>
            </div>

            {/* Healthcare Domain Specialization Callout */}
            <div className="my-8 p-5 rounded-2xl bg-[#D9EEFF]/50 border border-sky-200/80 flex items-center gap-4">
              <span className="text-2xl">🌿</span>
              <p className="text-sm text-[#243B53] font-medium leading-relaxed">
                <strong className="text-[#326789]">Domain Focus: Healthcare & Ayurveda Marketing</strong> —
                Translating traditional holistic wellness methodologies into modern, empathetic,
                high-converting digital campaigns for regional and international patients.
              </p>
            </div>

            {/* Responsibilities Grid */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#326789] mb-6 flex items-center gap-2">
                <span>Core Responsibilities & Deliverables</span>
                <span className="h-px bg-sky-200 flex-1" />
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {responsibilities.map((resp, i) => {
                  const Icon = resp.icon;
                  return (
                    <motion.div
                      key={resp.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -4 }}
                      onMouseEnter={() => soundManager.playChime("pop")}
                      className="p-5 rounded-2xl bg-white/85 hover:bg-white border border-sky-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#326789] flex items-center justify-center group-hover:bg-[#326789] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#326789] bg-sky-100/60 px-2.5 py-0.5 rounded-full">
                          {resp.badge}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-[#243B53] font-display mb-1.5">
                        {resp.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#243B53]/80 leading-relaxed">
                        {resp.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

