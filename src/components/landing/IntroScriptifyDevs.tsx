"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    Target,
} from "lucide-react";

// Theme Palette
const T = {
    bg: "#060608",
    neon: "#ccff00",
    white: "#f0f0f2",
    muted: "#9ca3af", // Softer gray for better readability
    dim: "#3a3a48",
};

// Utility for RGBA conversion
function nc(hex: string, a: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
}



export default function MissionSection() {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (e) => {
                if (e[0].isIntersecting) {
                    setVis(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="relative w-full overflow-hidden font-sans"
            style={{ backgroundColor: T.bg }}
        >
            {/* Ambient Background Glows */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "10%",
                    left: "0%",
                    width: "50%",
                    height: "80%",
                    background: `radial-gradient(ellipse at 50% 50%, ${nc(T.neon, 0.03)} 0%, transparent 70%)`,
                    filter: "blur(80px)",
                }}
            />
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: "0%",
                    right: "0%",
                    width: "45%",
                    height: "60%",
                    background: `radial-gradient(ellipse at 50% 50%, ${nc(T.neon, 0.02)} 0%, transparent 70%)`,
                    filter: "blur(80px)",
                }}
            />

            {/* ═══ MAIN LAYOUT ═══ */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 py-8 lg:py-12 items-center">

                {/* ═══ LEFT: TEXT CONTENT ═══ */}
                <div className="relative flex flex-col justify-center px-6 py-6 sm:px-10 md:px-16 lg:px-20 lg:py-0">
                    <div className="w-full max-w-xl">



                        {/* Main Heading */}
                        <div
                            className="mt-6 sm:mt-8 transition-all duration-1000 ease-out"
                            style={{
                                opacity: vis ? 1 : 0,
                                transform: vis ? "translateY(0)" : "translateY(20px)",
                                transitionDelay: "0.2s",
                            }}
                        >
                            <h1
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-[1.15]"
                                style={{ color: T.white }}
                            >
                                The Ultimate
                                <span style={{ color: T.neon }}> Developer </span>
                                <span style={{ color: T.dim }}>,</span>
                                <br />
                                Marketplace
                            </h1>
                        </div>

                        {/* Accent Line */}
                        <div
                            className="mt-6 sm:mt-8 h-[2px] w-12 sm:w-16 rounded-full transition-all duration-700 ease-out origin-left"
                            style={{
                                background: `linear-gradient(90deg, ${T.neon}, transparent)`,
                                opacity: vis ? 1 : 0,
                                transform: vis ? "scaleX(1)" : "scaleX(0)",
                                transitionDelay: "0.3s",
                            }}
                        />

                        {/* Body Text */}
                        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                            <p
                                className="text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-700 ease-out"
                                style={{
                                    color: T.muted,
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "translateY(0)" : "translateY(14px)",
                                    transitionDelay: "0.4s",
                                }}
                            >
                                ScriptifyDevs was born from a simple belief — developers
                                shouldn&apos;t just write code, they should{" "}
                                <span style={{ color: T.neon, fontWeight: 500 }}>command it</span>. We equip every
                                developer with AI-powered tools that transform how they work,
                                deliver, and grow.
                            </p>

                            <p
                                className="text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-700 ease-out"
                                style={{
                                    color: T.muted,
                                    opacity: vis ? 1 : 0,
                                    transform: vis ? "translateY(0)" : "translateY(14px)",
                                    transitionDelay: "0.5s",
                                }}
                            >
                                This is{" "}
                                <span
                                    className="font-semibold px-1 rounded-sm"
                                    style={{
                                        color: T.white,
                                        background: nc(T.neon, 0.15),
                                    }}
                                >
                                    Freelancing 2.0
                                </span>
                                . Clients don&apos;t want quantity — they want{" "}
                                <span style={{ color: T.white, fontWeight: 600 }}>quality</span>.
                                And quality comes from developers empowered with the right
                                tools, skills, and mindset.
                            </p>
                        </div>


                    </div>
                </div>

                {/* ═══ RIGHT: IMAGE AREA ═══ */}
                <div className="relative flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 bg-gradient-to-t lg:bg-gradient-to-l from-black/40 to-transparent">

                    {/* Glowing Accent behind image */}
                    <div
                        className="absolute w-3/4 h-3/4 max-w-[400px] rounded-full pointer-events-none transition-opacity duration-1000"
                        style={{
                            background: `radial-gradient(circle, ${nc(T.neon, 0.08)} 0%, transparent 60%)`,
                            filter: "blur(40px)",
                            opacity: vis ? 1 : 0,
                            transitionDelay: "0.5s"
                        }}
                    />

                    <div
                        className="relative z-10 w-full max-w-xl sm:max-w-2xl lg:max-w-[130%] transition-all duration-1000 ease-out"
                        style={{
                            opacity: vis ? 1 : 0,
                            transform: vis ? "scale(1.2) translateY(0)" : "scale(0.95) translateY(20px)",
                            transitionDelay: "0.4s",
                        }}
                    >
                        <img
                            src="/teams-section.png"
                            alt="ScriptifyDevs Mission"
                            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                            style={{
                                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Glow Separator */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                style={{
                    background: `linear-gradient(90deg, transparent, ${nc(T.neon, 0.15)} 50%, transparent)`,
                }}
            />

            <style jsx>{`
            `}</style>
        </section>
    );
}