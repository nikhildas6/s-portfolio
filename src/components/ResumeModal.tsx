"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Building,
  GraduationCap,
  Award,
  CheckCircle,
  Printer,
  Sparkles,
} from "lucide-react";
import { soundManager } from "./SoundEffects";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundManager.playChime("pop");
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl my-8 p-6 sm:p-10 rounded-[32px] bg-white shadow-2xl border border-sky-100 text-[#243B53] max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar with Print & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-sky-100 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#326789]">
                Verified Professional Resume
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-[#326789] text-xs font-bold transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={() => {
                  soundManager.playChime("pop");
                  onClose();
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-sky-100">
            <div>
              <h2 className="text-3xl font-extrabold font-display text-[#243B53]">
                Sneha S
              </h2>
              <p className="text-base font-bold text-[#326789] mt-0.5">
                Digital Marketing Executive
              </p>
              <p className="text-xs text-[#243B53]/70 mt-1 max-w-md">
                Data-driven marketer combining mathematical logic with creative storytelling to scale healthcare and brand acquisition funnels.
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-col gap-1.5 text-xs text-[#243B53]/80">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#326789]" />
                snehas10072002@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#326789]" />
                +91 6238265468
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#326789]" />
                Palakkad, Kerala, India
              </span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="py-6 border-b border-sky-100">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#326789] mb-4 flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>

            <div className="p-4 rounded-2xl bg-[#EAF6FF]/60 border border-sky-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h4 className="text-base font-bold text-[#243B53]">
                  Digital Marketing Executive — Badrinath Ayurveda Hospital
                </h4>
                <span className="text-xs font-semibold text-[#326789]">
                  January 2026 – Present | Aluva, Ernakulam
                </span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-[#243B53]/85 space-y-1.5 mt-2">
                <li>Managed paid Facebook and Instagram advertising campaigns with precision audience targeting.</li>
                <li>Created targeted healthcare and wellness ad creatives tailored for prospective patients.</li>
                <li>Implemented on-page SEO, keyword optimization, and structured search architecture.</li>
                <li>Monitored CTR, CPC, and conversion funnels to continuously optimize return on ad spend.</li>
                <li>Managed organic social media content calendars and collaborated with clinical teams.</li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="py-6 border-b border-sky-100">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#326789] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Core Marketing Competencies</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs">
                <p className="font-bold text-[#326789] mb-1">Performance Marketing</p>
                <p className="text-[#243B53]/80">Meta Ads, Google Ads, YouTube Ads, Campaign Budgeting, ROAS Optimization</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs">
                <p className="font-bold text-[#326789] mb-1">SEO &amp; Organic Growth</p>
                <p className="text-[#243B53]/80">Keyword Research, On-Page SEO, Off-Page SEO, Local SEO, Backlink Strategies</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs">
                <p className="font-bold text-[#326789] mb-1">Lead Generation &amp; Funnels</p>
                <p className="text-[#243B53]/80">B2B &amp; B2C Funnels, LinkedIn Outreach, Landing Page Optimization, CRM Basics</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-xs">
                <p className="font-bold text-[#326789] mb-1">Creative &amp; Content</p>
                <p className="text-[#243B53]/80">Ad Copywriting, Social Media Planning, Canva, Content Calendar Management</p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="pt-6">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#326789] mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education &amp; Credentials</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-sky-100 shadow-xs">
                <span className="text-[10px] font-bold uppercase text-[#326789]">Executive Program</span>
                <h4 className="text-sm font-bold text-[#243B53] mt-0.5">Program in Digital Marketing (AI)</h4>
                <p className="text-xs text-[#243B53]/70">Illinois Tech | NSDC | Entri</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#EAE4FF]/40 border border-violet-100 shadow-xs">
                <span className="text-[10px] font-bold uppercase text-violet-700">Undergraduate Degree</span>
                <h4 className="text-sm font-bold text-[#243B53] mt-0.5">B.Sc. Mathematics</h4>
                <p className="text-xs text-[#243B53]/70">University of Calicut (2020–2023)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

