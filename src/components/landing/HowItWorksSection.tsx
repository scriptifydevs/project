"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  Zap,
  Code2,
  CircuitBoard,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";

/* ─── SVG Visuals Adapted to Neon Dark Theme ─── */
function HexMeshSVG() {
  const c = "#ccff00";
  const hex = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(" ");
    return pts;
  };
  const cells = [
    { cx: 100, cy: 60, r: 32 }, { cx: 155, cy: 60, r: 32 },
    { cx: 68, cy: 98, r: 32 }, { cx: 128, cy: 98, r: 32 }, { cx: 188, cy: 98, r: 32 },
    { cx: 100, cy: 136, r: 32 }, { cx: 155, cy: 136, r: 32 },
  ];
  return (
    <div className="absolute right-[-40px] top-[-20px] w-64 h-64 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
      <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
        <defs>
          <filter id="hg"><feGaussianBlur stdDeviation="3" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        {cells.map((h, i) => (
          <g key={i}>
            <polygon points={hex(h.cx, h.cy, h.r)} stroke={c} strokeWidth="0.7" fill="none" opacity={0.12 + (i % 3) * 0.06}>
              <animate attributeName="opacity" values={`${0.12 + (i % 3) * 0.06};${0.3 + (i % 3) * 0.08};${0.12 + (i % 3) * 0.06}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
            </polygon>
            <circle cx={h.cx} cy={h.cy} r="2" fill={c} opacity="0.5" filter="url(#hg)">
              <animate attributeName="r" values="2;4;2" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {/* Traveling dot */}
        <circle r="3" fill={c} filter="url(#hg)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M100,60 L128,98 L155,136 L188,98 L155,60 L128,98 L100,136 L68,98 L100,60" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function OrbitalSVG() {
  const c = "#ccff00";
  return (
    <div className="absolute right-[-20px] bottom-[-20px] w-64 h-64 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
      <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
        <defs>
          <filter id="og"><feGaussianBlur stdDeviation="2.5" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <ellipse cx="128" cy="98" rx="90" ry="35" stroke={c} strokeWidth="0.6" opacity="0.15" transform="rotate(-20 128 98)" strokeDasharray="3 5">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="128" cy="98" rx="65" ry="25" stroke={c} strokeWidth="0.8" opacity="0.25" transform="rotate(15 128 98)" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="128" cy="98" rx="40" ry="15" stroke={c} strokeWidth="1" opacity="0.35" transform="rotate(-5 128 98)" strokeDasharray="2 6">
          <animate attributeName="stroke-dashoffset" values="0;-16" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="128" cy="98" r="8" fill={c} opacity="0.6" filter="url(#og)">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="128" cy="98" r="3" fill="#fff" opacity="0.8" />
        <circle cx="128" cy="98" r="8" stroke={c} strokeWidth="0.5" fill="none">
          <animate attributeName="r" values="8;50;8" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle r="3.5" fill={c} filter="url(#og)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M128,63 A65,25 15 1,1 127.9,63" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

function DataGridSVG() {
  const c = "#ccff00";
  const cols = 8, rows = 6;
  const cells: { x: number; y: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let cl = 0; cl < cols; cl++) {
      cells.push({ x: 28 + cl * 26, y: 22 + r * 26, delay: (r * cols + cl) * 0.08 });
    }
  }
  return (
    <div className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
      <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
        {Array.from({ length: rows }, (_, r) => (
          <line key={`rh${r}`} x1="28" y1={22 + r * 26} x2={28 + (cols - 1) * 26} y2={22 + r * 26} stroke={c} strokeWidth="0.3" opacity="0.1" />
        ))}
        {Array.from({ length: cols }, (_, cl) => (
          <line key={`cv${cl}`} x1={28 + cl * 26} y1="22" x2={28 + cl * 26} y2={22 + (rows - 1) * 26} stroke={c} strokeWidth="0.3" opacity="0.1" />
        ))}
        {cells.map((cell, i) => (
          <rect key={i} x={cell.x - 4} y={cell.y - 4} width="8" height="8" rx="2" fill={c} opacity="0.04">
            <animate
              attributeName="opacity"
              values="0.02;0.4;0.02"
              dur={`${2.5 + (i % 5) * 0.6}s`}
              begin={`${cell.delay}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
        <rect x="28" y="22" width={(cols - 1) * 26} height="2" rx="1" fill={c} opacity="0.25">
          <animate attributeName="y" values="22;150;22" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0.5;0" dur="4s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}

const cards = [
  {
    title: "API Keys on Rent",
    subtitle: "Pay Per Month · No Lock-in",
    desc: "Rent verified API endpoints, AI keys & data pipelines by the hour or month.",
    tags: ["AI Endpoints", "Proxies"],
    meta: { icon: <Clock className="w-3 h-3" />, text: "Instant Active" },
    icon: <CircuitBoard className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors" />,
    visual: <HexMeshSVG />
  },
  {
    title: "Autonomous AI Agents",
    subtitle: "Automation · 24/7",
    desc: "Self-running agents & complex workflows operating around the clock.",
    tags: ["Agents", "Pipelines"],
    meta: { icon: <Zap className="w-3 h-3" />, text: "Zero Downtime" },
    icon: <Cpu className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors" />,
    visual: <OrbitalSVG />
  },
  {
    title: "Custom Dev Services",
    subtitle: "Built to Your Specs",
    desc: "Top developers for SaaS builds, scraping & tailored solutions.",
    tags: ["SaaS Build", "Scraping"],
    meta: { icon: <Code2 className="w-3 h-3" />, text: "Full Ownership" },
    icon: <Layers className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#ccff00] transition-colors" />,
    visual: <DataGridSVG />
  },
];

export default function HowItWorksSection() {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] py-16 overflow-hidden font-sans selection:bg-[rgba(204,255,0,0.3)] selection:text-white"
    >
      {/* ════ MODERN BACKGROUND ════ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[rgba(204,255,0,0.015)] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[rgba(204,255,0,0.015)] rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ════ HEADER ════ */}
        <div className="flex flex-col items-center text-center mb-16" style={revealStyle(0)}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgba(204,255,0,0.1)] border border-[rgba(204,255,0,0.2)] mb-4">
            <Sparkles className="w-3 h-3 text-[#ccff00]" />
            <span className="text-[10px] font-semibold tracking-widest text-[#ccff00] uppercase">Core Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e4e4e7] mb-3 tracking-tight">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#b8f000] to-[#8ab800]">
              ScriptifyDevs
            </span>
            ?
          </h2>
          <p className="text-[#a1a1aa] text-sm md:text-base max-w-lg leading-relaxed">
            Buy code. Rent APIs. Deploy AI agents. Infrastructure for developers who ship fast.
          </p>
        </div>

        {/* ════ PROFESSIONAL GRID ════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111111] hover:bg-[#161616] transition-colors duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] min-h-[260px]"
              style={revealStyle(100 + (idx * 50))}
            >
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(204,255,0,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Inner ambient glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-[rgba(204,255,0,0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* SVG Background Layer */}
              {card.visual}

              {/* Content */}
              <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0f1115] border border-[rgba(255,255,255,0.06)] flex items-center justify-center group-hover:border-[rgba(204,255,0,0.3)] transition-all duration-300">
                    {card.icon}
                  </div>
                  <p className="text-[10px] font-semibold tracking-widest text-[#ccff00] uppercase opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {card.subtitle}
                  </p>
                </div>
                
                <div className="mt-auto flex flex-col flex-grow justify-end">
                  <h3 className="text-xl font-bold text-[#e4e4e7] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 max-w-[90%]">
                    {card.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.04] mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, ti) => (
                        <span key={ti} className="text-[10px] font-medium text-zinc-400 px-2.5 py-1 rounded-md bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] group-hover:border-[rgba(255,255,255,0.08)] group-hover:text-zinc-300 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#ccff00] px-2.5 py-1 rounded-md border border-[rgba(204,255,0,0.1)] bg-[rgba(204,255,0,0.03)] group-hover:bg-[rgba(204,255,0,0.08)] group-hover:border-[rgba(204,255,0,0.2)] transition-all duration-300">
                      {card.meta.icon}
                      <span>{card.meta.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}