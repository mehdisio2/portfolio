"use client";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Globe, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative w-full bg-background overflow-hidden">
            {/* Background Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">

                    {/* Left Column - Content (60% -> span 3) */}
                    <div className="lg:col-span-3 flex flex-col items-start text-left z-10">
                        <span className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                            Digital Infrastructure for Private Practice
                        </span>

                        <h1 className="mb-6 text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-tight">
                            High-Performance Digital Infrastructure for Private Practice.
                        </h1>

                        <p className="mb-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Specialized consultant helping practices in the US, Switzerland, and the Gulf streamline patient access while ensuring absolute compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 w-full">
                            <button className="h-12 px-8 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-sm">
                                Book Consultation
                            </button>

                            <Link
                                href="#"
                                className="group flex items-center text-foreground font-medium hover:text-primary transition-colors"
                            >
                                View Telemedicine Case Study
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-foreground/60 text-sm font-medium border-t border-border pt-8 w-full">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                                <span>HIPAA Ready</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                                <span>Bank-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                                <span>Native Arabic Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Architect's Overlay Visualization */}
                    <div className="lg:col-span-2 relative mt-8 lg:mt-0 overflow-visible">

                        {/* Image Container - Relative for absolute card positioning */}
                        <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">

                            {/* LAYER 0: The Ambient Glow (Aura) */}
                            <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] bg-muted/40 rounded-full blur-3xl" />

                            {/* LAYER 1: The Person (Base Layer) */}
                            <div className="relative z-0 w-[240px] sm:w-[320px] lg:w-[500px]">
                                <Image
                                    src="/consultant-profile.png"
                                    alt="Clinical Systems Architect"
                                    width={1200}
                                    height={1200}
                                    priority
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>

                            {/* LAYER 2: Floating Glass Cards (All Breakpoints - Responsive Positioning) */}

                            {/* Card 1: Patient Growth (Top Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: [0, -8, 0] }}
                                transition={{
                                    opacity: { delay: 0.3, duration: 0.6 },
                                    y: { delay: 0.9, duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute z-20 transform transition-all duration-500
                                    top-4 -right-2 scale-[0.7] origin-top-right
                                    md:top-[33%] md:-right-8 md:scale-100"
                            >
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/70">
                                                <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
                                                <polyline points="16,7 22,7 22,13" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-medium text-foreground/60 uppercase tracking-wide">Patient Growth</span>
                                    </div>
                                    {/* Mini Line Graph SVG */}
                                    <svg width="120" height="40" viewBox="0 0 120 40" className="mb-2">
                                        <polyline
                                            points="0,35 20,30 40,25 60,28 80,15 100,12 120,5"
                                            fill="none"
                                            stroke="hsl(var(--foreground))"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            opacity="0.6"
                                        />
                                        <circle cx="120" cy="5" r="3" fill="hsl(var(--foreground))" opacity="0.8" />
                                    </svg>
                                    <span className="text-sm font-semibold text-foreground">Patient Acquisition: <span className="text-foreground/80">+24%</span></span>
                                </div>
                            </motion.div>

                            {/* Card 2: Appointment Card (Left Side) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: [0, -6, 0] }}
                                transition={{
                                    opacity: { delay: 0.5, duration: 0.6 },
                                    y: { delay: 1.2, duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute z-20 transform transition-all duration-500
                                    top-1/2 -translate-y-1/2 -left-2 scale-[0.7] origin-left
                                    md:top-1/2 md:-translate-y-1/2 md:-left-10 md:scale-100"
                            >
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl min-w-[180px]">
                                    <div className="flex items-center gap-3 mb-3">
                                        {/* Doctor Avatar */}
                                        <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center border border-foreground/10">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/60">
                                                <circle cx="12" cy="8" r="4" />
                                                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-foreground">Dr. Sarah Chen</span>
                                            <span className="text-xs text-foreground/50">Dermatology</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/50">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12,6 12,12 16,14" />
                                            </svg>
                                            <span className="text-xs font-medium text-foreground/60 mr-2">10:00 AM</span>
                                        </div>
                                        <span className="text-xs font-medium text-foreground bg-foreground/10 px-2 py-0.5 rounded-full">Confirmed</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Security Badge (Bottom Right) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: [0, -10, 0] }}
                                transition={{
                                    opacity: { delay: 0.7, duration: 0.6 },
                                    y: { delay: 1.5, duration: 6, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute z-20 transform transition-all duration-500
                                    bottom-4 -right-2 scale-[0.7] origin-bottom-right
                                    md:bottom-12 md:right-0 md:scale-100"
                            >
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                                    <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-foreground/70" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold text-foreground">HIPAA Compliant</span>
                                        <span className="text-xs text-foreground/50">Infrastructure</span>
                                    </div>
                                    <CheckCircle2 className="w-4 h-4 text-foreground/60 ml-1" strokeWidth={1.5} />
                                </div>
                            </motion.div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
