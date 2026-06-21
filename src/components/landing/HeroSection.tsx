"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Key,
  Code2,
  BrainCircuit,
  Zap,
  ChevronRight,
  Sparkles,
  Play,
  Pause,
  Globe,
  Bot,
  Search,
  Terminal,
  Workflow,
} from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50, show: false });

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ["/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4", "/videos/4.mp4", "/videos/5.mp4"];

  useEffect(() => { setMounted(true); }, []);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const switchVideo = useCallback((index: number) => {
    if (index !== currentVideo) {
      setCurrentVideo(index);
      setIsPlaying(true);
    }
  }, [currentVideo]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      show: true
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseGlow((p) => ({ ...p, show: false }));
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="relative h-[calc(100svh-60px)] w-full overflow-hidden bg-[#020202] flex flex-col select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .noise-grain { position: fixed; inset: 0; z-index: 9999; pointer-events: none; opacity: 0.04; mix-blend-mode: overlay; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABIFBMVEXw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDXF5qTAAAAY3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX5/gIGCg4SEhYaIiYqLjI2Oj4+QlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7rK9ooAAABXklEQVRYw+3W226DMBBF0WYpYUk0k1aystXd/x9VKRTiLIrAZ3Lm/QeTnJfEDTlVOXbZ52v2YIwxxhhjjDHGGGOMMcYYY4wxxhhjjL8feDn5q4L3FnFXFbe1fS6S3s/ku8l3q+BdxVsLupPcVb2uQDdW8F5x1+X+Ub2uQDdWcFfx1uU+Ub2uQDdWcFfx1uU+Ub2uQDdWcFfx1uU+Ub2uQDdWcFfx1uU+Ub2uQDdWcFdxVv0Q4wxxpj/AU3jV7sq2WqHAAAAAElFTkSuQmCC"); background-repeat: repeat; background-size: 100px 100px; }
        
        @keyframes heroReveal { from { opacity: 0; transform: translateY(30px) scale(0.98); filter: blur(8px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
        .h-enter { opacity: 0; will-change: transform, opacity, filter; animation: heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .h-d1 { animation-delay: 0.1s; } .h-d2 { animation-delay: 0.25s; } .h-d3 { animation-delay: 0.4s; } .h-d4 { animation-delay: 0.55s; } .h-d5 { animation-delay: 0.7s; } .h-d6 { animation-delay: 0.85s; } .h-d7 { animation-delay: 1s; }
        
        @keyframes gFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .g-flow { background-size: 200% 200%; animation: gFlow 6s ease infinite; }
        
        @keyframes shimmer { 0% { transform: translateX(-110%) skewX(-14deg); } 100% { transform: translateX(110%) skewX(-14deg); } }
        .btn-shimmer { position: relative; overflow: hidden; } .btn-shimmer::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent); transform: translateX(-110%) skewX(-14deg); } .btn-shimmer:hover::after { animation: shimmer 0.8s ease forwards; }
        
        @keyframes glowPulse { 0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); } }
        .glow-pulse { animation: glowPulse 8s ease-in-out infinite; }

        @keyframes ctaPulse { 0%, 100% { box-shadow: 0 0 20px rgba(204,255,0,0.3); } 50% { box-shadow: 0 0 45px rgba(204,255,0,0.5); } }
        .cta-pulse { animation: ctaPulse 3s ease-in-out infinite; }

        .tech-grid {
          position: absolute; inset: 0; z-index: 4; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 75%);
          opacity: 0.5;
        }

        @keyframes scrollDown {
          0% { transform: translateY(-5px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(5px); opacity: 0; }
        }
        .scroll-anim { animation: scrollDown 1.5s ease-in-out infinite; }
      ` }} />

      <div className="noise-grain" />

      {/* ═══════════════════════════════════════
          VIDEO BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          key={currentVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-[2s] ease-out"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>

        {/* Mobile Optimized Overlay (Darker for readability) */}
        <div className="absolute inset-0 z-[1] bg-black/50 md:bg-black/30"></div>

        {/* Center readable vignette for desktop */}
        <div className="absolute inset-0 z-[1] hidden md:block" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 70%)" }}></div>

        {/* LEFT SIDE BLUR (Desktop only) */}
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-[35%] z-[2] backdrop-blur-xl bg-black/20"
          style={{
            maskImage: "linear-gradient(to right, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 20%, transparent 100%)"
          }}
        ></div>

        {/* RIGHT SIDE BLUR (Desktop only) */}
        <div
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[35%] z-[2] backdrop-blur-xl bg-black/20"
          style={{
            maskImage: "linear-gradient(to left, black 20%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 20%, transparent 100%)"
          }}
        ></div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] md:h-[25%] bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent z-[3]"></div>
      </div>

      {/* ═══════════════════════════════════════
          BACKGROUND EFFECTS
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-[4] overflow-hidden pointer-events-none">
        <div className="tech-grid"></div>
        <div className="glow-pulse absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full z-[2]" style={{ background: "radial-gradient(circle, rgba(204,255,0,0.12) 0%, rgba(204,255,0,0.02) 42%, transparent 68%)" }} />
        <div className="hidden lg:block absolute z-[3] transition-opacity duration-700 ease-out" style={{ left: `${mouseGlow.x}%`, top: `${mouseGlow.y}%`, transform: "translate(-50%, -50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(204,255,0,0.08) 0%, transparent 55%)", opacity: mouseGlow.show ? 1 : 0 }} />
      </div>

      {/* ═══════════════════════════════════════
          DESKTOP FLOATING BADGES 
      ═══════════════════════════════════════ */}
      <div className="hidden lg:flex flex-col gap-5 absolute left-[2%] xl:left-[3%] top-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:translate-x-1 transition-all duration-500 group cursor-default select-none">
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Key className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">APIs</span>
        </div>
        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:translate-x-1 transition-all duration-500 group cursor-default select-none" style={{ marginLeft: '24px' }}>
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Bot className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">Bots</span>
        </div>
        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:translate-x-1 transition-all duration-500 group cursor-default select-none" style={{ marginLeft: '10px' }}>
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Code2 className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">Scripts</span>
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-5 absolute right-[2%] xl:right-[3%] top-1/2 -translate-y-1/2 z-10 items-end">

        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:-translate-x-1 transition-all duration-500 group cursor-default select-none" style={{ marginRight: '20px' }}>
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Workflow className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">Workflows</span>
        </div>
        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:-translate-x-1 transition-all duration-500 group cursor-default select-none">
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Terminal className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">Codes</span>
        </div>
        <div className="flex items-center gap-2 bg-black/60 border border-[#ccff00]/20 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-[#ccff00]/50 hover:-translate-x-1 transition-all duration-500 group cursor-default select-none" style={{ marginRight: '8px' }}>
          <div className="bg-[#ccff00]/10 p-1.5 rounded-lg group-hover:bg-[#ccff00]/20 transition-all"><Zap className="w-4 h-4 text-[#ccff00]" strokeWidth={2} /></div>
          <span className="font-inter text-white text-xs font-semibold tracking-tight">Automation</span>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          MAIN CENTER CONTENT 
      ═══════════════════════════════════════ */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center w-full max-w-[95%] md:max-w-4xl mx-auto px-4 py-8">

        {/* Top Pill Badge */}
        <div className="h-enter h-d1 flex items-center justify-center gap-1.5 bg-black/50 border border-[#ccff00]/30 backdrop-blur-md px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-5 sm:mb-8 md:mb-10 shadow-[0_0_30px_rgba(204,255,0,0.15)] cursor-default hover:bg-[#ccff00]/10 transition-all duration-500 group">
          <span className="font-inter text-[#ccff00] text-[9px] sm:text-[11px] md:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-colors">
            Pakistan’s 1<sup>st</sup> Developer Marketplace
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="h-enter h-d2 font-space text-[38px] sm:text-[56px] md:text-[76px] lg:text-[96px] leading-[1.1] md:leading-[1.0] font-bold text-white tracking-[-0.05em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          <span className="block">Build the Future</span>
          <span className="block mt-1 md:mt-2">
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#d6ff44] to-[#7a9900] g-flow drop-shadow-none">
              ScriptifyDevs
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="h-enter h-d3 mt-4 sm:mt-6 md:mt-8 font-inter text-white/90 text-[13px] sm:text-[15px] md:text-[17px] leading-[1.6] sm:leading-[1.6] md:leading-[1.6] max-w-[20rem] sm:max-w-[32rem] md:max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
          The ultimate <span className="text-[#ccff00] font-semibold">ScriptifyDevs</span> marketplace for creators, <span className="text-[#ccff00] font-semibold">developers,</span>and engineers. Access ready-to-integrate automation workflows, chatbot scripts, and source files vetted for maximum performance.
        </p>

        {/* CTA Buttons Row */}
        <div className="h-enter h-d5 mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 w-auto">
          <button className="btn-shimmer cta-pulse font-inter group relative flex items-center justify-center gap-1.5 sm:gap-2 bg-[#ccff00] hover:bg-[#d4ff33] text-[#050505] px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-xl text-[11px] sm:text-[13px] md:text-[14px] font-extrabold tracking-tight transition-all duration-300 active:scale-[0.97] whitespace-nowrap">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2.5} />
            <span className="relative z-10">Explore Market</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="font-inter group flex items-center justify-center gap-1.5 sm:gap-2 bg-black/60 hover:bg-black/80 text-white border border-white/20 hover:border-[#ccff00]/40 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-xl text-[11px] sm:text-[13px] md:text-[14px] font-bold tracking-tight transition-all duration-500 active:scale-[0.97] backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.3)] whitespace-nowrap">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#ccff00] group-hover:scale-110 transition-transform" strokeWidth={2} />
            <span>Start Selling</span>
          </button>
        </div>

        {/* Feature Tags (VISIBLE ONLY ON MOBILE/TABLET to fill space) */}
        <div className="h-enter h-d6 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-md mx-auto lg:hidden">
          {["APIs", "Bots", "Scripts", "Codes", "Workflows", "Automation"].map((tag, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-black/40 border border-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-[#ccff00]/10 hover:border-[#ccff00]/40 cursor-default">
              <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full shadow-[0_0_8px_rgba(204,255,0,0.8)]"></div>
              <span className="font-inter text-[10px] sm:text-[11px] text-white/80 font-semibold tracking-wide">{tag}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-3 sm:right-4 md:right-6 z-30 flex items-center justify-end">
        <div className="flex items-center gap-3 sm:gap-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]">
          <button onClick={togglePlay} aria-label={isPlaying ? "Pause video" : "Play video"} className="text-white/80 hover:text-[#ccff00] transition-colors duration-300 active:scale-90 outline-none focus:outline-none">
            {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" strokeWidth={2} />}
          </button>
          <div className="w-px h-4 sm:h-5 bg-white/10"></div>
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {videos.map((_, index) => (
              <button key={index} onClick={() => switchVideo(index)} aria-label={`Play video ${index + 1}`} className={`rounded-full transition-all duration-500 ease-out outline-none focus:outline-none ${currentVideo === index ? "w-5 h-[4px] sm:w-9 sm:h-[6px] bg-[#ccff00] shadow-[0_0_12px_rgba(204,255,0,0.6)]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/80 hover:scale-125"}`} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}