"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  Zap,
  Code2,
  Terminal,
  ArrowUpRight,
  ShieldCheck,
  Hexagon,
  CircuitBoard,
  Layers,
  Cpu,
} from "lucide-react";

const cards = [
  {
    title: "API Keys on Rent",
    subtitle: "Pay Per Month · No Lock-in",
    desc: "Rent verified API endpoints, AI keys & data pipelines by the hour or month.",
    tags: ["AI Endpoints", "Proxies"],
    meta: { icon: <Clock className="w-3 h-3" />, text: "Instant Active" },
    accent: "#ccff00",
    rgb: "204,255,0",
    icon: <CircuitBoard className="w-5 h-5" />,
  },
  {
    title: "Autonomous AI Agents",
    subtitle: "Automation · 24/7",
    desc: "Self-running agents & complex workflows operating around the clock.",
    tags: ["Agents", "Pipelines"],
    meta: { icon: <Zap className="w-3 h-3" />, text: "Zero Downtime" },
    accent: "#00ffaa",
    rgb: "0,255,170",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Custom Dev Services",
    subtitle: "Built to Your Specs",
    desc: "Top developers for SaaS builds, scraping & tailored solutions.",
    tags: ["SaaS Build", "Scraping"],
    meta: { icon: <Code2 className="w-3 h-3" />, text: "Full Ownership" },
    accent: "#ff6b00",
    rgb: "255,107,0",
    icon: <Layers className="w-5 h-5" />,
  },
];

/* ─── SVG 1: Hex Mesh ─── */
function HexMeshSVG({ c }: { c: string }) {
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
    <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
      <defs>
        <filter id="hg"><feGaussianBlur stdDeviation="3" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {cells.map((h, i) => (
        <g key={i}>
          <polygon points={hex(h.cx, h.cy, h.r)} stroke={c} strokeWidth="0.7" fill="none" opacity={0.12 + (i % 3) * 0.06}>
            <animate attributeName="opacity" values={`${0.12 + (i % 3) * 0.06};${0.25 + (i % 3) * 0.08};${0.12 + (i % 3) * 0.06}`} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          </polygon>
          <circle cx={h.cx} cy={h.cy} r="2" fill={c} opacity="0.5" filter="url(#hg)">
            <animate attributeName="r" values="2;3.5;2" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
      {/* Traveling dot */}
      <circle r="2.5" fill={c} filter="url(#hg)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M100,60 L128,98 L155,136 L188,98 L155,60 L128,98 L100,136 L68,98 L100,60" />
        <animate attributeName="opacity" values="0;0.9;0.9;0" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ─── SVG 2: Orbital Rings ─── */
function OrbitalSVG({ c }: { c: string }) {
  return (
    <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
      <defs>
        <filter id="og"><feGaussianBlur stdDeviation="2.5" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      {/* Rings */}
      <ellipse cx="128" cy="98" rx="90" ry="35" stroke={c} strokeWidth="0.6" opacity="0.15" transform="rotate(-20 128 98)" strokeDasharray="3 5">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="128" cy="98" rx="65" ry="25" stroke={c} strokeWidth="0.8" opacity="0.25" transform="rotate(15 128 98)" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="2.5s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="128" cy="98" rx="40" ry="15" stroke={c} strokeWidth="1" opacity="0.35" transform="rotate(-5 128 98)" strokeDasharray="2 6">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur="2s" repeatCount="indefinite" />
      </ellipse>
      {/* Core */}
      <circle cx="128" cy="98" r="8" fill={c} opacity="0.6" filter="url(#og)">
        <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="128" cy="98" r="3" fill="#fff" opacity="0.8" />
      {/* Pulse rings */}
      <circle cx="128" cy="98" r="8" stroke={c} strokeWidth="0.5" fill="none">
        <animate attributeName="r" values="8;50;8" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="128" cy="98" r="8" stroke={c} strokeWidth="0.5" fill="none">
        <animate attributeName="r" values="8;50;8" dur="3.5s" begin="1.75s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3.5s" begin="1.75s" repeatCount="indefinite" />
      </circle>
      {/* Orbiting dots */}
      <circle r="3" fill={c} filter="url(#og)">
        <animateMotion dur="3s" repeatCount="indefinite" path="M128,63 A65,25 15 1,1 127.9,63" />
        <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle r="2.5" fill={c} filter="url(#og)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M128,83 A40,15 -5 1,0 127.9,83" />
        <animate attributeName="opacity" values="0;0.7;0.7;0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle r="2" fill={c} filter="url(#og)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M128,133 A65,25 -20 1,1 127.9,133" />
        <animate attributeName="opacity" values="0;0.6;0.6;0" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

/* ─── SVG 3: Data Grid ─── */
function DataGridSVG({ c }: { c: string }) {
  const cols = 8, rows = 6;
  const cells: { x: number; y: number; delay: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let cl = 0; cl < cols; cl++) {
      cells.push({ x: 28 + cl * 26, y: 22 + r * 26, delay: (r * cols + cl) * 0.08 });
    }
  }
  return (
    <svg viewBox="0 0 256 196" className="w-full h-full" fill="none">
      {/* Grid lines */}
      {Array.from({ length: rows }, (_, r) => (
        <line key={`rh${r}`} x1="28" y1={22 + r * 26} x2={28 + (cols - 1) * 26} y2={22 + r * 26} stroke={c} strokeWidth="0.3" opacity="0.08" />
      ))}
      {Array.from({ length: cols }, (_, cl) => (
        <line key={`cv${cl}`} x1={28 + cl * 26} y1="22" x2={28 + cl * 26} y2={22 + (rows - 1) * 26} stroke={c} strokeWidth="0.3" opacity="0.08" />
      ))}
      {/* Cells that light up */}
      {cells.map((cell, i) => {
        const active = (i + Math.floor(Date.now() / 1000)) % 7 === 0;
        return (
          <rect key={i} x={cell.x - 4} y={cell.y - 4} width="8" height="8" rx="2" fill={c} opacity="0.04">
            <animate
              attributeName="opacity"
              values="0.02;0.25;0.02"
              dur={`${2.5 + (i % 5) * 0.6}s`}
              begin={`${cell.delay}s`}
              repeatCount="indefinite"
            />
          </rect>
        );
      })}
      {/* Scanning line */}
      <rect x="28" y="22" width={(cols - 1) * 26} height="2" rx="1" fill={c} opacity="0.15">
        <animate attributeName="y" values="22;150;22" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.2;0.2;0" dur="4s" repeatCount="indefinite" />
      </rect>
      {/* Highlighted cell cluster */}
      <rect x="80" y="48" width="34" height="34" rx="4" stroke={c} strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="132" y="74" width="34" height="34" rx="4" stroke={c} strokeWidth="0.8" opacity="0.25" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" values="0;-12" dur="2.5s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

/* ─── Single Card ─── */
function Card({ card, i, vis }: { card: typeof cards[0]; i: number; vis: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden transition-all duration-600"
      style={{
        transitionDelay: `${i * 100}ms`,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(${card.rgb},${hover ? 0.5 : 0.15}), transparent)`,
        }}
      />

      {/* Glow background on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          opacity: hover ? 1 : 0,
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(${card.rgb},0.06), transparent)`,
        }}
      />

      {/* SVG Visual - compact */}
      <div className="relative h-[140px] sm:h-[130px] overflow-hidden">
        <div
          className="absolute inset-0 p-3 transition-opacity duration-700"
          style={{ opacity: hover ? 0.6 : 0.25 }}
        >
          {i === 0 && <HexMeshSVG c={card.accent} />}
          {i === 1 && <OrbitalSVG c={card.accent} />}
          {i === 2 && <DataGridSVG c={card.accent} />}
        </div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500"
            style={{
              background: `rgba(${card.rgb},${hover ? 0.12 : 0.06})`,
              border: `1px solid rgba(${card.rgb},${hover ? 0.25 : 0.1})`,
              color: card.accent,
              boxShadow: hover ? `0 0 30px rgba(${card.rgb},0.12)` : "none",
              transform: hover ? "scale(1.08)" : "scale(1)",
            }}
          >
            {card.icon}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#08080a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-5 pb-5 pt-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug">
            {card.title}
          </h3>
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all duration-400"
            style={{
              opacity: hover ? 1 : 0,
              transform: hover ? "translate(0,0)" : "translate(4px,-4px)",
              background: `rgba(${card.rgb},0.08)`,
              border: `1px solid rgba(${card.rgb},0.15)`,
              color: card.accent,
            }}
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <p
          className="text-[9px] font-semibold tracking-[0.18em] uppercase mb-2.5 transition-colors duration-500"
          style={{ color: card.accent, opacity: hover ? 0.6 : 0.35 }}
        >
          {card.subtitle}
        </p>

        <p className="text-[12.5px] text-zinc-500 leading-[1.65] mb-4">
          {card.desc}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-white/[0.04]">
          <div className="flex gap-1.5">
            {card.tags.map((tag, ti) => (
              <span
                key={ti}
                className="text-[9px] font-medium text-zinc-600 px-2 py-[3px] rounded-md bg-white/[0.02] border border-white/[0.04] transition-all duration-500"
                style={{
                  color: hover ? "rgba(255,255,255,0.45)" : undefined,
                  borderColor: hover ? "rgba(255,255,255,0.08)" : undefined,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className="flex items-center gap-1 text-[9px] font-semibold px-2 py-[3px] rounded-md border transition-all duration-500"
            style={{
              color: card.accent,
              borderColor: `rgba(${card.rgb},${hover ? 0.2 : 0.08})`,
              background: `rgba(${card.rgb},${hover ? 0.06 : 0.02})`,
            }}
          >
            {card.meta.icon}
            <span>{card.meta.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#08080a] text-zinc-400 py-10 sm:py-16 font-sans selection:bg-[#ccff00]/20"
    >
      {/* Ambient glows - very subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none bg-[radial-gradient(ellipse,rgba(204,255,0,0.035),transparent_70%)]" />
      <div className="absolute bottom-0 left-[15%] w-[300px] h-[300px] pointer-events-none bg-[radial-gradient(circle,rgba(0,255,170,0.015),transparent_70%)]" />
      <div className="absolute bottom-0 right-[15%] w-[300px] h-[300px] pointer-events-none bg-[radial-gradient(circle,rgba(255,107,0,0.015),transparent_70%)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 sm:mb-16 transition-all duration-800 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-zinc-500 text-[9px] font-mono tracking-[0.25em] uppercase mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ccff00]" />
            </span>
            CORE_INFRASTRUCTURE
          </div>

          <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black text-white tracking-[-0.03em] mb-4 leading-[1.05]">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#b8f000] to-[#8ab800]">
              ScriptifyDevs
            </span>
            ?
          </h2>

          <p className="text-[13px] text-zinc-600 max-w-sm mx-auto leading-[1.75]">
            Buy code. Rent APIs. Deploy AI agents. Infrastructure for developers who ship fast.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <Card key={i} card={card} i={i} vis={vis} />
          ))}
        </div>


      </div>
    </section>
  );
}