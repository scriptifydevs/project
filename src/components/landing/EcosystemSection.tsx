"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Bot,
  Network,
  Code2,
  Globe,
  Workflow,
  Shield,
  BrainCircuit,
  Database,
  Sparkles
} from "lucide-react";

export default function EcosystemSection() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      setRevealed(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "100px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      obs.observe(currentRef);
    }

    const timer = setTimeout(() => setRevealed(true), 1000);

    return () => {
      if (currentRef) obs.unobserve(currentRef);
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  const revealStyle = (delay: number) => ({
    opacity: revealed ? 1 : 0,
    transform: revealed ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
  });

  const cards = [
    {
      id: "ai",
      title: "AI Modules",
      desc: "Plug-and-play neural engines for NLP, vision, and generation.",
      icon: <Cpu className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-2 md:col-span-2",
      visual: (
        <div className="absolute right-0 top-0 w-64 h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(204,255,0,0.05)] to-transparent" />
          <svg className="absolute right-[-20px] top-[10px] w-48 h-48 opacity-40 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="4 8" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="2 4" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="#ccff00" strokeWidth="0.5" />
            <circle cx="50" cy="10" r="2" fill="#ccff00" />
            <circle cx="50" cy="90" r="2" fill="#ccff00" />
          </svg>
        </div>
      )
    },
    {
      id: "chatbots",
      title: "Chatbots",
      desc: "Intelligent conversational agents with deep memory.",
      icon: <Bot className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-end justify-end p-4 opacity-50">
          <div className="flex gap-1.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-1.5 bg-[#ccff00] rounded-full animate-[equalizer_1.5s_ease-in-out_infinite]" style={{ height: '24px', animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>
      )
    },
    {
      id: "apis",
      title: "Unlimited APIs",
      desc: "High-speed integration points.",
      icon: <Network className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute top-0 right-0 w-full h-full opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-60" />
          <div className="absolute w-3 h-3 rounded-full bg-[#ccff00] shadow-[0_0_12px_#ccff00] animate-[flowLine_2s_linear_infinite]" />
        </div>
      )
    },
    {
      id: "scripts",
      title: "Scripts & Code",
      desc: "Production-ready automated microservices.",
      icon: <Code2 className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-2 md:col-span-2",
      visual: (
        <div className="absolute right-0 inset-y-0 w-[60%] flex flex-col justify-center gap-3 opacity-40 pointer-events-none px-6">
          <div className="w-full h-1.5 bg-[#ccff00] rounded-full animate-[codeLine_2s_ease-in-out_infinite]" />
          <div className="w-4/5 h-1.5 bg-[#e4e4e7] rounded-full animate-[codeLine_2.5s_ease-in-out_infinite_0.2s]" />
          <div className="w-2/3 h-1.5 bg-[#e4e4e7] rounded-full animate-[codeLine_2s_ease-in-out_infinite_0.4s]" />
          <div className="w-1/3 h-1.5 bg-[#ccff00] rounded-full animate-[codeLine_3s_ease-in-out_infinite_0.6s]" />
        </div>
      )
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      desc: "Global edge network & clusters.",
      icon: <Database className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute right-0 bottom-0 overflow-hidden w-28 h-28 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(204,255,0,0.2)_0%,transparent_70%)]" />
          <Database className="absolute right-3 bottom-3 w-12 h-12 text-[#ccff00] opacity-30 animate-pulse" />
        </div>
      )
    },
    {
      id: "web",
      title: "Web Dev",
      desc: "React, Next.js infinite scaling.",
      icon: <Globe className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 border border-[#ccff00]/15 rounded-full flex items-center justify-center opacity-50 pointer-events-none animate-[spin_15s_linear_infinite]">
          <div className="w-20 h-20 border border-[#ccff00]/40 rounded-full border-dashed" />
          <div className="absolute top-0 w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]" />
        </div>
      )
    },
    {
      id: "automations",
      title: "Automations",
      desc: "Multi-platform workflows.",
      icon: <Workflow className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute right-3 bottom-3 flex items-center justify-center opacity-20 pointer-events-none">
          <Workflow className="w-16 h-16 text-[#ccff00] animate-[bounce_4s_ease-in-out_infinite]" />
        </div>
      )
    },
    {
      id: "security",
      title: "Security",
      desc: "Enterprise-grade protection.",
      icon: <Shield className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-1 md:col-span-1",
      visual: (
        <div className="absolute right-3 bottom-3 w-14 h-14 opacity-40 pointer-events-none flex items-center justify-center">
          <div className="w-full h-full border-t-[3px] border-r-[3px] border-[#ccff00] rounded-full animate-spin" />
          <Shield className="absolute w-6 h-6 text-[#ccff00]" />
        </div>
      )
    },
    {
      id: "intelligence",
      title: "Intelligence",
      desc: "Deep multi-model reasoning and logic processing.",
      icon: <BrainCircuit className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors duration-500" />,
      colSpan: "col-span-2 md:col-span-2",
      visual: (
        <div className="absolute right-0 bottom-0 w-64 h-full bg-gradient-to-tl from-[rgba(204,255,0,0.08)] to-transparent pointer-events-none flex items-center justify-end px-6">
          <svg className="w-28 h-28 opacity-40" viewBox="0 0 100 100" fill="none">
            <path d="M20 50 Q 40 20, 60 50 T 100 50" stroke="#ccff00" strokeWidth="0.75" fill="none" />
            <path d="M0 50 Q 20 80, 40 50 T 80 50" stroke="#ccff00" strokeWidth="0.75" fill="none" opacity="0.5" />
            <circle cx="60" cy="50" r="4" fill="#ccff00" className="animate-pulse" />
            <circle cx="40" cy="50" r="4" fill="#ccff00" className="animate-pulse" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#030303] overflow-hidden font-sans selection:bg-[#ccff00]/30 selection:text-white"
    >
      {/* ════ MODERN BACKGROUND ════ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#ccff00]/[0.025] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[#ccff00]/[0.015] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* ════ HEADER ════ */}
        <div className="flex flex-col items-start mb-10" style={revealStyle(0)}>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ccff00] mb-3 tracking-tight">
            The Complete Ecosystem
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
            A highly professional, interconnected suite of tools engineered for absolute performance and seamless scalability.
          </p>
        </div>

        {/* ════ ASYMMETRICAL PROFESSIONAL GRID (Mobile Optimized) ════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[150px] sm:auto-rows-[180px]">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              // Changed from plain border to an ultra-premium CSS outline style and deeper card background
              className={`group relative overflow-hidden rounded-[24px] bg-[#0a0a0c] hover:bg-[#0f0f12] transition-all duration-500 shadow-[0_8px_32px_-12px_rgba(0,0,0,1)] hover:shadow-[0_8px_32px_-12px_rgba(204,255,0,0.2)] ${card.colSpan}`}
              style={revealStyle(100 + (idx * 50))}
            >
              {/* Ultra-Premium Glowing Outline (Permanently visible thin stroke that brightens on hover) */}
              <div className="absolute inset-0 rounded-[24px] border border-white/5 group-hover:border-[#ccff00]/40 transition-colors duration-500 pointer-events-none z-20" />

              {/* Top Neon Highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Deep Inner Ambient Glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-[#ccff00]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] z-0" />

              {/* Visual Background */}
              <div className="z-0">
                {card.visual}
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#141417] border border-white/10 flex items-center justify-center group-hover:border-[#ccff00]/40 group-hover:shadow-[0_0_15px_rgba(204,255,0,0.15)] transition-all duration-500">
                  {card.icon}
                </div>

                <div className="mt-auto pt-4">
                  {/* TEXT GRADIENT FOR TITLES */}
                  <h3 className="text-[15px] sm:text-[18px] font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ccff00] mb-1.5 sm:mb-2 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-[#8a8a93] group-hover:text-[#d4d4d8] transition-colors duration-500 leading-relaxed pr-2 sm:pr-8">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes equalizer { 0%, 100% { height: 6px; } 50% { height: 24px; } }
        @keyframes codeLine { 0%, 100% { width: 30%; opacity: 0.3; } 50% { width: 100%; opacity: 0.8; } }
        @keyframes flowLine { 0% { left: -10px; opacity: 0; } 50% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
      `}} />
    </section>
  );
}