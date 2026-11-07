"use client";

import React, { useEffect, useRef, useState } from "react";
import RiggedCharacter from "./RiggedCharacter";
import confetti from "canvas-confetti";
import { soundManager } from "./SoundEffects";

interface SectionWaypoint {
  id: string;
  name: string;
  // Normalized scroll position (0 to 1)
  scrollProgress: number;
  // Viewport target position (percentages)
  xPctDesktop: number; // e.g. 72 for 72vw
  yPctDesktop: number; // e.g. 45 for 45vh
  xPctMobile: number;
  yPctMobile: number;
  scale: number;
  rotation: number; // tilt angle in degrees
  direction: 1 | -1;
  pose: "idle" | "walk" | "point" | "inspect" | "celebrate" | "wave";
  speechText: string;
}

const WAYPOINTS: SectionWaypoint[] = [
  {
    id: "hero",
    name: "Hero",
    scrollProgress: 0.0,
    xPctDesktop: 72,
    yPctDesktop: 42,
    xPctMobile: 65,
    yPctMobile: 35,
    scale: 1.0,
    rotation: 0,
    direction: -1, // looking left towards hero text
    pose: "wave",
    speechText: "Hi! Welcome to my world! ✨",
  },
  {
    id: "about",
    name: "About Me",
    scrollProgress: 0.18,
    xPctDesktop: 22,
    yPctDesktop: 48,
    xPctMobile: 20,
    yPctMobile: 52,
    scale: 0.95,
    rotation: -4,
    direction: 1, // walking right across to story
    pose: "walk",
    speechText: "B.Sc. Math + Storytelling 📊",
  },
  {
    id: "journey",
    name: "Journey",
    scrollProgress: 0.38,
    xPctDesktop: 78,
    yPctDesktop: 46,
    xPctMobile: 70,
    yPctMobile: 50,
    scale: 0.95,
    rotation: 3,
    direction: -1, // turning towards experience card
    pose: "walk",
    speechText: "Badrinath Ayurveda Hospital 🏥",
  },
  {
    id: "skills",
    name: "Skills",
    scrollProgress: 0.58,
    xPctDesktop: 24,
    yPctDesktop: 52,
    xPctMobile: 25,
    yPctMobile: 54,
    scale: 1.02,
    rotation: -2,
    direction: 1, // pointing towards skills
    pose: "point",
    speechText: "Pointing to Meta & SEO tools! 🎯",
  },
  {
    id: "projects",
    name: "Projects",
    scrollProgress: 0.74,
    xPctDesktop: 76,
    yPctDesktop: 46,
    xPctMobile: 68,
    yPctMobile: 48,
    scale: 0.98,
    rotation: 2,
    direction: -1, // looking at Zara mockup
    pose: "inspect",
    speechText: "Inspecting Zara's live website! 🔍",
  },
  {
    id: "education",
    name: "Education",
    scrollProgress: 0.86,
    xPctDesktop: 25,
    yPctDesktop: 50,
    xPctMobile: 28,
    yPctMobile: 52,
    scale: 1.0,
    rotation: -2,
    direction: 1, // celebrating degree
    pose: "celebrate",
    speechText: "Illinois Tech AI & Calicut Uni 🎓",
  },
  {
    id: "contact",
    name: "Contact",
    scrollProgress: 1.0,
    xPctDesktop: 32,
    yPctDesktop: 68,
    xPctMobile: 40,
    yPctMobile: 72,
    scale: 1.08,
    rotation: 0,
    direction: 1, // beside mailbox
    pose: "wave",
    speechText: "Thanks for visiting! Let's connect 💌",
  },
];

// Linear interpolation helper
function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

// Catmull-Rom or cubic smooth easing between waypoints
function smoothStep(t: number): number {
  return t * t * (3 - 2 * t);
}

export default function CharacterAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance animation state (updated via RAF without React re-render spikes)
  const animStateRef = useRef({
    smoothedScroll: 0,
    lastScrollY: 0,
    walkCycle: 0,
    isWalking: false,
    ponytailAngle: 0,
    currentPose: "idle" as "idle" | "walk" | "point" | "inspect" | "celebrate" | "wave",
    currentDirection: 1 as 1 | -1,
    currentSpeech: "Hi! Welcome to my world! ✨",
    stopTimer: 0,
  });

  const [displayPose, setDisplayPose] = useState<"idle" | "walk" | "point" | "inspect" | "celebrate" | "wave">("wave");
  const [displayDirection, setDisplayDirection] = useState<1 | -1>(-1);
  const [displaySpeech, setDisplaySpeech] = useState<string>("Hi! Welcome to my world! ✨");
  const [walkCycleState, setWalkCycleState] = useState<number>(0);
  const [isWalkingState, setIsWalkingState] = useState<boolean>(false);
  const [ponytailAngleState, setPonytailAngleState] = useState<number>(0);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let isMobile = window.innerWidth < 1024;
    const handleResize = () => {
      isMobile = window.innerWidth < 1024;
    };
    window.addEventListener("resize", handleResize);

    let rafId: number;
    let lastTime = performance.now();

    const updateFrame = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      // 1. Calculate overall scroll progress (0 to 1)
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // 2. Exponential smoothing (matching the reference site's physics engine)
      const smoothingFactor = 1 - Math.exp(-dt * 12);
      animStateRef.current.smoothedScroll = lerp(
        animStateRef.current.smoothedScroll,
        targetScrollProgress,
        smoothingFactor
      );
      const s = animStateRef.current.smoothedScroll;

      // 3. Detect movement and scroll speed for walk cycle & ponytail inertia
      const currentScrollY = window.scrollY;
      const scrollSpeed = Math.abs(currentScrollY - animStateRef.current.lastScrollY);
      const isMoving = scrollSpeed > 0.4 || Math.abs(targetScrollProgress - s) > 0.002;

      if (isMoving) {
        animStateRef.current.isWalking = true;
        animStateRef.current.stopTimer = currentTime;
        
        // Direction of scrolling determines forward / reverse walk cycle
        const scrollDelta = currentScrollY - animStateRef.current.lastScrollY;
        animStateRef.current.walkCycle = (animStateRef.current.walkCycle + scrollDelta * 0.006) % 1;
        if (animStateRef.current.walkCycle < 0) animStateRef.current.walkCycle += 1;

        // Secondary ponytail lag: swings opposite to motion with spring oscillation
        const targetPonytail = Math.max(-28, Math.min(28, -scrollDelta * 0.7));
        animStateRef.current.ponytailAngle = lerp(animStateRef.current.ponytailAngle, targetPonytail, 0.15);
      } else {
        // Character has stopped walking: gentle idle spring settling
        if (currentTime - animStateRef.current.stopTimer > 250) {
          animStateRef.current.isWalking = false;
        }
        // Idle ponytail sway with subtle ambient breathing
        const idleWave = Math.sin(currentTime * 0.0025) * 4;
        animStateRef.current.ponytailAngle = lerp(animStateRef.current.ponytailAngle, idleWave, 0.08);
      }
      animStateRef.current.lastScrollY = currentScrollY;

      // 4. Multi-segment interpolation across Waypoints
      let segIdx = 0;
      for (let i = 0; i < WAYPOINTS.length - 1; i++) {
        if (s >= WAYPOINTS[i].scrollProgress && s <= WAYPOINTS[i + 1].scrollProgress) {
          segIdx = i;
          break;
        }
        if (s > WAYPOINTS[i + 1].scrollProgress) {
          segIdx = i;
        }
      }

      const p1 = WAYPOINTS[segIdx];
      const p2 = WAYPOINTS[Math.min(segIdx + 1, WAYPOINTS.length - 1)];
      const segmentSpan = Math.max(0.001, p2.scrollProgress - p1.scrollProgress);
      const localT = smoothStep(Math.min(1, Math.max(0, (s - p1.scrollProgress) / segmentSpan)));

      // Viewport Coordinates (in vw and vh)
      const xPct = isMobile
        ? lerp(p1.xPctMobile, p2.xPctMobile, localT)
        : lerp(p1.xPctDesktop, p2.xPctDesktop, localT);
      const yPct = isMobile
        ? lerp(p1.yPctMobile, p2.yPctMobile, localT)
        : lerp(p1.yPctDesktop, p2.yPctDesktop, localT);

      // Smooth scale and rotation
      const scale = lerp(p1.scale, p2.scale, localT);
      // Subtle dynamic tilt while turning along curves
      const curveTilt = isMoving ? (p2.xPctDesktop - p1.xPctDesktop) * 0.12 : 0;
      const rotation = lerp(p1.rotation, p2.rotation, localT) + curveTilt;

      // Subtle float oscillation (from reference site: `Math.sin(time / 1100) * ...`)
      const floatOffsetY = Math.sin(currentTime * 0.002) * (isMoving ? 1.5 : 4);

      // Determine active milestone pose & speech text
      const closestPoint = localT < 0.5 ? p1 : p2;
      const targetPose = isMoving ? "walk" : closestPoint.pose;
      const targetDir = closestPoint.direction;

      // 5. Apply Direct GPU Transforms to DOM Container (0 layout shift, buttery 60/120fps)
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(calc(${xPct}vw - 50%), calc(${yPct}vh - 50% + ${floatOffsetY}px), 0) scale(${scale}) rotate(${rotation}deg)`;
      }

      // Update state for rigged character SVG rendering (throttled to avoid redundant React state)
      if (animStateRef.current.currentPose !== targetPose) {
        animStateRef.current.currentPose = targetPose;
        setDisplayPose(targetPose);
      }
      if (animStateRef.current.currentDirection !== targetDir) {
        animStateRef.current.currentDirection = targetDir;
        setDisplayDirection(targetDir);
      }
      if (animStateRef.current.currentSpeech !== closestPoint.speechText) {
        animStateRef.current.currentSpeech = closestPoint.speechText;
        setDisplaySpeech(closestPoint.speechText);
      }

      setWalkCycleState(animStateRef.current.walkCycle);
      setIsWalkingState(animStateRef.current.isWalking);
      setPonytailAngleState(animStateRef.current.ponytailAngle);

      rafId = requestAnimationFrame(updateFrame);
    };

    rafId = requestAnimationFrame(updateFrame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Click companion for happy chime & pastel confetti
  const handleCompanionClick = () => {
    soundManager.playChime("sparkle");
    try {
      confetti({
        particleCount: 35,
        spread: 65,
        origin: { y: 0.6 },
        colors: ["#A8D8F0", "#326789", "#D9EEFF", "#EAE4FF", "#FFB7B2"],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleCompanionClick}
      className="fixed top-0 left-0 z-30 pointer-events-auto cursor-pointer will-change-transform select-none w-36 sm:w-44 md:w-52 h-60 sm:h-72"
      style={{
        transformOrigin: "center bottom",
      }}
      title="Click Sneha to say hi!"
    >
      <RiggedCharacter
        walkCycle={walkCycleState}
        isWalking={isWalkingState}
        pose={displayPose}
        direction={displayDirection}
        speechText={displaySpeech}
      />
    </div>
  );
}

