"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function EcosystemSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2
      });
    };
    const el = sectionRef.current;
    if (el) el.addEventListener("mousemove", handleMove);
    return () => { if (el) el.removeEventListener("mousemove", handleMove); };
  }, []);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="relative w-full bg-[#020204] py-16 md:py-24 lg:py-32 overflow-hidden font-sans selection:bg-[#ccff00]/30 selection:text-white">

      {/* ═══ BACKGROUND ═══ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-[#ccff00]/[0.02] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-[#00ffaa]/[0.018] rounded-full blur-[220px]" />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[#5500ff]/[0.01] rounded-full blur-[140px]" />
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[200px] transition-all duration-[2000ms] ease-out" style={{
          background: "radial-gradient(circle, rgba(204,255,0,0.035) 0%, transparent 70%)",
          left: `${50 + mousePos.x * 12}%`, top: `${50 + mousePos.y * 12}%`,
          transform: "translate(-50%, -50%)"
        }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "30px 30px"
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(204,255,0,0.01)_50%,transparent_60%)] bg-[length:100%_200%] animate-[scan_8s_linear_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#020204_80%)]" />
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="absolute w-[1px] h-[1px] rounded-full bg-[#ccff00]/25" style={{
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            animation: `pf ${8 + Math.random() * 12}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* ═══ HEADER ═══ */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#ccff00]/10 bg-[#ccff00]/[0.03] mb-8 backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
            <span className="text-[9px] font-bold tracking-[0.35em] text-[#ccff00]/80 uppercase">The Ecosystem</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_8px_#ccff00]" />
          </div>
          <h2 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black text-white mb-6 tracking-[-0.045em] leading-[1.02]">
            Connect. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#aaff33] to-[#00ffaa]">Command.</span> Conquer.
          </h2>
          <p className="text-zinc-500 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed">
            An infinitely scalable mesh of tools, agents, and intelligence.
          </p>
        </div>

        {/* ═══ BENTO GRID ═══ */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[165px] md:auto-rows-[175px] grid-flow-row-dense">

          {/* ━━ 1. AI MODULES ━━ */}
          <BentoBox className="col-span-2 md:col-span-2 md:row-span-2" accent="#ccff00" tilt={4}>
            <SvgsAiModules />
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 md:p-7">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#ccff00]/[0.06] border border-[#ccff00]/12 backdrop-blur-xl flex items-center justify-center shadow-[0_0_25px_rgba(204,255,0,0.06)]">
                  <SvgsIconCpu color="#ccff00" />
                </div>
                <span className="text-[7px] font-bold tracking-[0.2em] text-[#ccff00]/40 uppercase mt-2">Core</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight mb-1.5">AI Modules</h3>
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed">Plug-and-play ML models. NLP, vision, generative — deploy in seconds.</p>
              </div>
            </div>
          </BentoBox>

          {/* ━━ 2. CHATBOTS ━━ */}
          <BentoBox accent="#00ffaa">
            <SvgsChat />
            <CardContent title="Chatbots" desc="Context-aware AI" />
          </BentoBox>

          {/* ━━ 3. APIs ━━ */}
          <BentoBox accent="#ccff00">
            <SvgsApi />
            <CardContent title="Unlimited APIs" desc="Seamless integration" />
          </BentoBox>

          {/* ═══════════════════════════════
              ━━ 4. THE HUB — NO TEXT, PURE SVG ART
              ═══════════════════════════════ */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 md:row-span-2 relative group">
            {/* Outer Halo */}
            <div className="absolute -inset-[2px] rounded-2xl md:rounded-[32px] opacity-50 group-hover:opacity-90 transition-opacity duration-1000" style={{
              background: "conic-gradient(from var(--a, 0deg), #ccff00, transparent 18%, #00ffaa 42%, transparent 68%, #ccff00)",
              filter: "blur(2px)", animation: "borderSpin 7s linear infinite"
            }} />
            {/* Sharp Border */}
            <div className="absolute -inset-px rounded-2xl md:rounded-[32px] opacity-70" style={{
              background: "conic-gradient(from var(--a, 0deg), #ccff00, transparent 20%, #00ffaa 50%, transparent 80%, #ccff00)",
              animation: "borderSpin 6s linear infinite"
            }} />
            {/* Inner */}
            <div className="relative z-10 m-[1.5px] rounded-2xl md:rounded-[30px] overflow-hidden bg-gradient-to-br from-[#030310] via-[#020208] to-[#010104]">

              {/* Grain */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

              {/* Subtle Grid */}
              <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(204,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.4) 1px, transparent 1px)",
                backgroundSize: "36px 36px"
              }} />

              {/* Core Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full pointer-events-none animate-[hubBreath_6s_ease-in-out_infinite]" style={{
                background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, rgba(0,255,170,0.04) 35%, transparent 65%)",
                filter: "blur(50px)"
              }} />

              {/* Secondary off-center glow */}
              <div className="absolute top-[20%] right-[15%] w-[200px] h-[200px] rounded-full pointer-events-none" style={{
                background: "radial-gradient(circle, rgba(0,255,170,0.05) 0%, transparent 70%)", filter: "blur(40px)"
              }} />

              {/* ═══ ORBITAL RINGS ═══ */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Ring 1 — Outer */}
                <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full" style={{
                  border: "0.5px solid rgba(204,255,0,0.06)",
                  animation: "hubSpin 45s linear infinite"
                }}>
                  <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00,0_0_20px_rgba(204,255,0,0.3)]" />
                  <div className="absolute -bottom-[2px] left-[30%] w-[3px] h-[3px] rounded-full bg-[#00ffaa]/60 shadow-[0_0_6px_#00ffaa]" />
                </div>
                {/* Ring 2 — Dashed */}
                <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[330px] md:h-[330px] rounded-full" style={{
                  border: "1px dashed rgba(0,255,170,0.06)",
                  animation: "hubSpinR 30s linear infinite"
                }}>
                  <div className="absolute top-1/2 -right-[2px] -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[#00ffaa] shadow-[0_0_8px_#00ffaa]" />
                  <div className="absolute top-[15%] -left-[2px] w-[3px] h-[3px] rounded-full bg-[#ccff00]/50" />
                </div>
                {/* Ring 3 — Inner */}
                <div className="absolute w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] rounded-full" style={{
                  border: "0.5px solid rgba(204,255,0,0.04)",
                  animation: "hubSpin 20s linear infinite"
                }}>
                  <div className="absolute -bottom-[2px] left-[60%] w-[4px] h-[4px] rounded-full bg-[#ccff00]/70 shadow-[0_0 6px_rgba(204,255,0,0.5)]" />
                </div>
                {/* Ring 4 — Tiny */}
                <div className="absolute w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] rounded-full" style={{
                  border: "0.5px solid rgba(255,255,255,0.03)",
                  animation: "hubSpinR 14s linear infinite"
                }} />
              </div>

              {/* ═══ CENTER LOGO ═══ */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginTop: "-8px" }}>
                <div className="relative animate-[logoFloat_5s_ease-in-out_infinite]">
                  {/* Logo backdrop glow */}
                  <div className="absolute -inset-[25px] rounded-full bg-[#ccff00]/[0.05] blur-[35px] animate-[hubBreath_4s_ease-in-out_infinite]" />
                  {/* Logo frame */}
                  <div className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] md:w-[108px] md:h-[108px] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] p-[2px]" style={{
                    background: "linear-gradient(135deg, rgba(204,255,0,0.25), rgba(0,255,170,0.12), rgba(204,255,0,0.05))",
                    boxShadow: "0 0 60px rgba(204,255,0,0.1), 0 0 120px rgba(204,255,0,0.03)"
                  }}>
                    <div className="w-full h-full rounded-[22px] sm:rounded-[26px] md:rounded-[30px] bg-gradient-to-b from-[#080812] to-[#030308] flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent" />
                      <img src="/logo.png" alt="Logo" className="w-[55%] h-[55%] object-contain relative z-10" style={{ filter: "drop-shadow(0 0 12px rgba(204,255,0,0.25))" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* ═══ CORNER DATA FRAGMENTS ═══ */}
              <div className="absolute inset-0 pointer-events-none z-[2]">
                <div className="absolute top-[10%] left-[6%] hidden sm:flex items-center gap-1.5">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#ccff00]/50 shadow-[0_0_6px_rgba(204,255,0,0.4)] animate-pulse" />
                  <span className="text-[8px] font-mono text-[#ccff00]/20 tracking-[0.18em]">SYS::ONLINE</span>
                </div>
                <div className="absolute top-[8%] right-[6%] hidden sm:block">
                  <span className="text-[8px] font-mono text-white/[0.06] tracking-[0.2em]">v3.2.1</span>
                </div>
                <div className="absolute bottom-[22%] left-[6%] hidden sm:flex items-center gap-1.5">
                  <div className="w-[5px] h-[5px] rounded-full bg-[#00ffaa]/50 shadow-[0_0_6px_rgba(0,255,170,0.4)] animate-pulse" style={{ animationDelay: "0.6s" }} />
                  <span className="text-[8px] font-mono text-[#00ffaa]/20 tracking-[0.18em]">MESH::OK</span>
                </div>
                <div className="absolute bottom-[20%] right-[6%] hidden sm:block">
                  <span className="text-[8px] font-mono text-white/[0.06] tracking-[0.2em]">NODE::ACTIVE</span>
                </div>
                {/* Floating particles */}
                <div className="absolute top-[28%] left-[28%] w-[3px] h-[3px] bg-[#ccff00]/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
                <div className="absolute top-[45%] right-[25%] w-[2px] h-[2px] bg-[#00ffaa]/25 rounded-full animate-ping" style={{ animationDuration: "4s", animationDelay: "1s" }} />
                <div className="absolute bottom-[38%] left-[40%] w-[2px] h-[2px] bg-white/15 rounded-full animate-ping" style={{ animationDuration: "3.5s", animationDelay: "2s" }} />
                <div className="absolute top-[60%] left-[18%] w-[1.5px] h-[1.5px] bg-[#ccff00]/15 rounded-full animate-ping" style={{ animationDuration: "5s", animationDelay: "0.5s" }} />
                <div className="absolute top-[15%] right-[35%] w-[2px] h-[2px] bg-[#00ffaa]/15 rounded-full animate-ping" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
              </div>

              {/* ═══ SCATTERED TECH SVGs ═══ */}
              <div className="absolute inset-0 pointer-events-none z-[1] opacity-40 group-hover:opacity-70 transition-opacity duration-1000">
                {/* Top-left: Small circuit */}
                <svg className="absolute top-[15%] left-[15%] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 60 60" fill="none">
                  <circle cx="10" cy="10" r="1.5" fill="#ccff00" opacity="0.4" />
                  <circle cx="50" cy="10" r="1.5" fill="#ccff00" opacity="0.3" />
                  <circle cx="30" cy="30" r="2" fill="#ccff00" opacity="0.5" />
                  <circle cx="10" cy="50" r="1.5" fill="#00ffaa" opacity="0.3" />
                  <line x1="11" y1="10" x2="29" y2="30" stroke="#ccff00" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="51" y1="10" x2="31" y2="30" stroke="#ccff00" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.25">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                  </line>
                  <line x1="11" y1="50" x2="29" y2="30" stroke="#00ffaa" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.25">
                    <animate attributeName="stroke-dashoffset" from="5" to="0" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Bottom-right: Small hexagon */}
                <svg className="absolute bottom-[15%] right-[12%] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" viewBox="0 0 60 60" fill="none">
                  <polygon points="30,5 55,18 55,42 30,55 5,42 5,18" stroke="#00ffaa" strokeWidth="0.4" fill="none" opacity="0.3" strokeDasharray="4 4">
                    <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="25s" repeatCount="indefinite" />
                  </polygon>
                  <circle cx="30" cy="30" r="3" fill="#00ffaa" opacity="0.2">
                    <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Top-right: Small code brackets */}
                <svg className="absolute top-[12%] right-[10%] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" viewBox="0 0 50 50" fill="none">
                  <path d="M18 12 L6 25 L18 38" stroke="#ccff00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
                  <path d="M32 12 L44 25 L32 38" stroke="#ccff00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
                  <line x1="27" y1="10" x2="23" y2="40" stroke="#00ffaa" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
                </svg>

                {/* Bottom-left: Small shield */}
                <svg className="absolute bottom-[12%] left-[10%] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14" viewBox="0 0 50 60" fill="none">
                  <path d="M25 5 L8 14 V30 C8 44 25 55 25 55 C25 55 42 44 42 30 V14 L25 5Z" stroke="#00ffaa" strokeWidth="0.5" fill="#00ffaa" fillOpacity="0.02" opacity="0.25" />
                  <path d="M17 28 L22 33 L33 22" stroke="#00ffaa" strokeWidth="0.8" strokeDasharray="20" strokeDashoffset="20" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="3s" begin="2s" repeatCount="indefinite" />
                  </path>
                </svg>

                {/* Mid-left: Small brain nodes */}
                <svg className="absolute top-[45%] left-[8%] w-8 h-8 sm:w-10 sm:h-10 hidden sm:block" viewBox="0 0 40 40" fill="none">
                  <circle cx="10" cy="15" r="2" fill="#ccff00" opacity="0.2"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" /></circle>
                  <circle cx="30" cy="15" r="2" fill="#ccff00" opacity="0.2"><animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                  <circle cx="20" cy="30" r="2" fill="#00ffaa" opacity="0.2"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                  <line x1="12" y1="15" x2="28" y2="15" stroke="#ccff00" strokeWidth="0.3" opacity="0.15" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" from="4" to="0" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="10" y1="17" x2="18" y2="28" stroke="#00ffaa" strokeWidth="0.3" opacity="0.12" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" from="4" to="0" dur="1s" begin="0.3s" repeatCount="indefinite" />
                  </line>
                  <line x1="30" y1="17" x2="22" y2="28" stroke="#00ffaa" strokeWidth="0.3" opacity="0.12" strokeDasharray="2 2">
                    <animate attributeName="stroke-dashoffset" from="4" to="0" dur="1s" begin="0.6s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Mid-right: Small globe */}
                <svg className="absolute top-[40%] right-[8%] w-8 h-8 sm:w-10 sm:h-10 hidden sm:block" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="14" stroke="#ccff00" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.2">
                    <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="15s" repeatCount="indefinite" />
                  </circle>
                  <ellipse cx="20" cy="20" rx="6" ry="14" stroke="#ccff00" strokeWidth="0.3" opacity="0.15" />
                  <line x1="6" y1="20" x2="34" y2="20" stroke="#ccff00" strokeWidth="0.25" opacity="0.12" />
                  <circle cx="20" cy="20" r="1.5" fill="#ccff00" opacity="0.3">
                    <animate attributeName="r" values="1;2.5;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>

                {/* Top-center: Small flow chart */}
                <svg className="absolute top-[6%] left-[38%] w-10 h-10 sm:w-12 sm:h-12 hidden md:block" viewBox="0 0 50 40" fill="none">
                  <rect x="2" y="2" width="12" height="8" rx="2" stroke="#00ffaa" strokeWidth="0.4" fill="#00ffaa" fillOpacity="0.03" opacity="0.25" />
                  <rect x="19" y="15" width="12" height="8" rx="2" stroke="#00ffaa" strokeWidth="0.4" fill="#00ffaa" fillOpacity="0.03" opacity="0.25" />
                  <rect x="36" y="28" width="12" height="8" rx="2" stroke="#ccff00" strokeWidth="0.4" fill="#ccff00" fillOpacity="0.03" opacity="0.25" />
                  <path d="M14 8 L19 17" stroke="#00ffaa" strokeWidth="0.3" strokeDasharray="1 2" opacity="0.2">
                    <animate attributeName="stroke-dashoffset" from="3" to="0" dur="1s" repeatCount="indefinite" />
                  </path>
                  <path d="M31 21 L36 30" stroke="#ccff00" strokeWidth="0.3" strokeDasharray="1 2" opacity="0.2">
                    <animate attributeName="stroke-dashoffset" from="3" to="0" dur="1s" begin="0.3s" repeatCount="indefinite" />
                  </path>
                </svg>

                {/* Bottom-center: Small layers */}
                <svg className="absolute bottom-[6%] left-[42%] w-10 h-8 sm:w-14 sm:h-10 hidden md:block" viewBox="0 0 60 40" fill="none">
                  <path d="M8 10 L30 2 L52 10 L30 18 Z" stroke="white" strokeWidth="0.4" fill="white" fillOpacity="0.01" opacity="0.15">
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M8 20 L30 28 L52 20" stroke="white" strokeWidth="0.3" opacity="0.08" strokeDasharray="2 3">
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  </path>
                  <path d="M8 30 L30 38 L52 30" stroke="white" strokeWidth="0.25" opacity="0.05" strokeDasharray="2 3">
                    <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="3s" begin="1s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

              {/* ═══ VIGNETTE OVERLAY ═══ */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,2,4,0.6)_80%)] pointer-events-none z-[3]" />

            </div>
          </div>

          {/* ━━ 5. AUTONOMOUS AGENTS ━━ */}
          <BentoBox className="col-span-2 md:col-span-2 md:row-span-2" accent="#00ffaa" tilt={4}>
            <SvgsAgents />
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 md:p-7">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#00ffaa]/[0.06] border border-[#00ffaa]/12 backdrop-blur-xl flex items-center justify-center shadow-[0_0_25px_rgba(0,255,170,0.06)]">
                  <SvgsIconBolt color="#00ffaa" />
                </div>
                <span className="text-[7px] font-bold tracking-[0.2em] text-[#00ffaa]/40 uppercase mt-2">24/7</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight mb-1.5">Autonomous Agents</h3>
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed">Self-governing AI solving complex operational tasks around the clock.</p>
              </div>
            </div>
          </BentoBox>

          {/* ━━ 6. SCRIPTS & CODE ━━ */}
          <BentoBox className="col-span-2 md:col-span-2 md:row-span-2" accent="#ffffff" tilt={4}>
            <SvgsCode />
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 md:p-7">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                  <SvgsIconTerminal color="rgba(255,255,255,0.6)" />
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight mb-1.5">Scripts & Code</h3>
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed">Optimized microservices and automated pipelines. Production-ready.</p>
              </div>
            </div>
          </BentoBox>

          {/* ━━ 7. WEB DEV ━━ */}
          <BentoBox accent="#ccff00">
            <SvgsGlobe />
            <CardContent title="Web Dev" desc="React & Next.js" />
          </BentoBox>

          {/* ━━ 8. AUTOMATIONS ━━ */}
          <BentoBox accent="#00ffaa">
            <SvgsFlow />
            <CardContent title="Automations" desc="Multi-platform flows" />
          </BentoBox>

          {/* ━━ 9. CUSTOM SOLUTIONS ━━ */}
          <BentoBox accent="#00ffaa">
            <SvgsShield />
            <CardContent title="Custom Solutions" desc="Enterprise-grade" />
          </BentoBox>

          {/* ━━ 10. INTELLIGENCE ━━ */}
          <BentoBox accent="#ccff00">
            <SvgsBrain />
            <CardContent title="Intelligence" desc="Multi-model reasoning" />
          </BentoBox>

          {/* ━━ 11. FULL STACK ━━ */}
          <BentoBox className="col-span-2" accent="#ffffff">
            <SvgsStack />
            <div className="relative z-10 w-full h-full flex items-center justify-between p-5 md:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center shrink-0">
                  <SvgsIconLayers color="rgba(255,255,255,0.5)" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Full Stack Architecture</h3>
                  <p className="text-[9px] sm:text-[10px] text-zinc-600 mt-0.5">Frontend to infrastructure, completely covered.</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-lg border border-white/[0.05] bg-white/[0.02] flex items-center justify-center group-hover:border-white/[0.1] group-hover:bg-white/[0.04] transition-all duration-500 shrink-0">
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white/50 transition-colors" />
              </div>
            </div>
          </BentoBox>

        </div>
      </div>

      <style jsx>{`
        @property --a { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes borderSpin { to { --a: 360deg; } }
        @keyframes scan { 0% { background-position: 0% 0%; } 100% { background-position: 0% 200%; } }
        @keyframes logoFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes hubSpin { to { transform: rotate(360deg); } }
        @keyframes hubSpinR { to { transform: rotate(-360deg); } }
        @keyframes hubBreath { 0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.06); } }
        @keyframes pf { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 50% { transform: translateY(-25px) translateX(8px); opacity: 0.7; } }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════
   BENTO BOX — UNIVERSAL CARD
   ═══════════════════════════════════════════ */
function BentoBox({ children, className = "", accent = "#ffffff", tilt = 0 }: {
  children: React.ReactNode; className?: string; accent?: string; tilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tf, setTf] = useState("");
  const [gp, setGp] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    if (tilt > 0) {
      const x = ((e.clientX - r.left) / r.width - 0.5) * tilt;
      const y = -((e.clientY - r.top) / r.height - 0.5) * tilt;
      setTf(`perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.008,1.008,1.008)`);
    }
    setGp({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  const onLeave = () => { setTf(""); setGp({ x: 50, y: 50 }); };

  return (
    <div ref={ref} className={`relative group rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.04] bg-[#050509]/90 backdrop-blur-xl cursor-pointer ${className}`}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        transform: tf || undefined,
        transition: tf ? "transform 0.35s cubic-bezier(0.03,0.98,0.52,0.99), border-color 0.6s, box-shadow 0.6s" : "border-color 0.6s, box-shadow 0.6s"
      }}>
      {/* Mouse glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[1]"
        style={{ background: `radial-gradient(150px circle at ${gp.x}% ${gp.y}%, ${accent}06, transparent 60%)` }} />
      {/* Static corner glow */}
      <div className="absolute inset-0 pointer-events-none z-[0]"
        style={{ background: `radial-gradient(ellipse at 90% 10%, ${accent}04, transparent 50%), radial-gradient(ellipse at 10% 90%, ${accent}02, transparent 50%)` }} />
      {/* Hover border */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-600"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}08, 0 0 30px ${accent}04` }} />
      {children}
    </div>
  );
}

function CardContent({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-end p-3.5 sm:p-4 md:p-5">
      <div>
        <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white tracking-tight mb-0.5">{title}</h3>
        <p className="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   ALL SVGs — HIGH QUALITY
   ═══════════════════════════════════════════ */

function SvgsAiModules() {
  const n = [{ x: 30, y: 40 }, { x: 30, y: 105 }, { x: 30, y: 170 }, { x: 100, y: 60 }, { x: 100, y: 125 }, { x: 100, y: 180 }, { x: 170, y: 80 }, { x: 170, y: 145 }];
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700" viewBox="0 0 200 210" fill="none">
      {[0, 1, 2].flatMap(i => [3, 4, 5].map(j => (
        <line key={`a${i}${j}`} x1={n[i].x} y1={n[i].y} x2={n[j].x} y2={n[j].y} stroke="#ccff00" strokeWidth="0.4" strokeDasharray="35 35">
          <animate attributeName="stroke-dashoffset" from="70" to="0" dur={`${1.8 + i * 0.25}s`} repeatCount="indefinite" />
        </line>
      )))}
      {[3, 4, 5].flatMap(i => [6, 7].map(j => (
        <line key={`b${i}${j}`} x1={n[i].x} y1={n[i].y} x2={n[j].x} y2={n[j].y} stroke="#ccff00" strokeWidth="0.4" strokeDasharray="25 25">
          <animate attributeName="stroke-dashoffset" from="50" to="0" dur={`${1.6 + i * 0.2}s`} repeatCount="indefinite" />
        </line>
      )))}
      {n.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="5" fill="#ccff00" opacity="0">
            <animate attributeName="r" values="1.5;6;1.5" dur={`${2 + i * 0.15}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur={`${2 + i * 0.15}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={p.x} cy={p.y} r="1.5" fill="#ccff00" opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

function SvgsChat() {
  return (
    <svg className="absolute bottom-2 right-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 60 60" fill="none">
      <rect x="2" y="5" width="25" height="16" rx="4" stroke="#00ffaa" strokeWidth="0.8" fill="#00ffaa" fillOpacity="0.03"><animate attributeName="y" values="5;3;5" dur="3s" repeatCount="indefinite" /></rect>
      <path d="M10 21l-3 4h6" stroke="#00ffaa" strokeWidth="0.8" />
      <rect x="30" y="30" width="28" height="18" rx="4" stroke="#00ffaa" strokeWidth="0.8" fill="#00ffaa" fillOpacity="0.03"><animate attributeName="y" values="30;28;30" dur="3s" begin="0.5s" repeatCount="indefinite" /></rect>
      <path d="M50 48l3-4h-6" stroke="#00ffaa" strokeWidth="0.8" />
      <rect x="8" y="11" width="12" height="1.2" rx="0.6" fill="#00ffaa" opacity="0.3"><animate attributeName="width" values="4;12;4" dur="2s" repeatCount="indefinite" /></rect>
      <rect x="36" y="37" width="16" height="1.2" rx="0.6" fill="#00ffaa" opacity="0.3"><animate attributeName="width" values="6;16;6" dur="2.5s" begin="0.5s" repeatCount="indefinite" /></rect>
    </svg>
  );
}

function SvgsApi() {
  return (
    <svg className="absolute bottom-2 right-2 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 50 50" fill="none">
      <circle cx="10" cy="10" r="1.5" fill="#ccff00" opacity="0.5" /><circle cx="40" cy="10" r="1.5" fill="#ccff00" opacity="0.4" />
      <circle cx="25" cy="25" r="2" fill="#ccff00" opacity="0.6" /><circle cx="10" cy="40" r="1.5" fill="#ccff00" opacity="0.3" /><circle cx="40" cy="40" r="1.5" fill="#ccff00" opacity="0.4" />
      <line x1="11" y1="10" x2="23" y2="25" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" repeatCount="indefinite" /></line>
      <line x1="39" y1="10" x2="27" y2="25" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" begin="0.2s" repeatCount="indefinite" /></line>
      <line x1="11" y1="40" x2="23" y2="25" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" begin="0.4s" repeatCount="indefinite" /></line>
      <line x1="39" y1="40" x2="27" y2="25" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" begin="0.6s" repeatCount="indefinite" /></line>
    </svg>
  );
}

function SvgsAgents() {
  return (
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-[0.1] group-hover:opacity-[0.22] transition-opacity duration-700" viewBox="0 0 200 200" fill="none">
      <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="#00ffaa" strokeWidth="0.35" fill="none" strokeDasharray="8 8">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="30s" repeatCount="indefinite" />
      </polygon>
      <circle cx="100" cy="100" r="55" stroke="#00ffaa" strokeWidth="0.35" strokeDasharray="6 10">
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="10s" repeatCount="indefinite" />
      </circle>
      <path d="M 68 82 L 42 100 L 68 118" stroke="#00ffaa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 132 82 L 158 100 L 132 118" stroke="#00ffaa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 112 68 L 88 132" stroke="#00ffaa" strokeWidth="1.6" strokeLinecap="round" />
      {[{ y: 87, w: 22, d: 1.5 }, { y: 97, w: 30, d: 2 }, { y: 107, w: 18, d: 1.8 }, { y: 117, w: 25, d: 2.2 }].map((l, i) => (
        <rect key={i} x={80 - i * 2} y={l.y} width={l.w} height="1.8" rx="0.9" fill="#00ffaa" opacity="0">
          <animate attributeName="x" values={`${80 - i * 2};${105 + i}`} dur={`${l.d}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur={`${l.d}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <circle cx="100" cy="100" r="25" fill="#00ffaa" fillOpacity="0.015"><animate attributeName="r" values="20;32;20" dur="3s" repeatCount="indefinite" /></circle>
    </svg>
  );
}

function SvgsCode() {
  return (
    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700" viewBox="0 0 200 130" fill="none">
      <rect x="4" y="4" width="192" height="122" rx="8" stroke="white" strokeWidth="0.35" />
      <circle cx="17" cy="17" r="2.5" fill="#ff5f57" opacity="0.25" /><circle cx="27" cy="17" r="2.5" fill="#ffbd2e" opacity="0.25" /><circle cx="37" cy="17" r="2.5" fill="#28c840" opacity="0.25" />
      {[33, 45, 57, 69, 81, 93, 105].map((y, i) => (
        <rect key={i} x="15" y={y} width={i % 2 === 0 ? 95 : 65} height="1.8" rx="0.9" fill={i % 3 === 0 ? "#ccff00" : "white"} opacity="0.12">
          <animate attributeName="width" values={`${25 + i * 4};${i % 2 === 0 ? 95 : 65};${25 + i * 4}`} dur={`${1.8 + i * 0.35}s`} repeatCount="indefinite" />
        </rect>
      ))}
      <rect x="15" y="114" width="5" height="1.8" rx="0.9" fill="white" opacity="0.4"><animate attributeName="opacity" values="0.4;0;0.4" dur="1s" repeatCount="indefinite" /></rect>
    </svg>
  );
}

function SvgsGlobe() {
  return (
    <svg className="absolute bottom-1 right-1 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="32" stroke="#ccff00" strokeWidth="0.5" strokeDasharray="3 4">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="50" cy="50" rx="13" ry="32" stroke="#ccff00" strokeWidth="0.4" opacity="0.4" />
      <line x1="18" y1="50" x2="82" y2="50" stroke="#ccff00" strokeWidth="0.3" opacity="0.3" />
      <line x1="50" y1="18" x2="50" y2="82" stroke="#ccff00" strokeWidth="0.2" opacity="0.15" />
      <circle cx="50" cy="50" r="2" fill="#ccff00" opacity="0.5"><animate attributeName="r" values="1.5;3;1.5" dur="2s" repeatCount="indefinite" /></circle>
    </svg>
  );
}

function SvgsFlow() {
  return (
    <svg className="absolute bottom-1 right-1 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 80 80" fill="none">
      <rect x="4" y="4" width="14" height="10" rx="2" stroke="#00ffaa" strokeWidth="0.5" fill="#00ffaa" fillOpacity="0.02" />
      <rect x="33" y="35" width="14" height="10" rx="2" stroke="#00ffaa" strokeWidth="0.5" fill="#00ffaa" fillOpacity="0.02" />
      <rect x="62" y="66" width="14" height="10" rx="2" stroke="#00ffaa" strokeWidth="0.5" fill="#00ffaa" fillOpacity="0.02" />
      <path d="M18 10 L33 40" stroke="#00ffaa" strokeWidth="0.4" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" repeatCount="indefinite" /></path>
      <path d="M47 40 L62 70" stroke="#00ffaa" strokeWidth="0.4" strokeDasharray="2 3"><animate attributeName="stroke-dashoffset" from="5" to="0" dur="0.8s" begin="0.3s" repeatCount="indefinite" /></path>
    </svg>
  );
}

function SvgsShield() {
  return (
    <svg className="absolute bottom-1 right-1 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 80 90" fill="none">
      <path d="M40 8 L14 20 V42 C14 62 40 80 40 80 C40 80 66 62 66 42 V20 L40 8Z" stroke="#00ffaa" strokeWidth="0.6" fill="#00ffaa" fillOpacity="0.02">
        <animate attributeName="fill-opacity" values="0.02;0.06;0.02" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M28 42 L36 50 L52 34" stroke="#00ffaa" strokeWidth="1" strokeDasharray="25" strokeDashoffset="25" opacity="0.4">
        <animate attributeName="stroke-dashoffset" from="25" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function SvgsBrain() {
  return (
    <svg className="absolute bottom-1 right-1 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity" viewBox="0 0 80 80" fill="none">
      <path d="M40 12 C26 12 16 22 16 34 C16 40 19 45 23 48 C20 51 18 55 20 60 C23 65 29 67 34 65 C36 68 41 70 44 68 C49 70 54 67 56 63 C60 60 63 54 61 48 C65 44 66 38 63 33 C66 27 63 20 56 16 C51 12 45 12 40 12Z" stroke="#ccff00" strokeWidth="0.6" fill="#ccff00" fillOpacity="0.015">
        <animate attributeName="fill-opacity" values="0.015;0.04;0.015" dur="4s" repeatCount="indefinite" />
      </path>
      <line x1="40" y1="15" x2="40" y2="68" stroke="#ccff00" strokeWidth="0.25" opacity="0.2" />
      <circle cx="35" cy="30" r="1.2" fill="#ccff00" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" /></circle>
      <circle cx="48" cy="42" r="1.2" fill="#ccff00" opacity="0.4"><animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
      <circle cx="38" cy="55" r="1.2" fill="#ccff00" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
    </svg>
  );
}

function SvgsStack() {
  return (
    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 opacity-[0.06] group-hover:opacity-[0.15] transition-opacity" viewBox="0 0 80 70" fill="none">
      <path d="M10 18 L40 6 L70 18 L40 30 Z" stroke="white" strokeWidth="0.6" fill="white" fillOpacity="0.015"><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" repeatCount="indefinite" /></path>
      <path d="M10 32 L40 44 L70 32" stroke="white" strokeWidth="0.4" opacity="0.25" strokeDasharray="3 4"><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" begin="0.5s" repeatCount="indefinite" /></path>
      <path d="M10 46 L40 58 L70 46" stroke="white" strokeWidth="0.3" opacity="0.12" strokeDasharray="3 4"><animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="3s" begin="1s" repeatCount="indefinite" /></path>
    </svg>
  );
}

/* ═══ ICON SVGs (inside icon boxes) ═══ */
function SvgsIconCpu({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}
function SvgsIconBolt({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />
    </svg>
  );
}
function SvgsIconTerminal({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
function SvgsIconLayers({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      <path d="M22 17.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    </svg>
  );
}