"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Heart,
} from "lucide-react";
import { LinkedInIcon } from "./Icons";
import { soundManager } from "./SoundEffects";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    soundManager.playChime("pop");
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    soundManager.playChime("sparkle");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundManager.playChime("success");

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#A8D8F0", "#326789", "#D9EEFF", "#EAE4FF", "#FFB7B2"],
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <span>Start a Conversation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#243B53] font-display tracking-tight mb-4"
          >
            Have a Project in Mind?
          </motion.h2>

          <p className="text-base sm:text-lg text-[#243B53]/85 font-medium">
            Let&apos;s create something meaningful together!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info + Pastel Blue Mailbox Scene */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-[36px] glass-card border border-white/95 shadow-xl relative overflow-hidden"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#243B53] font-display mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-[#243B53]/80 mb-8 leading-relaxed">
                Whether you need a high-performance ad campaign, organic SEO roadmap, or marketing strategy audit,
                my inbox is always open.
              </p>

              {/* Direct Info List */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 flex items-center justify-between group shadow-xs">
                  <a
                    href="mailto:snehas10072002@gmail.com"
                    onClick={() => soundManager.playChime("pop")}
                    className="flex items-center gap-3 truncate text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#326789] flex items-center justify-center group-hover:bg-[#326789] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] uppercase font-bold text-[#326789]">Email</p>
                      <p className="text-sm font-semibold text-[#243B53] truncate">
                        snehas10072002@gmail.com
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy("snehas10072002@gmail.com", "email")}
                    className="p-2 rounded-xl text-slate-400 hover:text-[#326789] hover:bg-sky-50 transition-colors"
                    title="Copy email"
                  >
                    {copiedItem === "email" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 flex items-center justify-between group shadow-xs">
                  <a
                    href="tel:+916238265468"
                    onClick={() => soundManager.playChime("pop")}
                    className="flex items-center gap-3 truncate text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#326789] flex items-center justify-center group-hover:bg-[#326789] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#326789]">Phone</p>
                      <p className="text-sm font-semibold text-[#243B53]">
                        +91 6238265468
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy("+916238265468", "phone")}
                    className="p-2 rounded-xl text-slate-400 hover:text-[#326789] hover:bg-sky-50 transition-colors"
                    title="Copy phone"
                  >
                    {copiedItem === "phone" ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 flex items-center gap-3 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#326789] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-[#326789]">Location</p>
                    <p className="text-sm font-semibold text-[#243B53]">
                      Palakkad, Kerala, India
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Chat */}
                <div className="p-4 rounded-2xl bg-white/90 border border-emerald-100 flex items-center justify-between group shadow-xs">
                  <a
                    href="https://wa.me/916238265468?text=Hi%20Sneha%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playChime("pop")}
                    className="flex items-center gap-3 truncate text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <span className="text-lg">💬</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-emerald-700">WhatsApp</p>
                      <p className="text-sm font-semibold text-[#243B53]">
                        Chat on WhatsApp
                      </p>
                    </div>
                  </a>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    Quick Reply
                  </span>
                </div>

                {/* LinkedIn Placeholder */}
                <div className="p-4 rounded-2xl bg-white/90 border border-sky-100 flex items-center justify-between group shadow-xs">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playChime("pop")}
                    className="flex items-center gap-3 truncate text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#326789] flex items-center justify-center group-hover:bg-[#326789] group-hover:text-white transition-colors">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#326789]">LinkedIn</p>
                      <p className="text-sm font-semibold text-[#243B53]">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </a>
                  <span className="text-xs font-semibold text-[#326789] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Finish Section: Realistic Animated Girl Standing Beside a Pastel Blue Mailbox, Waving Goodbye */}
            <div className="relative pt-6 border-t border-sky-100 mt-auto">
              <div className="p-4 rounded-3xl bg-gradient-to-r from-[#D9EEFF] to-[#EAE4FF] border border-white flex items-center gap-4 shadow-sm">
                {/* Mailbox SVG + Sneha Realistic Cutout Figure */}
                <div className="w-20 h-24 relative flex-shrink-0 flex items-end">
                  {/* Pastel Blue Mailbox */}
                  <svg viewBox="0 0 60 70" className="w-12 h-16 absolute left-0 bottom-0 z-10 drop-shadow-sm" fill="none">
                    <rect x="18" y="36" width="5" height="30" rx="2.5" fill="#326789" />
                    <rect x="6" y="18" width="28" height="20" rx="6" fill="#A8D8F0" stroke="#326789" strokeWidth="1.8" />
                    <path d="M6 18 C6 9, 34 9, 34 18 Z" fill="#82B9D9" stroke="#326789" strokeWidth="1.8" />
                    <line x1="36" y1="28" x2="36" y2="14" stroke="#E24B5C" strokeWidth="2.2" strokeLinecap="round" />
                    <polygon points="36,14 43,17 36,20" fill="#E24B5C" />
                    <rect x="12" y="16" width="14" height="10" rx="1.5" fill="#FFFFFF" stroke="#326789" strokeWidth="1" transform="rotate(-10 12 16)" />
                  </svg>

                  {/* Realistic Sneha Figure standing beside mailbox, waving */}
                  <motion.div
                    animate={{ y: [0, -3, 0], rotate: [0, 1.5, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-16 h-22 absolute right-0 bottom-0 z-20"
                  >
                    <img
                      src="/images/sneha-official-cropped.png"
                      alt="Sneha S waving goodbye beside mailbox"
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                    {/* Waving hand badge */}
                    <motion.span
                      animate={{ rotate: [0, 25, -15, 25, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute -top-1 right-1 text-base select-none"
                    >
                      👋
                    </motion.span>
                  </motion.div>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#326789] uppercase tracking-wider flex items-center gap-1.5">
                    <span>Sneha says goodbye!</span>
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
                  </p>
                  <p className="text-xs text-[#243B53] font-medium leading-relaxed mt-1">
                    Standing beside her pastel blue mailbox, ready to read your note and build something extraordinary.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-[36px] glass-card border border-white/95 shadow-xl flex flex-col justify-center"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center mb-6 shadow-inner border border-emerald-100">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display mb-2">
                  Message Sent Delightfully!
                </h3>
                <p className="text-sm sm:text-base text-[#243B53]/80 max-w-md mx-auto mb-8">
                  Thank you for reaching out, <strong className="text-[#326789]">{formData.name}</strong>.
                  I will review your message and reply promptly!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#326789] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#254f6b] transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#243B53] font-display mb-1.5">
                    Send a Message
                  </h3>
                  <p className="text-sm text-[#243B53]/80">
                    Fill in your details below and I will get back to you within 24 hours.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#326789] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/90 border border-sky-100 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 text-[#243B53] text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#326789] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/90 border border-sky-100 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 text-[#243B53] text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#326789] mb-2">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your brand, marketing goals, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/90 border border-sky-100 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 text-[#243B53] text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-[#326789] hover:bg-[#254f6b] text-white font-bold text-base shadow-lg shadow-[#326789]/25 hover:shadow-xl hover:shadow-[#326789]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
