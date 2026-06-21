"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react'; // Removed Sparkles
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Market Research', href: '/market-research', isSpecial: true },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <>
      {/* --- ALL FONTS SET TO MONO & CUSTOM GREEN SCROLLBAR CSS --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Imported ONLY JetBrains Mono for the entire Navbar */
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap');
        
        ::-webkit-scrollbar {
          width: 6px; 
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #000000; 
        }
        ::-webkit-scrollbar-thumb {
          background: #ccff00; 
          border-radius: 10px; 
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b3e600; 
          box-shadow: 0 0 10px #ccff00; 
        }
      `}} />

      {/* --- MAIN NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full h-[60px] z-[100] bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* --- LOGO SECTION --- */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group cursor-pointer">
              {/* Logo Image */}
              <img
                src="/logo.png"
                alt="ScriptifyDevs Logo"
                className="h-9 sm:h-10 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Text Container (ALL MONO) */}
              <div className="flex flex-col justify-center">
                <span className="font-['JetBrains_Mono'] text-white font-extrabold text-[18px] sm:text-[20px] tracking-tight leading-none drop-shadow-sm">
                  Scriptify<span className="text-[#ccff00]">Devs</span>
                </span>
                <span className="font-['JetBrains_Mono'] text-[#a1a1aa] text-[9px] font-bold tracking-[0.1em] uppercase leading-none mt-1 group-hover:text-white transition-colors duration-300">
                  Devs Marketplace
                </span>
              </div>
            </Link>

            {/* --- DESKTOP MENU (ALL MONO, NO ICONS) --- */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-['JetBrains_Mono'] relative transition-all duration-300 text-[14px] font-semibold flex items-center gap-1.5 py-2 tracking-tight",
                    link.isSpecial
                      ? "text-[#ccff00] hover:text-[#e0ff4d] drop-shadow-[0_0_8px_rgba(204,255,0,0.3)] hover:drop-shadow-[0_0_12px_rgba(204,255,0,0.6)]"
                      : "text-[#a1a1aa] hover:text-white"
                  )}
                >
                  {/* Icon removed completely */}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* --- DESKTOP ACTION BUTTONS (ALL MONO) --- */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button className="font-['JetBrains_Mono'] flex items-center gap-2 text-[#e4e4e7] bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-[#ccff00]/40 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300">
                <BookOpen className="h-3.5 w-3.5 text-[#ccff00]" />
                Dev Docs
              </button>

              <button className="font-['JetBrains_Mono'] group relative flex items-center gap-1.5 bg-[#ccff00] hover:bg-[#b3e600] text-black px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.15)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:-translate-y-0.5 overflow-hidden">
                <span className="relative z-10 flex items-center gap-1">
                  Login
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Glare Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out z-0"></div>
              </button>
            </div>

            {/* --- MOBILE MENU TOGGLE ICON --- */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-9 h-9 flex flex-col items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.05] text-white hover:bg-white/[0.08] active:scale-95 transition-all duration-300 z-[110]"
                aria-label="Toggle menu"
              >
                <div className={cn("flex flex-col justify-between w-4 h-3.5 transition-transform duration-500 ease-in-out", isOpen && "rotate-180")}>
                  <span className={cn("block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-left", isOpen && "rotate-45 translate-x-[1.5px] -translate-y-[1px] bg-[#ccff00]")}></span>
                  <span className={cn("block h-[2px] w-full bg-current rounded-full transition-all duration-300", isOpen && "opacity-0")}></span>
                  <span className={cn("block h-[2px] w-full bg-current rounded-full transition-all duration-300 origin-left", isOpen && "-rotate-45 translate-x-[1.5px] translate-y-[1px] bg-[#ccff00]")}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- ULTRA PREMIUM MOBILE FULL-SCREEN MENU --- */}
      <div
        className={cn(
          "fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-gradient-to-b from-[#0a0a0a] to-[#000000] z-[90] transition-all duration-500 ease-out lg:hidden overflow-y-auto",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 min-h-full">

          {/* Mobile Links as Modern Cards (ALL MONO, NO ICONS) */}
          <div className="flex flex-col gap-3 mt-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={cn(
                  "font-['JetBrains_Mono'] relative flex items-center justify-between px-5 py-4 rounded-2xl text-[16px] font-semibold transition-all duration-300 group overflow-hidden border",
                  link.isSpecial
                    ? "bg-[#ccff00]/[0.03] border-[#ccff00]/20 text-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.05)] hover:bg-[#ccff00]/10"
                    : "bg-[#0f0f0f] border-white/[0.04] text-[#a1a1aa] hover:text-white hover:border-white/[0.08]"
                )}
              >
                <div className="flex items-center gap-3 relative z-10">
                  {/* Icon removed completely */}
                  <span className="relative z-10 tracking-tight">{link.name}</span>
                </div>

                <ChevronRight className={cn(
                  "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                  link.isSpecial ? "text-[#ccff00]" : "text-white/20 group-hover:text-[#ccff00]"
                )} />
              </Link>
            ))}
          </div>

          {/* Mobile Bottom Action Buttons (ALL MONO) */}
          <div className="mt-auto pt-8 flex flex-col gap-3 pb-8">
            <button className="font-['JetBrains_Mono'] w-full flex items-center justify-center gap-2 text-[#e4e4e7] bg-[#111111] hover:bg-[#1a1a1a] border border-white/5 px-4 py-4 rounded-2xl text-[14px] font-semibold transition-colors">
              <BookOpen className="h-4 w-4 text-[#ccff00]" />
              Developer Docs
            </button>
            <button className="font-['JetBrains_Mono'] w-full flex items-center justify-center gap-2 bg-[#ccff00] text-black px-4 py-4 rounded-2xl text-[14px] font-bold shadow-[0_0_25px_rgba(204,255,0,0.2)] active:scale-95 transition-all">
              Login
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}