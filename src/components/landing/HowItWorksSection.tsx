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

const T = {
  bg: "#0a0a0a",
  card: "#111111",
  neon: "#ccff00",
  white: "#ffffff",
  body: "#a1a1aa",
  muted: "#71717a",
};

function nc(hex, a) {
  var r = parseInt(hex.slice(1, 3), 16);
  var g = parseInt(hex.slice(3, 5), 16);
  var b = parseInt(hex.slice(5, 7), 16);
  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

var cards = [
  {
    number: "01",
    label: "RENT",
    icon: <KeyRound className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "API Keys on Rent",
    subtitle: "Pay Per Month \u00b7 No Lock-in",
    desc: "Skip heavy subscriptions. Rent verified API endpoints, AI model keys & data pipelines by the hour, day, or month.",
    tags: ["AI Endpoints", "Data", "Proxies"],
    stats: [
      { icon: <Clock className="w-3 h-3" />, label: "Hourly to Monthly" },
      { icon: <RefreshCw className="w-3 h-3" />, label: "Instant Activation" },
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
    subtitle: "Intelligent Automation \u00b7 24/7",
    desc: "Self-running intelligent agents & complex automation workflows that operate around the clock without human intervention.",
    tags: ["Agents", "Workflows", "Pipelines"],
    stats: [
      { icon: <Zap className="w-3 h-3" />, label: "Zero Downtime" },
      { icon: <Workflow className="w-3 h-3" />, label: "Multi-Step Logic" },
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
      { icon: <Users className="w-3 h-3" />, label: "Professional Devs" },
      { icon: <Lock className="w-3 h-3" />, label: "Verified & Vetted" },
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
  var ref = useRef(null);
  var [vis, setVis] = useState(false);
  var [cv, setCv] = useState([false, false, false]);

  useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var obs = new IntersectionObserver(
      function (e) {
        if (e[0].isIntersecting) {
          setVis(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return function () {
      obs.disconnect();
    };
  }, []);

  useEffect(function () {
    if (vis) {
      cards.forEach(function (_, i) {
        setTimeout(function () {
          setCv(function (p) {
            var n = p.slice();
            n[i] = true;
            return n;
          });
        }, 180 + i * 130);
      });
    }
  }, [vis]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: T.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 10%, " +
            nc(T.neon, 0.022) +
            " 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[-5%] left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none fl-a"
        style={{
          background:
            "radial-gradient(circle, " +
            nc(T.neon, 0.018) +
            " 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[8%] right-[4%] w-[420px] h-[420px] rounded-full pointer-events-none fl-b"
        style={{
          background:
            "radial-gradient(circle, " +
            nc("#60a5fa", 0.012) +
            " 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.007,
          backgroundImage:
            "linear-gradient(" +
            nc(T.neon, 0.5) +
            " 1px, transparent 1px), linear-gradient(90deg, " +
            nc(T.neon, 0.5) +
            " 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 50% 30% at 50% 18%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 30% at 50% 18%, black 10%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-12 pb-4 sm:pb-8 md:pb-12">
        <div
          className={
            "text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12 hd" +
            (vis ? " hd-on" : "")
          }
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 sm:mb-5"
            style={{
              backgroundColor: nc(T.neon, 0.04),
              border: "1px solid " + nc(T.neon, 0.1),
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: T.neon }} />
            <span
              className="font-inter text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: T.neon }}
            >
              Our Edge
            </span>
          </div>

          <h2
            className="font-space text-[1.9rem] sm:text-3xl md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-[1.08] mb-3 sm:mb-4"
            style={{ color: T.white }}
          >
            Why{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #ccff00, #88b300)",
              }}
            >
              ScriptifyDevs
            </span>
            ?
          </h2>
          <p
            className="font-inter text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-xl mx-auto"
            style={{ color: T.muted }}
          >
            Buy code. Rent APIs. Deploy AI agents. All under one roof — built
            for developers who ship fast.
          </p>

          <div className="flex items-center justify-center mt-5 sm:mt-6">
            <div
              className="h-[1px] w-12"
              style={{
                background:
                  "linear-gradient(to right, transparent, " +
                  nc(T.neon, 0.15) +
                  ")",
              }}
            />
            <div
              className="w-1.5 h-1.5 rotate-45 mx-3"
              style={{ backgroundColor: nc(T.neon, 0.15) }}
            />
            <div
              className="h-[1px] w-12"
              style={{
                background:
                  "linear-gradient(to left, transparent, " +
                  nc(T.neon, 0.15) +
                  ")",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {cards.map(function (card, i) {
            return (
              <div
                key={i}
                className={
                  "svc-card" +
                  (cv[i] ? " vis" : "") +
                  (i === 1 ? " feat" : "")
                }
              >
                <div className="sc-shim" />
                <div className="sc-glow" />
                <div className="sc-corner" />
                <div className="sc-num">{card.number}</div>

                <div className="relative z-10 p-5 sm:p-6 lg:p-7">
                  <div className="sc-label">
                    {card.number} · {card.label}
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="ic-box">{card.icon}</div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="sc-title">{card.title}</h3>
                      <p className="sc-sub">{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="sc-desc">{card.desc}</p>

                  <div className="sc-stats">
                    {card.stats.map(function (s, si) {
                      return (
                        <div key={si} className="st-box">
                          <span className="st-ico">{s.icon}</span>
                          <span className="st-lbl">{s.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="sc-feats">
                    {card.features.map(function (f, fi) {
                      return (
                        <div key={fi} className="ft-item">
                          <div className="ft-dot" />
                          <span className="ft-txt">{f}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="sc-div" />

                  <div className="sc-foot">
                    <div className="sc-tags">
                      {card.tags.map(function (tag, ti) {
                        return (
                          <span key={ti} className="tg-pill">
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <button className="go-btn">
                      <span>Go</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .hd {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hd-on {
          opacity: 1;
          transform: translateY(0);
        }
        .fl-a {
          animation: fa 16s ease-in-out infinite;
        }
        .fl-b {
          animation: fb 20s ease-in-out infinite;
        }
        @keyframes fa {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(22px, -18px);
          }
        }
        @keyframes fb {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-18px, 22px);
          }
        }

        .svc-card {
          position: relative;
          background: ${T.card};
          border: 1px solid ${nc(T.neon, 0.06)};
          border-radius: 20px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(32px);
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.65s ease, border-color 0.4s ease, box-shadow 0.5s ease;
        }
        .svc-card.feat {
          border-color: ${nc(T.neon, 0.1)};
        }
        .svc-card.vis {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card.vis:hover {
          transform: translateY(-7px);
          border-color: ${nc(T.neon, 0.22)};
          box-shadow: 0 28px 70px ${nc(T.neon, 0.09)},
            0 0 0 1px ${nc(T.neon, 0.04)}, 0 0 120px ${nc(T.neon, 0.03)};
        }

        .sc-shim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          z-index: 5;
          opacity: 0.25;
          transition: opacity 0.4s ease;
          background-size: 200% 100%;
          background-image: linear-gradient(90deg, transparent, ${nc(T.neon, 0.35)}, transparent);
          animation: shim 3.5s ease-in-out infinite;
        }
        .svc-card.vis:hover .sc-shim {
          opacity: 1;
        }
        @keyframes shim {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .sc-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 80% 45% at 50% -5%, ${nc(T.neon, 0.06)} 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        .svc-card.vis:hover .sc-glow {
          opacity: 1;
        }

        .sc-corner {
          position: absolute;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border-top: 2px solid ${nc(T.neon, 0.2)};
          border-left: 2px solid ${nc(T.neon, 0.2)};
          border-radius: 20px 0 0 0;
          z-index: 4;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .svc-card.vis:hover .sc-corner {
          opacity: 1;
        }

        .sc-num {
          position: absolute;
          top: -14px;
          right: 14px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 85px;
          font-weight: 800;
          line-height: 1;
          color: ${nc(T.neon, 0.022)};
          transition: color 0.5s ease;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }
        .svc-card.feat .sc-num {
          color: ${nc(T.neon, 0.035)};
        }
        .svc-card.vis:hover .sc-num {
          color: ${nc(T.neon, 0.06)};
        }

        .sc-label {
          font-family: "JetBrains Mono", "SF Mono", monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: ${T.neon};
          opacity: 0.55;
          transition: opacity 0.3s ease;
          margin-bottom: 22px;
        }
        .svc-card.vis:hover .sc-label {
          opacity: 1;
        }

        .ic-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: ${nc(T.neon, 0.05)};
          border: 1px solid ${nc(T.neon, 0.08)};
          color: ${T.neon};
          transition: background 0.4s ease, border-color 0.4s ease,
            box-shadow 0.5s ease, transform 0.4s ease;
        }
        .svc-card.vis:hover .ic-box {
          background: ${nc(T.neon, 0.1)};
          border-color: ${nc(T.neon, 0.24)};
          box-shadow: 0 0 35px ${nc(T.neon, 0.12)},
            0 0 70px ${nc(T.neon, 0.04)};
          transform: scale(1.04);
        }

        .sc-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 16.5px;
          line-height: 1.25;
          font-weight: 700;
          color: ${T.white};
          margin-bottom: 3px;
        }
        @media (min-width: 640px) {
          .sc-title {
            font-size: 18.5px;
          }
        }

        .sc-sub {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: ${T.neon};
          opacity: 0.55;
          transition: opacity 0.3s ease;
        }
        .svc-card.vis:hover .sc-sub {
          opacity: 0.9;
        }

        .sc-desc {
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1.8;
          color: ${T.body};
          margin-bottom: 18px;
        }
        @media (min-width: 640px) {
          .sc-desc {
            font-size: 12.5px;
          }
        }

        .sc-stats {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
        }
        .st-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 11px;
          border-radius: 10px;
          background: ${nc(T.neon, 0.03)};
          border: 1px solid ${nc(T.neon, 0.05)};
          transition: background 0.3s ease, border-color 0.3s ease,
            box-shadow 0.3s ease;
        }
        .svc-card.vis:hover .st-box {
          background: ${nc(T.neon, 0.065)};
          border-color: ${nc(T.neon, 0.14)};
          box-shadow: 0 2px 12px ${nc(T.neon, 0.04)};
        }
        .st-ico {
          color: ${T.neon};
          opacity: 0.65;
          flex-shrink: 0;
          transition: opacity 0.3s ease;
        }
        .svc-card.vis:hover .st-ico {
          opacity: 1;
        }
        .st-lbl {
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          line-height: 1.3;
          color: ${T.body};
          transition: color 0.3s ease;
        }
        .svc-card.vis:hover .st-lbl {
          color: ${T.white};
        }

        .sc-feats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          margin-bottom: 20px;
        }
        .ft-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          border-radius: 9px;
          background: ${nc(T.neon, 0.02)};
          border: 1px solid ${nc(T.neon, 0.04)};
          transition: background 0.35s ease 0s, border-color 0.35s ease 0s;
        }
        .svc-card.vis:hover .ft-item:nth-child(1) {
          transition-delay: 0ms;
        }
        .svc-card.vis:hover .ft-item:nth-child(2) {
          transition-delay: 25ms;
        }
        .svc-card.vis:hover .ft-item:nth-child(3) {
          transition-delay: 50ms;
        }
        .svc-card.vis:hover .ft-item:nth-child(4) {
          transition-delay: 75ms;
        }
        .svc-card.vis:hover .ft-item {
          background: ${nc(T.neon, 0.055)};
          border-color: ${nc(T.neon, 0.12)};
        }
        .ft-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${T.neon};
          opacity: 0.35;
          flex-shrink: 0;
          transition: opacity 0.35s ease, box-shadow 0.35s ease;
        }
        .svc-card.vis:hover .ft-dot {
          opacity: 1;
          box-shadow: 0 0 10px ${nc(T.neon, 0.5)};
        }
        .ft-txt {
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          line-height: 1.2;
          color: ${T.body};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s ease;
        }
        .svc-card.vis:hover .ft-txt {
          color: ${T.white};
        }

        .sc-div {
          height: 1px;
          margin-bottom: 16px;
          background: linear-gradient(90deg, transparent, ${nc(T.neon, 0.09)}, transparent);
          transition: background 0.4s ease;
        }
        .svc-card.vis:hover .sc-div {
          background: linear-gradient(90deg, transparent, ${nc(T.neon, 0.22)}, transparent);
        }

        .sc-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .sc-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          min-width: 0;
        }
        .tg-pill {
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 6px;
          white-space: nowrap;
          background: ${nc(T.neon, 0.025)};
          border: 1px solid ${nc(T.neon, 0.05)};
          color: ${T.neon};
          opacity: 0.2;
          transition: opacity 0.35s ease, background 0.35s ease, border-color 0.35s ease;
        }
        .svc-card.vis:hover .tg-pill {
          opacity: 0.6;
          background: ${nc(T.neon, 0.055)};
          border-color: ${nc(T.neon, 0.12)};
        }

        .go-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 7px 15px;
          border-radius: 10px;
          background: ${nc(T.neon, 0.035)};
          border: 1px solid ${nc(T.neon, 0.07)};
          color: ${T.neon};
          cursor: pointer;
          opacity: 0.3;
          flex-shrink: 0;
          transition: opacity 0.35s ease, background 0.35s ease, border-color 0.35s ease,
            box-shadow 0.35s ease;
        }
        .go-btn span {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .go-btn svg {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .svc-card.vis:hover .go-btn {
          opacity: 1;
          background: ${nc(T.neon, 0.13)};
          border-color: ${nc(T.neon, 0.28)};
          box-shadow: 0 0 25px ${nc(T.neon, 0.1)};
        }
        .svc-card.vis:hover .go-btn svg {
          transform: translateX(3px);
        }

        @media (max-width: 767px) {
          .sc-num {
            font-size: 65px;
            top: -10px;
            right: 10px;
          }
        }
      `}</style>
    </section>
  );
}