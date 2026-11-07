"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, Volume2, VolumeX, Send, FileText } from "lucide-react";
import { soundManager } from "./SoundEffects";
import ResumeModal from "./ResumeModal";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section
      const sections = ["hero", "about", "journey", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    soundManager.enabled = nextState;
    if (nextState) {
      soundManager.playChime("pop");
    }
  };

  const handleLinkClick = (_href?: string) => {
    soundManager.playChime("pop");
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={() => handleLinkClick("#hero")}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-nav hover:shadow-md transition-all group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A8D8F0] to-[#EAE4FF] flex items-center justify-center text-[#326789] group-hover:rotate-12 transition-transform shadow-sm">
            <Sparkles className="w-4 h-4 fill-[#A8D8F0]" />
          </div>
          <div>
            <span className="font-bold text-[#243B53] tracking-tight text-base font-display flex items-center gap-1.5">
              Sneha S.
              <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#D9EEFF] text-[#326789]">
                Marketing
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-nav shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? "text-[#326789] font-semibold"
                    : "text-[#243B53]/80 hover:text-[#326789] hover:bg-[#D9EEFF]/40"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white shadow-sm border border-sky-100 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Sound Controls */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound Effects"
            className="w-10 h-10 rounded-full glass-nav flex items-center justify-center text-[#326789] hover:bg-[#D9EEFF]/60 transition-colors shadow-sm"
            title={soundEnabled ? "Mute interactive chimes" : "Enable interactive chimes"}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-sky-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* View CV Button */}
          <button
            onClick={() => {
              soundManager.playChime("pop");
              setResumeOpen(true);
            }}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-card hover:bg-white text-[#326789] text-sm font-semibold border border-sky-200 hover:border-sky-300 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title="View & Download Sneha's Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View CV</span>
          </button>

          {/* Connect CTA Button */}
          <a
            href="#contact"
            onClick={() => handleLinkClick("#contact")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#326789] hover:bg-[#254f6b] text-white text-sm font-semibold shadow-md shadow-[#326789]/20 hover:shadow-lg hover:shadow-[#326789]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let&apos;s Connect</span>
            <Send className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              soundManager.playChime("pop");
            }}
            className="md:hidden w-10 h-10 rounded-full glass-nav flex items-center justify-center text-[#243B53] shadow-sm"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            className="md:hidden max-w-sm mx-auto mt-3 p-4 rounded-3xl glass-card shadow-2xl pointer-events-auto border border-white/90"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-4 py-2.5 text-base font-medium rounded-2xl text-[#243B53] hover:text-[#326789] hover:bg-[#D9EEFF]/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-sky-100 mt-1 flex flex-col gap-2">
                <button
                  onClick={() => {
                    soundManager.playChime("pop");
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full py-2.5 rounded-2xl glass-card text-[#326789] font-semibold text-center flex items-center justify-center gap-2 border border-sky-200"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume / CV</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => handleLinkClick("#contact")}
                  className="w-full py-3 rounded-2xl bg-[#326789] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Let&apos;s Connect</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Printable Interactive Resume Viewer Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}

