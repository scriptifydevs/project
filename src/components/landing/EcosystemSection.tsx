"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Bot,
  Cpu,
  MessageSquare,
  Users,
  Terminal,
  Workflow,
  Plug,
  Globe,
  ShieldCheck,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";

var T = { bg: "#0a0a0a", neon: "#ccff00", white: "#ffffff", muted: "#71717a" };

function nc(hex: string, a: number) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

var row1 = [
  { icon: Bot, title: "Autonomous Agents", desc: "Self-running AI systems" },
  { icon: Cpu, title: "AI Modules", desc: "Plug-and-play logic" },
  { icon: MessageSquare, title: "Chatbots", desc: "Conversational AI" },
  { icon: Users, title: "AI Assistants", desc: "Virtual helpers" },
  { icon: Terminal, title: "Scripts & Code", desc: "Ready-to-deploy" },
];

var row2 = [
  { icon: Workflow, title: "Automations", desc: "System workflows" },
  { icon: Plug, title: "Unlimited APIs", desc: "Flat-rate pricing" },
  { icon: Globe, title: "Web Development", desc: "Custom SaaS & apps" },
];

var row3 = [
  { icon: ShieldCheck, title: "Custom Solutions", desc: "Built to your specs" },
  { icon: Send, title: "Telegram & WA Bots", desc: "Social messaging" },
];

var dLinks = [
  {
    from: [98, 298, 500, 702, 904],
    to: [280, 500, 720],
    map: [[0, 0], [1, 0], [2, 1], [3, 2], [4, 2]],
  },
  {
    from: [280, 500, 720],
    to: [386, 626],
    map: [[0, 0], [1, 0], [2, 1]],
  },
  {
    from: [386, 626],
    to: [500],
    map: [[0, 0], [1, 0]],
  },
];

export default function EcosystemSection() {
  var ref = useRef(null);
  var _v = useState(false);
  var vis = _v[0], setVis = _v[1];

  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(
      function (e) {
        if (e[0].isIntersecting) { setVis(true); obs.disconnect(); }
      },
      { threshold: 0.03 }
    );
    obs.observe(el);
    return function () { obs.disconnect(); };
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ backgroundColor: T.bg }}>
      {/* ── BG layers ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 55% at 50% 42%, " + nc(T.neon, 0.04) + " 0%, transparent 70%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.025,
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "34px 34px",
      }} />
      <div className={"absolute pointer-events-none oA " + (vis ? " oOn" : "")} />
      <div className={"absolute pointer-events-none oB " + (vis ? " oOn" : "")} />
      <div className={"absolute pointer-events-none oC " + (vis ? " oOn" : "")} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 md:pt-20 pb-14 sm:pb-24 md:pb-32">

        {/* ═══ HEADER ═══ */}
        <div className={"text-center mb-10 sm:mb-14 md:mb-16 eH " + (vis ? " eH-on" : "")}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5" style={{
            backgroundColor: nc(T.neon, 0.07), border: "1px solid " + nc(T.neon, 0.18),
          }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{
              backgroundColor: T.neon, boxShadow: "0 0 14px " + nc(T.neon, 0.9),
            }} />
            <span className="font-inter text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: T.neon }}>
              Ecosystem
            </span>
          </div>
          <h3 className="font-space text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: T.white, lineHeight: 1.08 }}>
            What We <span style={{ color: T.neon }}>Deliver</span>
          </h3>
          <p className="font-inter text-[11px] sm:text-sm md:text-[15px] max-w-lg mx-auto leading-relaxed" style={{ color: T.muted }}>
            Every piece connected, working together to power your business
          </p>
        </div>

        {/* ═══ MOBILE LAYOUT (vertical tree) ═══ */}
        <div className="lg:hidden">
          <MobTree show={vis} />
        </div>

        {/* ═══ DESKTOP LAYOUT (funnel) ═══ */}
        <div className="hidden lg:block">
          <DeskFunnel show={vis} />
        </div>
      </div>

      <style jsx>{`
        /* ── Header ── */
        .eH { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .eH-on { opacity: 1; transform: translateY(0); }

        /* ── Orbs ── */
        .oA,.oB,.oC { border-radius: 50%; filter: blur(110px); opacity: 0; transition: opacity 2.8s ease; }
        .oOn { opacity: 1; }
        .oA { width: 360px; height: 360px; top: 2%; left: -10%; background: ${nc(T.neon, 0.05)}; animation: d1 18s ease-in-out infinite; }
        .oB { width: 260px; height: 260px; top: 40%; right: -6%; background: ${nc(T.neon, 0.04)}; animation: d2 22s ease-in-out infinite; }
        .oC { width: 300px; height: 300px; bottom: 4%; left: 20%; background: ${nc(T.neon, 0.03)}; animation: d3 25s ease-in-out infinite; }
        @keyframes d1 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(45px,-35px)} 66%{transform:translate(-22px,25px)} }
        @keyframes d2 { 0%,100%{transform:translate(0,0)} 33%{transform:translate(-35px,30px)} 66%{transform:translate(28px,-22px)} }
        @keyframes d3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(38px,-35px)} }

        /* ══════════════════════════════════════
           MOBILE TREE STYLES
           ══════════════════════════════════════ */
        :global(.mt-wrap) {
          max-width: 420px;
          margin: 0 auto;
        }
        :global(.mt-row) {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        :global(.mt-row-on) {
          opacity: 1;
          transform: translateY(0);
        }
        :global(.mt-grid) {
          display: grid;
          gap: 8px;
        }
        :global(.mt-g5) {
          grid-template-columns: 1fr 1fr;
        }
        :global(.mt-g5 > :last-child) {
          grid-column: 1 / -1;
          max-width: 50%;
          justify-self: center;
        }
        :global(.mt-g3) {
          grid-template-columns: 1fr 1fr;
        }
        :global(.mt-g3 > :last-child) {
          grid-column: 1 / -1;
          max-width: 50%;
          justify-self: center;
        }
        :global(.mt-g2) {
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 480px) {
          :global(.mt-g5) { grid-template-columns: repeat(3, 1fr); }
          :global(.mt-g5 > :last-child) { grid-column: auto; max-width: none; justify-self: auto; }
          :global(.mt-g3) { grid-template-columns: repeat(3, 1fr); }
          :global(.mt-g3 > :last-child) { grid-column: auto; max-width: none; justify-self: auto; }
        }
        :global(.mt-hero-wrap) {
          max-width: 75%;
          margin: 0 auto;
        }
        @media (min-width: 480px) {
          :global(.mt-hero-wrap) { max-width: 60%; }
        }

        /* ── Mobile connector ── */
        :global(.mc) {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px 0;
          opacity: 0;
          transition: opacity 0.7s ease;
        }
        :global(.mc-on) { opacity: 1; }
        :global(.mc-line) {
          width: 1.5px;
          height: 16px;
          border-radius: 1px;
        }
        :global(.mc-lt) {
          background: linear-gradient(to bottom, ${nc(T.neon, 0.2)}, ${nc(T.neon, 0.06)});
        }
        :global(.mc-lb) {
          background: linear-gradient(to bottom, ${nc(T.neon, 0.06)}, ${nc(T.neon, 0.2)});
        }
        :global(.mc-node) {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: ${nc(T.neon, 0.3)};
          transform: rotate(45deg);
          margin: 3px 0;
          animation: mcPulse 2.5s ease-in-out infinite;
          box-shadow: 0 0 12px ${nc(T.neon, 0.2)}, 0 0 4px ${nc(T.neon, 0.4)};
        }
        @keyframes mcPulse {
          0%,100% { opacity: 0.4; transform: rotate(45deg) scale(1); }
          50% { opacity: 1; transform: rotate(45deg) scale(1.4); }
        }
        /* Side branches */
        :global(.mc-branches) {
          position: relative;
          width: 100%;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :global(.mc-br-line) {
          position: absolute;
          height: 1.5px;
          background: linear-gradient(to right, ${nc(T.neon, 0.06)}, ${nc(T.neon, 0.2)}, ${nc(T.neon, 0.06)});
          border-radius: 1px;
        }
        :global(.mc-br-dot) {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${nc(T.neon, 0.25)};
          animation: mcPulse 2.5s ease-in-out infinite;
          box-shadow: 0 0 8px ${nc(T.neon, 0.15)};
        }

        /* ══════════════════════════════════════
           DESKTOP FUNNEL STYLES
           ══════════════════════════════════════ */
        :global(.df-wrap) {
          max-width: 64rem;
          margin: 0 auto;
        }
        :global(.df-row) {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        :global(.df-row-on) { opacity: 1; transform: translateY(0); }
        :global(.df-r1) { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
        :global(.df-r2) { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; max-width: 66%; margin: 0 auto; }
        :global(.df-r3) { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; max-width: 50%; margin: 0 auto; }
        :global(.df-r4) { max-width: 30%; margin: 0 auto; }

        /* ══════════════════════════════════════
           NODE CARDS (shared)
           ══════════════════════════════════════ */
        :global(.nd) {
          position: relative;
          border-radius: 12px;
          background: linear-gradient(145deg, ${nc(T.neon, 0.045)} 0%, ${nc(T.neon, 0.012)} 100%);
          border: 1px solid ${nc(T.neon, 0.1)};
          cursor: default;
          opacity: 0;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, border-color 0.4s ease, box-shadow 0.5s ease;
        }
        :global(.nd::before) {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(ellipse 80% 70% at 20% 10%, ${nc(T.neon, 0.06)} 0%, transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        :global(.nd:hover::before) { opacity: 1; }
        /* Top border accent */
        :global(.nd::after) {
          content: "";
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(to right, transparent, ${nc(T.neon, 0.0)} 0%, transparent);
          transition: background 0.4s ease;
          pointer-events: none;
        }
        :global(.nd:hover::after) {
          background: linear-gradient(to right, transparent, ${nc(T.neon, 0.35)} 50%, transparent);
        }
        :global(.nd-in) { animation: ndIn 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes ndIn {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        :global(.nd:hover) {
          transform: translateY(-5px) !important;
          background: linear-gradient(145deg, ${nc(T.neon, 0.09)} 0%, ${nc(T.neon, 0.03)} 100%);
          border-color: ${nc(T.neon, 0.28)};
          box-shadow: 0 16px 48px ${nc(T.neon, 0.1)}, 0 0 0 1px ${nc(T.neon, 0.07)}, inset 0 1px 0 ${nc(T.neon, 0.12)};
        }

        /* Card sizes */
        :global(.nd-sm) { padding: 10px 11px; }
        :global(.nd-md) { padding: 11px 12px; }
        :global(.nd-lg) { padding: 12px 13px; }
        @media (min-width: 640px) {
          :global(.nd-sm) { padding: 12px 14px; border-radius: 14px; }
          :global(.nd-md) { padding: 14px 16px; border-radius: 14px; }
          :global(.nd-lg) { padding: 16px 18px; border-radius: 15px; }
        }
        @media (min-width: 1024px) {
          :global(.nd:hover) {
            transform: translateY(-6px) !important;
            box-shadow: 0 22px 60px ${nc(T.neon, 0.13)}, 0 0 0 1px ${nc(T.neon, 0.09)}, inset 0 1px 0 ${nc(T.neon, 0.15)};
          }
        }

        /* ── Icon Box ── */
        :global(.nd-ib) {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: ${nc(T.neon, 0.07)};
          border: 1px solid ${nc(T.neon, 0.15)};
          color: ${T.neon};
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.5s ease;
        }
        :global(.nd-ib-sm) { width: 30px; height: 30px; border-radius: 8px; }
        :global(.nd-ib-md) { width: 32px; height: 32px; border-radius: 9px; }
        :global(.nd-ib-lg) { width: 34px; height: 34px; border-radius: 9px; }
        @media (min-width: 640px) {
          :global(.nd-ib-sm) { width: 36px; height: 36px; border-radius: 10px; }
          :global(.nd-ib-md) { width: 40px; height: 40px; border-radius: 11px; }
          :global(.nd-ib-lg) { width: 44px; height: 44px; border-radius: 12px; }
        }
        :global(.nd:hover .nd-ib) {
          background: ${nc(T.neon, 0.15)};
          border-color: ${nc(T.neon, 0.35)};
          box-shadow: 0 0 30px ${nc(T.neon, 0.16)};
        }

        /* ── Icon SVG ── */
        :global(.nd-ico-sm) { width: 14px; height: 14px; }
        :global(.nd-ico-md) { width: 15px; height: 15px; }
        :global(.nd-ico-lg) { width: 16px; height: 16px; }
        @media (min-width: 640px) {
          :global(.nd-ico-sm) { width: 17px; height: 17px; }
          :global(.nd-ico-md) { width: 19px; height: 19px; }
          :global(.nd-ico-lg) { width: 21px; height: 21px; }
        }

        /* ── Title ── */
        :global(.nd-t) { font-family: "Space Grotesk", sans-serif; font-weight: 700; line-height: 1.2; color: ${T.white}; }
        :global(.nd-t-sm) { font-size: 10px; }
        :global(.nd-t-md) { font-size: 10.5px; }
        :global(.nd-t-lg) { font-size: 11px; }
        @media (min-width: 640px) {
          :global(.nd-t-sm) { font-size: 12px; }
          :global(.nd-t-md) { font-size: 13px; }
          :global(.nd-t-lg) { font-size: 14px; }
        }

        /* ── Desc ── */
        :global(.nd-d) { font-family: "Inter", sans-serif; line-height: 1.4; color: ${T.muted}; transition: color 0.35s ease; }
        :global(.nd-d-sm) { font-size: 8px; }
        :global(.nd-d-md) { font-size: 8.5px; }
        :global(.nd-d-lg) { font-size: 9px; }
        @media (min-width: 640px) {
          :global(.nd-d-sm) { font-size: 10px; }
          :global(.nd-d-md) { font-size: 10.5px; }
          :global(.nd-d-lg) { font-size: 11px; }
        }
        :global(.nd:hover .nd-d) { color: ${nc(T.neon, 0.55)}; }

        /* ══════════════════════════════════════
           HERO CARD
           ══════════════════════════════════════ */
        :global(.hc) {
          position: relative;
          border-radius: 18px;
          padding: 22px 20px;
          text-align: center;
          background: linear-gradient(160deg, ${nc(T.neon, 0.06)} 0%, ${nc(T.neon, 0.015)} 100%);
          border: 1px solid ${nc(T.neon, 0.14)};
          cursor: default;
          opacity: 0;
          overflow: hidden;
          transition: border-color 0.5s ease, background 0.5s ease, box-shadow 0.5s ease;
        }
        :global(.hc::before) {
          content: "";
          position: absolute;
          top: -60%; left: -60%;
          width: 220%; height: 220%;
          background: radial-gradient(circle at 50% 80%, ${nc(T.neon, 0.05)} 0%, transparent 45%);
          animation: hcGlow 4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes hcGlow {
          0%,100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        :global(.hc::after) {
          content: "";
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(to right, transparent, ${nc(T.neon, 0.25)} 50%, transparent);
          pointer-events: none;
        }
        :global(.hc-in) { animation: ndIn 0.7s 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        :global(.hc:hover) {
          background: linear-gradient(160deg, ${nc(T.neon, 0.1)} 0%, ${nc(T.neon, 0.03)} 100%);
          border-color: ${nc(T.neon, 0.32)};
          box-shadow: 0 0 80px ${nc(T.neon, 0.08)};
        }
        @media (min-width: 640px) {
          :global(.hc) { border-radius: 22px; padding: 30px 32px; }
        }
        @media (min-width: 1024px) {
          :global(.hc) { border-radius: 24px; padding: 34px 36px; }
        }

        :global(.hc-ib) {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
          background: ${nc(T.neon, 0.08)};
          border: 1px solid ${nc(T.neon, 0.18)};
          color: ${T.neon};
          position: relative; z-index: 1;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.5s ease;
        }
        :global(.hc-ib svg) { width: 22px; height: 22px; }
        :global(.hc:hover .hc-ib) {
          background: ${nc(T.neon, 0.18)};
          border-color: ${nc(T.neon, 0.4)};
          box-shadow: 0 0 44px ${nc(T.neon, 0.2)};
        }
        @media (min-width: 640px) {
          :global(.hc-ib) { width: 58px; height: 58px; margin-bottom: 18px; }
          :global(.hc-ib svg) { width: 26px; height: 26px; }
        }

        :global(.hc-t) {
          font-family: "Space Grotesk", sans-serif; font-size: 13px; font-weight: 700;
          color: ${T.white}; margin-bottom: 6px; line-height: 1.25; position: relative; z-index: 1;
        }
        :global(.hc-d) {
          font-family: "Inter", sans-serif; font-size: 9.5px; color: ${T.muted};
          margin-bottom: 18px; line-height: 1.5; position: relative; z-index: 1;
        }
        @media (min-width: 640px) {
          :global(.hc-t) { font-size: 18px; margin-bottom: 8px; }
          :global(.hc-d) { font-size: 13px; margin-bottom: 24px; }
        }
        @media (min-width: 1024px) {
          :global(.hc-t) { font-size: 20px; }
        }

        :global(.hc-btn) {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 11px;
          background: ${nc(T.neon, 0.08)};
          border: 1px solid ${nc(T.neon, 0.16)};
          color: ${T.neon}; cursor: pointer;
          position: relative; z-index: 1;
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        :global(.hc-btn span) { font-family: "Inter", sans-serif; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; }
        :global(.hc-btn svg) { width: 12px; height: 12px; transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        :global(.hc-btn:hover) {
          background: ${nc(T.neon, 0.2)}; border-color: ${nc(T.neon, 0.4)};
          box-shadow: 0 0 36px ${nc(T.neon, 0.14)};
          transform: translateY(-2px);
        }
        :global(.hc-btn:hover svg) { transform: translateX(4px); }
        @media (min-width: 640px) {
          :global(.hc-btn) { padding: 12px 26px; border-radius: 13px; }
          :global(.hc-btn span) { font-size: 11px; }
          :global(.hc-btn svg) { width: 15px; height: 15px; }
        }

        /* ══════════════════════════════════════
           FLOW ANIMATIONS
           ══════════════════════════════════════ */
        :global(.pDot) { animation: pDot 3s ease-in-out infinite; }
        @keyframes pDot { 0%, 100% { opacity: 0.3; transform: scale(1) } 50% { opacity: 1; transform: scale(1.8) } }
        :global(.dFlow) { animation: dFlow 2.2s linear infinite; }
        @keyframes dFlow { to { stroke-dashoffset: -36; } }
        :global(.gPulse) { animation: gPulse 3.5s ease-in-out infinite; }
        @keyframes gPulse { 0%, 100% { opacity: 0.2 } 50% { opacity: 0.6 } }
      `}</style>
    </section>
  );
}

/* ══════════════════════════════════════
   MOBILE TREE LAYOUT
   ══════════════════════════════════════ */
function MobTree({ show }: { show: boolean }) {
  return (
    <div className="mt-wrap">
      {/* Row 1 */}
      <div className={"mt-row " + (show ? "mt-row-on" : "")} style={{ transitionDelay: "80ms" }}>
        <div className="mt-grid mt-g5">
          {row1.map(function (n, i) {
            return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="sm" delay={i * 70 + 200} show={show} />;
          })}
        </div>
      </div>

      <MobConn show={show} delay={580} type="branch" count={3} />

      {/* Row 2 */}
      <div className={"mt-row " + (show ? "mt-row-on" : "")} style={{ transitionDelay: "200ms" }}>
        <div className="mt-grid mt-g3">
          {row2.map(function (n, i) {
            return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="md" delay={i * 70 + 400} show={show} />;
          })}
        </div>
      </div>

      <MobConn show={show} delay={760} type="branch" count={2} />

      {/* Row 3 */}
      <div className={"mt-row " + (show ? "mt-row-on" : "")} style={{ transitionDelay: "320ms" }}>
        <div className="mt-grid mt-g2">
          {row3.map(function (n, i) {
            return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="lg" delay={i * 70 + 600} show={show} />;
          })}
        </div>
      </div>

      <MobConn show={show} delay={920} type="single" />

      {/* Hero */}
      <div className={"mt-row " + (show ? "mt-row-on" : "")} style={{ transitionDelay: "420ms" }}>
        <div className="mt-hero-wrap">
          <HeroCard show={show} />
        </div>
      </div>
    </div>
  );
}

/* Mobile connector: vertical line + branching */
function MobConn({ show, delay, type, count }: { show: boolean; delay: number; type: string; count?: number }) {
  if (type === "single") {
    return (
      <div className={"mc " + (show ? "mc-on" : "")} style={{ transitionDelay: delay + "ms" }}>
        <div className="mc-line mc-lt" />
        <div className="mc-node" />
        <div className="mc-line mc-lb" />
      </div>
    );
  }
  return (
    <div className={"mc " + (show ? "mc-on" : "")} style={{ transitionDelay: delay + "ms" }}>
      <div className="mc-line mc-lt" />
      <div className="mc-node" />
      <div className="mc-branches">
        <div className="mc-br-line" style={{ left: "15%", right: "15%" }} />
        {count === 3 && <div className="mc-br-dot" style={{ left: "15%" }} />}
        <div className="mc-br-dot" style={{ left: "50%", transform: "translateX(-50%)" }} />
        {count === 3 && <div className="mc-br-dot" style={{ right: "15%" }} />}
        {count === 2 && <div className="mc-br-dot" style={{ right: "15%" }} />}
      </div>
      <div className="mc-line mc-lb" />
    </div>
  );
}

/* ══════════════════════════════════════
   DESKTOP FUNNEL LAYOUT
   ══════════════════════════════════════ */
function DeskFunnel({ show }: { show: boolean }) {
  return (
    <div className="df-wrap">
      <div className={"df-row df-r1 " + (show ? "df-row-on" : "")} style={{ transitionDelay: "80ms" }}>
        {row1.map(function (n, i) {
          return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="sm" delay={i * 80 + 200} show={show} />;
        })}
      </div>
      <DFlow data={dLinks[0]} show={show} delay={600} />
      <div className={"df-row df-r2 " + (show ? "df-row-on" : "")} style={{ transitionDelay: "180ms" }}>
        {row2.map(function (n, i) {
          return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="md" delay={i * 80 + 400} show={show} />;
        })}
      </div>
      <DFlow data={dLinks[1]} show={show} delay="780" />
      <div className={"df-row df-r3 " + (show ? "df-row-on" : "")} style={{ transitionDelay: "280ms" }}>
        {row3.map(function (n, i) {
          return <NodeCard key={i} icon={n.icon} title={n.title} desc={n.desc} size="lg" delay={i * 80 + 600} show={show} />;
        })}
      </div>
      <DFlow data={dLinks[2]} show={show} delay="950" />
      <div className={"df-row df-r4 " + (show ? "df-row-on" : "")} style={{ transitionDelay: "380ms" }}>
        <HeroCard show={show} />
      </div>
    </div>
  );
}

/* Desktop SVG flow lines */
function DFlow({ data, show, delay }: { data: any; show: boolean; delay: number | string }) {
  return (
    <div className="relative" style={{ height: "50px" }}>
      <svg viewBox="0 0 1000 56" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.9s ease " + delay + "ms",
      }}>
        <defs>
          <filter id="fG">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {data.map.map(function (m: any, i: number) {
          var x1 = data.from[m[0]], x2 = data.to[m[1]];
          var d = "M " + x1 + ",0 C " + x1 + ",30 " + x2 + ",30 " + x2 + ",56";
          return (
            <g key={i}>
              <path d={d} fill="none" stroke={nc(T.neon, 0.055)} strokeWidth={20} vectorEffect="non-scaling-stroke" className="gPulse" style={{ animationDelay: i * 0.6 + "s" }} />
              <path d={d} fill="none" stroke={nc(T.neon, 0.12)} strokeWidth={5} vectorEffect="non-scaling-stroke" />
              <path d={d} fill="none" stroke={nc(T.neon, 0.26)} strokeWidth={1.5} vectorEffect="non-scaling-stroke" filter="url(#fG)" />
              <path d={d} fill="none" stroke={nc(T.neon, 0.4)} strokeWidth={1} vectorEffect="non-scaling-stroke" className="dFlow" strokeDasharray="5 14" style={{ animationDelay: i * 0.35 + "s" }} />
            </g>
          );
        })}
        {data.from.map(function (x: number, i: number) {
          return (
            <g key={"s" + i}>
              <circle cx={x} cy={0} r={7} fill={nc(T.neon, 0.04)} />
              <circle cx={x} cy={0} r={2.8} fill={nc(T.neon, 0.3)} />
            </g>
          );
        })}
        {data.to.map(function (x: number, i: number) {
          return (
            <g key={"e" + i}>
              <circle cx={x} cy={56} r={9} fill={nc(T.neon, 0.04)} className="pDot" style={{ animationDelay: i * 0.55 + "s" }} />
              <circle cx={x} cy={56} r={3.8} fill={nc(T.neon, 0.45)} className="pDot" style={{ animationDelay: i * 0.55 + "s" }} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════
   NODE CARD
   ══════════════════════════════════════ */
function NodeCard({ icon: Icon, title, desc, size, delay, show }: { icon: any; title: string; desc: string; size: string; delay: number; show: boolean }) {
  var sz = size || "sm";
  return (
    <div className={"nd nd-" + sz + (show ? " nd-in" : "")} style={{ animationDelay: delay + "ms" }}>
      <div className={"flex items-start gap-2" + (sz === "lg" ? " gap-2.5" : "")}>
        <div className={"nd-ib nd-ib-" + sz}>
          <Icon className={"nd-ico-" + sz} />
        </div>
        <div className="min-w-0 pt-px">
          <p className={"nd-t nd-t-" + sz}>{title}</p>
          <p className={"nd-d nd-d-" + sz + " mt-0.5"}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   HERO CARD
   ══════════════════════════════════════ */
function HeroCard({ show }: { show: boolean }) {
  return (
    <div className={"hc" + (show ? " hc-in" : "")}>
      <div className="hc-ib"><Sparkles /></div>
      <h4 className="hc-t">Your Complete Dev Ecosystem</h4>
      <p className="hc-d">Everything you need to build, deploy & scale</p>
      <button className="hc-btn">
        <span>Get Services</span>
        <ArrowRight />
      </button>
    </div>
  );
}