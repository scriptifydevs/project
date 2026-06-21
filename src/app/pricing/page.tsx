"use client";

import React, { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#0e1014] text-[#d1d5dbe6] font-inter py-24 relative overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00e19b]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
          <h1 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] mb-6 tracking-tight leading-tight">
            Stealth. Precision. <span className="text-[#00e19b]">Unmatched Intelligence.</span>
          </h1>
          <p className="text-[#9ca3af8c] text-lg max-w-2xl mx-auto mb-10">
            Deploy advanced OSINT capabilities with pricing built for transparency and scale. No hidden fees.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center gap-4 bg-[#ffffff0d] p-1.5 rounded-xl border border-[hsla(0,0%,100%,0.12)]">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-[#9ca3af8c]'}`}>Monthly</span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-[2.75rem] h-[1.5rem] rounded-lg transition-colors duration-200 focus:outline-none flex items-center px-[3px]"
              style={{ backgroundColor: isAnnual ? '#00e19b' : '#ffffff26' }}
            >
              <div
                className={`w-[1.1rem] h-[1.1rem] bg-white rounded shadow-sm transition-transform duration-200 transform ${
                  isAnnual ? 'translate-x-[1.3rem]' : 'translate-x-0'
                }`}
              />
            </button>
            
            <span className={`text-sm font-semibold flex items-center gap-2 transition-colors ${isAnnual ? 'text-white' : 'text-[#9ca3af8c]'}`}>
              Annually
              <span className="bg-[#04e19c24] border border-[rgba(34,197,94,0.28)] text-[#00e19b] text-[0.72rem] font-bold tracking-[0.01em] px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl items-start">
          
          {/* Base Plan */}
          <div className="bg-transparent rounded-xl border border-[hsla(0,0%,100%,0.12)] p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
            <h3 className="font-space text-[#ffffff] text-[1.125rem] font-bold mb-2">Recon</h3>
            <div className="text-[#9ca3af8c] text-sm mb-6">Essential intelligence for individuals.</div>
            <div className="mb-8 flex items-end gap-1">
              <span className="text-[#ffffff] text-4xl font-bold font-space">${isAnnual ? '29' : '39'}</span>
              <span className="text-[#9ca3af8c] mb-1">/mo</span>
            </div>
            
            <button className="w-full py-[0.65rem] px-4 rounded-lg font-inter font-bold text-[0.875rem] bg-[#ffffff14] border border-[hsla(0,0%,100%,0.1)] text-[#ffffff] hover:bg-[#ffffff21] transition-all duration-150 mb-8">
              Start Recon
            </button>

            <div className="flex flex-col gap-4">
              <div className="text-[#ffffff] text-sm font-bold mb-2">Features include:</div>
              {['Basic target profiling', 'Public web scraping', '50 queries per day', 'Standard email support'].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00e19b] shrink-0" />
                  <span className="text-[0.875rem] text-[#d1d5dbe6]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="relative rounded-[0.75rem] p-[1px] shadow-primary-btn animate-glow-pulse group">
            {/* Gradient Border Mask */}
            <div className="absolute inset-0 rounded-[0.75rem] bg-gradient-to-br from-[#ffffff24] to-transparent pointer-events-none"></div>
            
            <div className="relative h-full bg-[linear-gradient(145deg,#005c3fd9,#0e1014f2)] rounded-[0.75rem] p-8 flex flex-col overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 right-0 bg-[#00e19b] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              
              <h3 className="font-space text-[#ffffff] text-[1.125rem] font-bold mb-2">Operative</h3>
              <div className="text-[#9ca3af8c] text-sm mb-6">Advanced capabilities for dedicated teams.</div>
              <div className="mb-8 flex items-end gap-1">
                <span className="text-[#ffffff] text-4xl font-bold font-space">${isAnnual ? '99' : '129'}</span>
                <span className="text-[#9ca3af8c] mb-1">/mo</span>
              </div>
              
              <button className="w-full py-[0.65rem] px-4 rounded-lg font-inter font-bold text-[0.875rem] bg-[#00e19b] text-[#000000] shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_8px_18px_-6px_rgba(0,225,155,0.5)] hover:brightness-105 transition-all duration-150 mb-8">
                Deploy Operative
              </button>

              <div className="flex flex-col gap-4">
                <div className="text-[#ffffff] text-sm font-bold mb-2">Everything in Recon, plus:</div>
                {['Deep web monitoring', 'Automated threat scoring', 'Unlimited daily queries', 'Priority 24/7 support', 'API access'].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00e19b] shrink-0" />
                    <span className="text-[0.875rem] text-[#d1d5dbe6]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-transparent rounded-xl border border-[hsla(0,0%,100%,0.12)] p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
            <h3 className="font-space text-[#ffffff] text-[1.125rem] font-bold mb-2">Syndicate</h3>
            <div className="text-[#9ca3af8c] text-sm mb-6">Custom architecture for enterprise scale.</div>
            <div className="mb-8 flex items-end gap-1">
              <span className="text-[#ffffff] text-4xl font-bold font-space">Custom</span>
            </div>
            
            <button className="w-full py-[0.65rem] px-4 rounded-lg font-inter font-bold text-[0.875rem] bg-[#ffffff14] border border-[hsla(0,0%,100%,0.1)] text-[#ffffff] hover:bg-[#ffffff21] transition-all duration-150 mb-8">
              Contact Command
            </button>

            <div className="flex flex-col gap-4">
              <div className="text-[#ffffff] text-sm font-bold mb-2">Everything in Operative, plus:</div>
              {['Dedicated threat analyst', 'On-premise deployment', 'Custom integrations', 'SLA guarantee'].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00e19b] shrink-0" />
                  <span className="text-[0.875rem] text-[#d1d5dbe6]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Money-Back Guarantee Shield */}
        <div className="mt-20 flex items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center w-[42px] h-[48px] relative shrink-0 sm:w-[42px] sm:h-[48px] max-sm:w-[30px] max-sm:h-[34px]">
            <ShieldCheck className="w-full h-full text-[#00e19b] absolute inset-0" strokeWidth={1.5} />
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-0.5">
              <span className="text-[#000000] font-black text-[1.15rem] leading-none max-sm:text-[0.85rem]">14</span>
              <span className="text-[#000000a6] font-extrabold text-[0.5rem] tracking-[0.1em] leading-none uppercase max-sm:text-[0.38rem]">Days</span>
            </div>
          </div>
          <div className="text-left max-sm:inline-flex max-sm:items-baseline max-sm:whitespace-nowrap">
            <div className="text-[#ffffff] font-bold text-sm">14-Day Money-Back Guarantee</div>
            <div className="text-[#9ca3af8c] text-xs mt-0.5">Full refund if our intel doesn't meet your standard.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
