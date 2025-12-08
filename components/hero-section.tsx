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

                    {/* Right Column - Visual Anchor (40% -> span 2) */}
                    <div className="lg:col-span-2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-full h-[500px] flex items-center justify-center">

                            {/* LAYER 1: The Ambient Glow (Aura) - Subtle grey for monochrome */}
                            <div className="absolute w-[350px] h-[350px] bg-muted/50 rounded-full blur-3xl -z-10" />

                            {/* LAYER 2: The Person (Transparent PNG) */}
                            <div className="relative z-10 w-[600px] -mt-20">
                                <Image
                                    src="/consultant-profile.png"
                                    alt="Clinical Consultant"
                                    width={1200}
                                    height={1200}
                                    priority
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>

                            {/* LAYER 3: The Frosted Glass Card (Coded Overlay) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-10 -left-4 z-20"
                            >
                                {/* THE GLASS CARD STYLING - Adapted to Theme */}
                                <div className="flex items-center gap-4 p-4 pr-8 rounded-2xl bg-card/70 backdrop-blur-md border border-border/50 shadow-xl ring-1 ring-border/50">

                                    {/* Icon Box */}
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-foreground">
                                            Appointment Confirmed
                                        </span>
                                        <span className="text-xs text-muted-foreground font-medium mt-0.5">
                                            Video link sent to patient
                                        </span>
                                    </div>

                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom Styles for animations if not in tailwind config */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
