"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Search,
  Filter,
  Palette,
  Sparkles,
  Check,
  Zap,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  badge: string;
  accentColor: string;
  skills: { name: string; tag: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "performance",
    title: "Performance Marketing",
    icon: TrendingUp,
    tagline: "Paid Acquisition & ROI Maximization",
    badge: "Growth Engine",
    accentColor: "from-sky-400 to-[#326789]",
    skills: [
      { name: "Meta Ads", tag: "Facebook & Instagram" },
      { name: "Google Ads", tag: "Search & Display" },
      { name: "YouTube Ads", tag: "Video Campaigns" },
      { name: "Campaign Budgeting", tag: "Allocation & Scaling" },
      { name: "ROAS Optimization", tag: "High Returns" },
    ],
  },
  {
    id: "seo",
    title: "SEO & Organic Growth",
    icon: Search,
    tagline: "Sustainable Search Visibility",
    badge: "Organic Search",
    accentColor: "from-teal-400 to-emerald-600",
    skills: [
      { name: "Keyword Research", tag: "Intent Mapping" },
      { name: "On-Page SEO", tag: "Metadata & Content" },
      { name: "Off-Page SEO", tag: "Authority Building" },
      { name: "Local SEO", tag: "Google Business Profile" },
      { name: "Backlink Strategies", tag: "Outreach & Quality" },
    ],
  },
  {
    id: "leadgen",
    title: "Lead Generation",
    icon: Filter,
    tagline: "Converting Visitors into Clients",
    badge: "Funnels & Pipelines",
    accentColor: "from-indigo-400 to-violet-600",
    skills: [
      { name: "B2B & B2C Funnels", tag: "Full-Funnel Flow" },
      { name: "LinkedIn Outreach", tag: "Professional Networking" },
      { name: "Landing Page Optimization", tag: "CRO & UX" },
      { name: "CRM Basics", tag: "Lead Lifecycle" },
    ],
  },
  {
    id: "creative",
    title: "Content & Creative",
    icon: Palette,
    tagline: "Engaging Visuals & Storytelling",
    badge: "Creative Suite",
    accentColor: "from-rose-400 to-pink-500",
    skills: [
      { name: "Ad Copywriting", tag: "High-Converting Hooks" },
      { name: "Social Media Planning", tag: "Channel Strategy" },
      { name: "Canva", tag: "Creative Assets & Layouts" },
      { name: "Content Calendar Management", tag: "Consistent Delivery" },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
            <span>Core Competencies</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-4"
          >
            Things I Love Working With
          </motion.h2>

          <p className="text-base sm:text-lg text-[#243B53]/80">
            A balanced marketing toolkit blending paid performance, organic reach, conversion funnels, and compelling visuals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              setActiveTab("all");
              soundManager.playChime("pop");
            }}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#326789] text-white shadow-md shadow-sky-900/15"
                : "glass-card text-[#243B53] hover:bg-white"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                soundManager.playChime("pop");
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-[#326789] text-white shadow-md shadow-sky-900/15"
                  : "glass-card text-[#243B53] hover:bg-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[32px] glass-card border border-white/95 shadow-lg relative overflow-hidden group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${category.accentColor} text-white flex items-center justify-center shadow-md shadow-sky-950/10 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#243B53] font-display">
                        {category.title}
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-semibold text-[#326789]">
                        {category.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#EAF6FF] text-[#326789] border border-sky-200">
                    {category.badge}
                  </span>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-col gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => soundManager.playChime("pop")}
                      className="p-3.5 rounded-2xl bg-white/90 hover:bg-white border border-sky-100 hover:border-sky-300 shadow-sm transition-all flex items-center justify-between group/item"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-50 text-[#326789] flex items-center justify-center group-hover/item:bg-[#326789] group-hover/item:text-white transition-colors">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-bold text-[#243B53]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-[#326789] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sneha's 4-Step Campaign Execution Blueprint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-[36px] glass-card border border-white/95 shadow-xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#326789] text-xs font-bold uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5 text-sky-600" />
                <span>Strategic Workflow</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display">
                How I Turn Strategy Into Measurable Growth
              </h3>
            </div>
            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-white text-[#326789] border border-sky-200 self-start md:self-auto shadow-xs">
              4-Phase Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Intent & Keywords",
                desc: "Deep keyword analysis, customer intent mapping, and healthcare audience segmentation.",
                pill: "Research",
              },
              {
                step: "02",
                title: "Creative Storytelling",
                desc: "High-CTR ad copy and empathetic visual creatives crafted in Canva for multi-platform appeal.",
                pill: "Creative",
              },
              {
                step: "03",
                title: "Funnel & Indexing",
                desc: "High-converting landing page structure, on-page SEO metadata, and clear patient booking paths.",
                pill: "Execution",
              },
              {
                step: "04",
                title: "ROAS & Analytics",
                desc: "Tracking CPC, CTR, Google Analytics metrics, and reallocating budget to highest ROI channels.",
                pill: "Scale",
              },
            ].map((phase) => (
              <div
                key={phase.step}
                onMouseEnter={() => soundManager.playChime("pop")}
                className="p-5 rounded-2xl bg-white/90 hover:bg-white border border-sky-100 hover:border-sky-300 shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#A8D8F0] group-hover:text-[#326789] transition-colors font-display">
                    {phase.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-sky-50 text-[#326789]">
                    {phase.pill}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#243B53] font-display mb-1.5">
                  {phase.title}
                </h4>
                <p className="text-xs text-[#243B53]/80 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

