"use client";
import Link from "next/link";
import { Shield, Lock, Globe } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full bg-background overflow-hidden min-h-[90vh] flex items-center">
            {/* Background Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="relative max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center z-10 w-full">
                {/* Ambient Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-muted/40 rounded-full blur-3xl -z-10 pointer-events-none" />

                <span className="mb-6 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Infrastructure Digitale pour Cliniques & Cabinets Privés
                </span>

                <h1 className="mb-6 text-5xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-tight px-4 max-w-4xl">
                    Infrastructure Digitale & Conformité pour la Santé au Maroc.
                </h1>

                <p className="mb-10 text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    Préparez votre cabinet pour la feuille de soins électronique (CNSS) et la loi 09-08. Nous fusionnons présence web, automatisation WhatsApp et conformité CNDP dans une solution unique.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full">
                    <Link
                        href="https://cal.com/el-mahdi-badilou-qflogf/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-12 px-8 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-sm"
                    >
                        Réserver une Consultation
                    </Link>

                    <Link
                        href="/work/telemed"
                        className="group flex items-center text-foreground font-medium hover:text-primary transition-colors"
                    >
                        Voir l'Étude de Cas Télémedecine
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-foreground/60 text-sm font-medium border-t border-border pt-10 w-full max-w-3xl">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                        <span>Conforme CNDP</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                        <span>Sécurité Bancaire</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-foreground/50" strokeWidth={1.5} />
                        <span>Bilingue (Darija & Français)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

