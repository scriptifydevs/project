"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  KeyRound,
  Bot,
  Wrench,
  Sparkles,
  Zap,
  Clock,
  Users,
  Lock,
  Workflow,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

const cards = [
  {
    number: "01",
    label: "RENT",
    icon: <KeyRound className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "API Keys on Rent",
    subtitle: "Pay Per Month · No Lock-in",
    desc: "Skip heavy subscriptions. Rent verified API endpoints, AI model keys & data pipelines by the hour, day, or month.",
    tags: ["AI Endpoints", "Data", "Proxies"],
    stats: [
      { icon: <Clock className="w-3.5 h-3.5" />, label: "Hourly to Monthly" },
      { icon: <RefreshCw className="w-3.5 h-3.5" />, label: "Instant Activation" },
    ],
    features: [
      "Unlimited APIs",
      "No Rate Limits",
      "Multi Provider",
      "Dedicated Endpoints",
    ],
  },
  {
    number: "02",
    label: "AI",
    icon: <Bot className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Autonomous AI Agents",
    subtitle: "Intelligent Automation · 24/7",
    desc: "Self-running intelligent agents & complex automation workflows that operate around the clock without human intervention.",
    tags: ["Agents", "Workflows", "Pipelines"],
    stats: [
      { icon: <Zap className="w-3.5 h-3.5" />, label: "Zero Downtime" },
      { icon: <Workflow className="w-3.5 h-3.5" />, label: "Multi-Step Logic" },
    ],
    features: [
      "Self-healing Logic",
      "API Chaining",
      "Error Recovery",
      "Real-time Logging",
    ],
  },
  {
    number: "03",
    label: "HIRE",
    icon: <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Custom Dev Services",
    subtitle: "Built Exactly to Your Specs",
    desc: "Top-tier developers for custom integrations, SaaS builds, web scraping setups & tailored software solutions.",
    tags: ["Custom Dev", "SaaS", "Consulting"],
    stats: [
      { icon: <Users className="w-3.5 h-3.5" />, label: "Professional Devs" },
      { icon: <Lock className="w-3.5 h-3.5" />, label: "Verified & Vetted" },
    ],
    features: [
      "Requirements Analysis",
      "Pro Developers",
      "Code Ownership",
      "Post-Launch Support",
    ],
  },
];

export default function WhyChooseSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [cv, setCv] = useState([false, false, false]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (vis) {
      cards.forEach((_, i) => {
        setTimeout(() => {
          setCv((p) => {
            const n = [...p];
            n[i] = true;
            return n;
          });
        }, 150 + i * 150);
      });
    }
  }, [vis]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[#0a0a0a] text-zinc-400 py-24"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(204,255,0,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(204,255,0,0.02)_0%,transparent_65%)] animate-pulse mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(96,165,250,0.015)_0%,transparent_65%)] animate-pulse mix-blend-screen delay-1000" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[linear-gradient(rgba(204,255,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.5)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_10%,transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out transform ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white tracking-tight font-space">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ccff00] to-[#88b300]">
              ScriptifyDevs
            </span>
            ?
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Buy code. Rent APIs. Deploy AI agents. All under one roof — built
            for developers who ship fast.
          </p>


        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative group bg-[#111] border border-[#ccff00]/5 rounded-[24px] overflow-hidden transition-all duration-700 ease-out transform
                ${cv[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                hover:-translate-y-2 hover:border-[#ccff00]/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_40px_rgba(204,255,0,0.05)]
                ${i === 1 ? "border-[#ccff00]/10" : ""}
              `}
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(204,255,0,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#ccff00]/20 rounded-tl-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Large Background Number */}
              <div className="absolute -top-4 -right-2 text-8xl font-black text-[#ccff00]/[0.02] group-hover:text-[#ccff00]/[0.05] transition-colors duration-500 pointer-events-none select-none font-space">
                {card.number}
              </div>

              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                <div className="text-[10px] font-bold tracking-[0.2em] text-[#ccff00]/60 mb-8 group-hover:text-[#ccff00] transition-colors">
                  {card.number} · {card.label}
                </div>

                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#ccff00]/[0.03] border border-[#ccff00]/10 text-[#ccff00] group-hover:bg-[#ccff00]/10 group-hover:border-[#ccff00]/30 group-hover:scale-110 transition-all duration-500 shrink-0 shadow-lg group-hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]">
                    {card.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-[#ccff00] transition-colors font-space">
                      {card.title}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#ccff00]/60 group-hover:text-[#ccff00]/90 transition-colors">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
                  {card.desc}
                </p>

                {/* Stats */}
                <div className="flex gap-3 mb-6">
                  {card.stats.map((s, si) => (
                    <div
                      key={si}
                      className="flex-1 flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-[#ccff00]/[0.02] border border-[#ccff00]/[0.04] group-hover:bg-[#ccff00]/[0.05] group-hover:border-[#ccff00]/10 transition-colors"
                    >
                      <span className="text-[#ccff00]/70 group-hover:text-[#ccff00] transition-colors shrink-0">
                        {s.icon}
                      </span>
                      <span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {card.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:bg-[#ccff00]/[0.04] group-hover:border-[#ccff00]/10 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]/40 group-hover:bg-[#ccff00] group-hover:shadow-[0_0_8px_rgba(204,255,0,0.8)] transition-all shrink-0" />
                      <span className="text-[11px] font-medium text-zinc-400 truncate group-hover:text-zinc-200 transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 group-hover:via-[#ccff00]/20 to-transparent transition-colors mb-6" />

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="flex gap-2 flex-wrap min-w-0">
                    {card.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-zinc-500 group-hover:bg-[#ccff00]/[0.05] group-hover:border-[#ccff00]/10 group-hover:text-[#ccff00]/80 transition-colors whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-zinc-500 group-hover:bg-[#ccff00]/10 group-hover:border-[#ccff00]/30 group-hover:text-[#ccff00] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.15)] transition-all shrink-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      Go
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}