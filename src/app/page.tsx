"use client";

import React from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import FloatingClouds from "@/components/FloatingClouds";
import Navbar from "@/components/Navbar";
import CharacterAnimation from "@/components/CharacterAnimation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Whimsical Pastel Preloader */}
      <Preloader />

      {/* Custom Desktop Star & Glow Cursor */}
      <CustomCursor />

      {/* Floating Pastel Clouds & Stars Ambient Layer */}
      <FloatingClouds />

      {/* Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Layout with Winding Journey Companion */}
      <main className="relative min-h-screen">
        {/* Signature Feature: Scroll-Driven Character Animation across sections */}
        <CharacterAnimation />

        {/* Section 1 — Hero */}
        <HeroSection />

        {/* Section 2 — About Me */}
        <AboutSection />

        {/* Section 3 — My Journey */}
        <JourneySection />

        {/* Section 4 — My Skills */}
        <SkillsSection />

        {/* Section 5 — Featured Projects */}
        <ProjectsSection />

        {/* Section 6 — Certifications & Education */}
        <EducationSection />

        {/* Section 7 — Contact Me */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
