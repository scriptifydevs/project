"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Heart,
    Shield,
    FileText,
    Cookie,
    CreditCard,
    ArrowUpRight,
    ExternalLink,
    Mail,
    MapPin,
    Phone,
    Sparkles,
    ChevronRight,
    Globe,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    const [revealed, setRevealed] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && !window.IntersectionObserver) {
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
            { threshold: 0, rootMargin: "30px" }
        );

        const currentRef = footerRef.current;
        if (currentRef) obs.observe(currentRef);

        const timer = setTimeout(() => setRevealed(true), 1200);

        return () => {
            if (currentRef) obs.unobserve(currentRef);
            obs.disconnect();
            clearTimeout(timer);
        };
    }, []);

    if (!mounted) return null;

    const reveal = (delay: number) => ({
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    });

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    const navLinks = [
        { name: "Home", href: "/", icon: <Globe className="w-3 h-3" /> },
        { name: "Marketplace", href: "/marketplace", icon: <Sparkles className="w-3 h-3" /> },
        { name: "Market Research", href: "/market-research", isSpecial: true, icon: <ExternalLink className="w-3 h-3" /> },
        { name: "How it works", href: "/how-it-works", icon: <ChevronRight className="w-3 h-3" /> },
        { name: "Pricing", href: "/pricing", icon: <CreditCard className="w-3 h-3" /> },
    ];

    const policyLinks = [
        { name: "Terms of Service", href: "/terms-of-service", icon: <FileText className="w-3.5 h-3.5" />, desc: "Usage rules & agreements" },
        { name: "Privacy Policy", href: "/privacy-policy", icon: <Lock className="w-3.5 h-3.5" />, desc: "Data protection & rights" },
        { name: "Cookie Policy", href: "/cookie-policy", icon: <Cookie className="w-3.5 h-3.5" />, desc: "How we use cookies" },
        { name: "Credentials", href: "/credentials", icon: <Shield className="w-3.5 h-3.5" />, desc: "Security & certifications" },
    ];

    const socials = [
        { icon: <Github className="w-[18px] h-[18px]" />, label: "GitHub", href: "#", hoverColor: "#fff" },
        { icon: <Twitter className="w-[18px] h-[18px]" />, label: "Twitter", href: "#", hoverColor: "#1DA1F2" },
        { icon: <Linkedin className="w-[18px] h-[18px]" />, label: "LinkedIn", href: "#", hoverColor: "#0A66C2" },
        { icon: <Instagram className="w-[18px] h-[18px]" />, label: "Instagram", href: "#", hoverColor: "#E4405F" },
        { icon: <Youtube className="w-[18px] h-[18px]" />, label: "YouTube", href: "#", hoverColor: "#FF0000" }
    ];

    const contactInfo = [
        { icon: <Mail className="w-3.5 h-3.5" />, text: "hello@scriptifydevs.com", href: "mailto:hello@scriptifydevs.com" },
        { icon: <MapPin className="w-3.5 h-3.5" />, text: "Pakistan", href: "#" },
        { icon: <Phone className="w-3.5 h-3.5" />, text: "+92 300 1234567", href: "tel:+923001234567" },
    ];

    return (
        <footer
            ref={footerRef}
            className="relative w-full bg-[#0c0c0e] overflow-hidden font-sans selection:bg-[#ccff00]/30 selection:text-white"
        >
            {/* ════ BACKGROUND EFFECTS ════ */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft glow from top */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ccff00]/[0.02] rounded-full blur-[120px]" />
                {/* Bottom center glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ccff00]/[0.015] rounded-full blur-[100px]" />
                {/* Noise texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(204,255,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.2) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px"
                    }}
                />
            </div>

            {/* ════ TOP BORDER GLOW ════ */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00]/20 to-transparent" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* ══════════════════════════════════════════ */}
                {/* ════ CTA BANNER ════ */}
                {/* ══════════════════════════════════════════ */}
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-16 mb-14 md:mb-20" style={reveal(0)}>
                    <div className="mx-4 sm:mx-6 lg:mx-8 relative overflow-hidden rounded-2xl sm:rounded-[28px] border border-white/[0.05]"
                        style={{ background: "linear-gradient(135deg, #111114 0%, #0c0c0e 50%, #111114 100%)" }}
                    >
                        {/* Banner background effects */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-10 -right-10 w-[350px] h-[250px] bg-[#ccff00]/[0.04] rounded-full blur-[80px]" />
                            <div className="absolute -bottom-10 -left-10 w-[250px] h-[200px] bg-[#ccff00]/[0.02] rounded-full blur-[60px]" />
                            {/* Dot pattern */}
                            <div className="absolute inset-0 opacity-[0.025]"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, #ccff00 1px, transparent 0)`,
                                    backgroundSize: "24px 24px"
                                }}
                            />
                        </div>

                        <div className="relative z-10 p-7 sm:p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ccff00]/[0.08] border border-[#ccff00]/15 rounded-full mb-5">
                                    <Sparkles className="w-3 h-3 text-[#ccff00]" />
                                    <span className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#ccff00]">Join Now</span>
                                </div>
                                <h3 className="font-['JetBrains_Mono'] text-2xl sm:text-3xl md:text-[38px] font-extrabold text-white mb-3 tracking-tight leading-tight">
                                    Ready to ship<br className="hidden sm:block" /> your next project?
                                </h3>
                                <p className="font-['JetBrains_Mono'] text-[#71717a] text-[13px] max-w-md leading-relaxed">
                                    Join Pakistan&apos;s fastest-growing developer marketplace. Buy & sell code, automations, and AI solutions.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                <Link
                                    href="/marketplace"
                                    className="group relative px-7 py-3.5 bg-[#ccff00] text-black font-['JetBrains_Mono'] font-bold text-[13px] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                                >
                                    {/* Shimmer */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
                                            animation: "footerShimmer 2.5s ease-in-out infinite"
                                        }}
                                    />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore Marketplace
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </Link>
                                <Link
                                    href="/how-it-works"
                                    className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.08] text-white font-['JetBrains_Mono'] font-bold text-[13px] rounded-xl transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:scale-[1.03] active:scale-[0.97]"
                                >
                                    How it Works
                                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ══════════════════════════════════════════ */}
                {/* ════ MAIN FOOTER CONTENT ════ */}
                {/* ══════════════════════════════════════════ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 md:mb-20">

                    {/* ════ BRAND COLUMN ════ */}
                    <div className="sm:col-span-2 lg:col-span-4" style={reveal(50)}>
                        <Link href="/" className="inline-flex items-center gap-2.5 group cursor-pointer mb-5">
                            <img
                                src="/logo.png"
                                alt="ScriptifyDevs Logo"
                                className="h-11 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="flex flex-col justify-center">
                                <span className="font-['JetBrains_Mono'] text-white font-extrabold text-[22px] tracking-tight leading-none">
                                    Scriptify<span className="text-[#ccff00]">Devs</span>
                                </span>
                                <span className="font-['JetBrains_Mono'] text-[#71717a] text-[9px] font-bold tracking-[0.15em] uppercase leading-none mt-1.5 group-hover:text-zinc-400 transition-colors duration-300">
                                    Devs Marketplace
                                </span>
                            </div>
                        </Link>

                        <p className="font-['JetBrains_Mono'] text-[#71717a] text-[12px] max-w-[280px] leading-relaxed mb-6">
                            Pakistan&apos;s 1st marketplace for code and automation. Buy scripts, AI tools, and production-ready solutions.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-2.5 mb-6">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-2.5 font-['JetBrains_Mono'] text-[11px] text-[#52525b] hover:text-[#ccff00] transition-colors duration-300 group"
                                >
                                    <span className="text-[#ccff00]/30 group-hover:text-[#ccff00]/70 transition-colors duration-300">{item.icon}</span>
                                    {item.text}
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <form onSubmit={handleSubscribe} className="space-y-2.5">
                            <label className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525b] block">Stay Updated</label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3f3f46] pointer-events-none" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        className="w-full pl-9 pr-3 py-2.5 bg-[#16161a] border border-white/[0.05] rounded-lg font-['JetBrains_Mono'] text-[12px] text-white placeholder:text-[#3f3f46] outline-none focus:border-[#ccff00]/25 focus:shadow-[0_0_0_3px_rgba(204,255,0,0.05)] transition-all duration-300"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={subscribed}
                                    className="shrink-0 px-4 py-2.5 bg-[#ccff00] text-black font-['JetBrains_Mono'] font-bold text-[11px] rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(204,255,0,0.2)] hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {subscribed ? "✓" : "Go"}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* ════ NAVIGATION COLUMN ════ */}
                    <div className="sm:col-span-1 lg:col-span-2" style={reveal(120)}>
                        <h5 className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525b] mb-5 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#ccff00]/30" />
                            Navigation
                        </h5>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className={cn(
                                            "font-['JetBrains_Mono'] relative flex items-center gap-2 transition-all duration-300 text-[12px] font-semibold py-0.5 group",
                                            link.isSpecial
                                                ? "text-[#ccff00] hover:text-[#e0ff4d]"
                                                : "text-[#71717a] hover:text-white"
                                        )}
                                    >
                                        <span className={cn(
                                            "transition-all duration-300",
                                            link.isSpecial ? "text-[#ccff00]/50" : "text-[#3f3f46] group-hover:text-[#ccff00]/50"
                                        )}>
                                            {link.icon}
                                        </span>
                                        <span className="relative">
                                            {link.name}
                                            {link.isSpecial && (
                                                <span className="ml-1.5 inline-flex px-1.5 py-0.5 text-[7px] font-black uppercase tracking-wider bg-[#ccff00]/10 text-[#ccff00] rounded leading-none">
                                                    New
                                                </span>
                                            )}
                                            <span
                                                className="absolute -bottom-0.5 left-0 h-[1px] bg-[#ccff00] rounded-full transition-all duration-300"
                                                style={{ width: hoveredLink === link.name ? "100%" : "0%" }}
                                            />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ════ POLICY & CREDENTIALS COLUMN ════ */}
                    <div className="sm:col-span-1 lg:col-span-3" style={reveal(180)}>
                        <h5 className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525b] mb-5 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#ccff00]/30" />
                            Policies & Credentials
                        </h5>
                        <ul className="space-y-2">
                            {policyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className="group flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl transition-all duration-300 hover:bg-white/[0.02]"
                                    >
                                        <div className={cn(
                                            "mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300",
                                            hoveredLink === link.name
                                                ? "bg-[#ccff00]/[0.08] border-[#ccff00]/20 text-[#ccff00]"
                                                : "bg-white/[0.02] border-white/[0.04] text-[#3f3f46]"
                                        )}>
                                            {link.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="font-['JetBrains_Mono'] relative text-[12px] font-semibold text-[#71717a] group-hover:text-white transition-colors duration-300 block">
                                                {link.name}
                                                <span
                                                    className="absolute -bottom-0.5 left-0 h-[1px] bg-[#ccff00] rounded-full transition-all duration-300"
                                                    style={{ width: hoveredLink === link.name ? "100%" : "0%" }}
                                                />
                                            </span>
                                            <span className="font-['JetBrains_Mono'] text-[10px] text-[#3f3f46] block mt-0.5">{link.desc}</span>
                                        </div>
                                        <ArrowUpRight className="w-3 h-3 text-[#27272a] group-hover:text-[#ccff00] mt-1 shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ════ SOCIAL & STATS COLUMN ════ */}
                    <div className="sm:col-span-2 lg:col-span-3" style={reveal(240)}>
                        <h5 className="font-['JetBrains_Mono'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#52525b] mb-5 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#ccff00]/30" />
                            Connect
                        </h5>

                        {/* Social Grid */}
                        <div className="grid grid-cols-5 gap-1.5 mb-8">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="group relative w-full aspect-square flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.04] text-[#52525b] transition-all duration-300 hover:scale-105 hover:border-[#ccff00]/20 hover:bg-[#ccff00]/[0.04]"
                                    style={{
                                        // @ts-ignore
                                        "--hover-color": social.hoverColor
                                    }}
                                >
                                    <span className="transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                                        {social.icon}
                                    </span>
                                    {/* Tooltip */}
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a1e] border border-white/[0.08] rounded-md font-['JetBrains_Mono'] text-[9px] text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-1 group-hover:translate-y-0">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Mini Stats */}
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { num: "500+", label: "Scripts Sold" },
                                { num: "200+", label: "Developers" },
                                { num: "99%", label: "Satisfaction" },
                                { num: "24/7", label: "Support" }
                            ].map((stat, i) => (
                                <div key={i} className="p-3 bg-white/[0.015] border border-white/[0.03] rounded-xl">
                                    <span className="font-['JetBrains_Mono'] text-[16px] font-extrabold text-white block leading-none">{stat.num}</span>
                                    <span className="font-['JetBrains_Mono'] text-[9px] text-[#3f3f46] uppercase tracking-wider mt-1 block">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ════ TRUST STRIP ════ */}
                <div className="mb-10" style={reveal(320)}>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-5 px-4 bg-white/[0.01] border border-white/[0.03] rounded-2xl">
                        {[
                            { icon: <Shield className="w-4 h-4" />, text: "SSL Encrypted" },
                            { icon: <Lock className="w-4 h-4" />, text: "Secure Payments" },
                            { icon: <FileText className="w-4 h-4" />, text: "Verified Sellers" },
                            { icon: <Globe className="w-4 h-4" />, text: "Global Reach" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-[#3f3f46]">
                                <span className="text-[#ccff00]/30">{item.icon}</span>
                                <span className="font-['JetBrains_Mono'] text-[10px] font-semibold uppercase tracking-wider">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ════ DIVIDER ════ */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent mb-6" />

                {/* ════ BOTTOM BAR ════ */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-10 md:pb-14" style={reveal(400)}>
                    {/* Left - Copyright */}
                    <div className="font-['JetBrains_Mono'] flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-[10px] text-[#3f3f46]">
                        <span>© {new Date().getFullYear()} <span className="font-bold text-[#52525b]">ScriptifyDevs</span>® Pakistan. All rights reserved.</span>
                    </div>

                    {/* Center - Made with love */}
                    <div className="font-['JetBrains_Mono'] flex items-center gap-1.5 text-[10px] text-[#27272a]">
                        <span>Built with</span>
                        <Heart className="w-3 h-3 text-[#ccff00]/40 fill-[#ccff00]/40" />
                        <span>in Pakistan</span>
                    </div>

                    {/* Right - Legal quick links */}
                    <div className="flex items-center gap-0.5">
                        {["Terms", "Privacy", "Cookies", "Credentials"].map((item, i) => (
                            <React.Fragment key={item}>
                                {i > 0 && <span className="font-['JetBrains_Mono'] text-[#27272a] mx-1.5 text-[10px]">·</span>}
                                <Link
                                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                    className="font-['JetBrains_Mono'] text-[10px] text-[#3f3f46] hover:text-[#ccff00] transition-colors duration-300 px-1 py-0.5"
                                >
                                    {item}
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes footerShimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                `
            }} />
        </footer >
    );
}