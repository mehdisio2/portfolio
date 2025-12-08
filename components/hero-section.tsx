"use client";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, Globe, CheckCircle2 } from "lucide-react";

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

                        <h1 className="mb-6 text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                            I build secure digital clinics for high-performing doctors.
                        </h1>

                        <p className="mb-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Specialized consultant helping practices in the US, Switzerland, and the Gulf streamline patient access while ensuring absolute compliance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 w-full">
                            <button className="h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm">
                                Schedule Strategy Call
                            </button>

                            <Link
                                href="#"
                                className="group flex items-center text-foreground font-medium hover:text-primary transition-colors"
                            >
                                View Telemedicine Case Study
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-6 text-muted-foreground text-sm font-medium border-t border-border pt-8 w-full">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-muted-foreground" />
                                <span>HIPAA Ready</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-muted-foreground" />
                                <span>Bank-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-muted-foreground" />
                                <span>Native Arabic Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual Anchor (40% -> span 2) */}
                    <div className="lg:col-span-2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Layer 1: Aura Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse-slow"></div>

                        {/* Layer 2: The Person */}
                        <div className="relative z-0">
                            {/* Using Next.js Image for optimization, assuming the file is in public/ */}
                            <Image
                                src="/consultant_portrait.png"
                                alt="Consultant Portrait"
                                width={400}
                                height={500}
                                className="object-cover rounded-2xl shadow-sm relative z-10 mask-gradient-b"
                                priority
                            />
                        </div>

                        {/* Layer 3: Glass Card */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-card/90 backdrop-blur-md border border-border shadow-lg rounded-lg p-4 flex items-center gap-4 max-w-[260px] animate-float">
                            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Appointment Confirmed</p>
                                <p className="text-xs text-muted-foreground">Video consultation link sent.</p>
                            </div>
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
