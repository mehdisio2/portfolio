import React from 'react';
import { ArrowRight, Shield, Activity, Clock, Database, Video } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudy() {
    return (
        <main className="min-h-screen bg-[#0B0F19] text-slate-200 selection:bg-cyan-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <p className="text-cyan-400 font-mono text-sm tracking-widest mb-4 uppercase">
            // Selected Work
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                        Universal Telemedicine <br />
                        <span className="text-slate-400">Infrastructure.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        A multi-tenant digital hospital platform engineered to unify patient triage,
                        video consultations, and medical records into a single scalable "Operating System."
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        {['Next.js 16', 'Supabase RLS', 'WebRTC', 'TypeScript'].map((tech) => (
                            <span key={tech} className="px-3 py-1 border border-slate-800 rounded-full text-xs text-slate-400 font-mono">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. HIGH-IMPACT METRICS (Matching your homepage style) */}
            <section className="border-y border-slate-800 bg-[#0F1422]">
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: 'Video Latency', value: '< 1.2s', sub: 'Global Edge Network' },
                        { label: 'Compliance', value: '100%', sub: 'HIPAA/GDPR Ready' },
                        { label: 'Booking Flow', value: '3 Clicks', sub: 'Conversion Optimized' },
                        { label: 'Performance', value: '98/100', sub: 'Lighthouse Score' },
                    ].map((stat, i) => (
                        <div key={i}>
                            <h3 className="text-4xl font-serif text-white mb-1">{stat.value}</h3>
                            <p className="text-sm font-bold text-cyan-400 uppercase tracking-wider">{stat.label}</p>
                            <p className="text-xs text-slate-500 mt-1">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE "HOOK" - PROBLEM & SOLUTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-serif text-white mb-6">The Fragmentation Problem</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Private practices and multi-specialty clinics often rely on a "Frankenstein stack" of disconnected tools—Calendly for booking, Zoom for calls, and paper/EMR for notes.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        This fragmentation creates data silos, increases administrative overhead, and forces patients to download multiple apps just to see a doctor.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-serif text-white mb-6">The Unified Solution</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        I architected a <span className="text-white font-medium">Zero-Trust Clinical OS</span> that centralizes the entire patient lifecycle.
                    </p>
                    <ul className="space-y-4 mt-8">
                        <li className="flex items-start gap-3">
                            <Activity className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Multi-Specialty Routing (Dental, Derma, GP)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Role-Based Access Control (Patient vs Doctor views)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Real-time "Up Next" Queue Management</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 4. VIDEO WALKTHROUGH (The centerpiece) */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-2xl shadow-2xl overflow-hidden">
                    {/* PLACEHOLDER FOR LOOM EMBED */}
                    <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <span className="z-20 border border-white/20 bg-white/10 backdrop-blur px-6 py-3 rounded-full text-white font-medium group-hover:bg-white group-hover:text-black transition-all">
                            ▶ Watch 30s System Walkthrough
                        </span>
                        {/* Embed your Loom iframe here with w-full h-full */}
                    </div>
                </div>
            </section>

            {/* 5. VISUAL FEATURE GRID (Bento Style) */}
            <section className="py-24 bg-[#0F1422] border-t border-slate-800">
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-serif text-white mb-4">Engineered for Scale</h2>
                        <p className="text-slate-400">Key technical implementations driving the platform.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {/* LARGE CARD: Doctor Dashboard */}
                        <div className="md:col-span-2 md:row-span-2 bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-600 transition-colors">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif text-white mb-2">Clinician Command Center</h3>
                                <p className="text-slate-400 max-w-sm">A unified dashboard handling patient queues, medical history, and visual triage in real-time.</p>
                            </div>
                            {/* Put your Dashboard Screenshot here as an <img /> */}
                            <img src="/doctor-dashboard.png" alt="clinician-dashboard" />
                        </div>

                        {/* SMALL CARD: Security */}
                        <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-600 transition-colors">
                            <Database className="w-10 h-10 text-cyan-400" />
                            <div>
                                <h3 className="text-xl font-serif text-white mt-4 mb-2">Zero-Trust Data</h3>
                                <p className="text-slate-400 text-sm">Row Level Security (RLS) ensures total isolation between patient records.</p>
                            </div>
                        </div>

                        {/* SMALL CARD: Video */}
                        <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-600 transition-colors">
                            <Video className="w-10 h-10 text-cyan-400" />
                            <div>
                                <h3 className="text-xl font-serif text-white mt-4 mb-2">Embedded Video</h3>
                                <p className="text-slate-400 text-sm">Custom Jitsi implementation with removed "bloat" features for professional use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNICAL DEEP DIVE */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-white mb-12">Architecture Highlights</h2>

                <div className="space-y-12">
                    <div className="group">
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <span className="text-cyan-400 font-mono">01.</span>
                            Strict Type Safety via Supabase
                        </h3>
                        <p className="text-slate-400 mb-6 pl-8">
                            Database schema is automatically introspected to generate TypeScript definitions, ensuring end-to-end type safety from the Postgres DB to the React Client.
                        </p>
                        {/* Simple Mock Code Block */}
                        <div className="pl-8">
                            <div className="bg-[#0F1422] p-6 rounded-lg border border-slate-800 font-mono text-sm overflow-x-auto text-slate-300">
                                <p><span className="text-purple-400">interface</span> <span className="text-yellow-200">Appointment</span> {'{'}</p>
                                <p className="pl-4">id: <span className="text-blue-400">string</span>;</p>
                                <p className="pl-4">patient_id: <span className="text-blue-400">string</span>; <span className="text-slate-500">// FK to auth.users</span></p>
                                <p className="pl-4">status: <span className="text-green-400">'scheduled'</span> | <span className="text-green-400">'completed'</span>;</p>
                                <p>{'}'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FOOTER CTA */}
            <section className="py-32 text-center border-t border-slate-800">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to scale your <br />infrastructure?</h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-cyan-50 transition-colors"
                >
                    Book a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

        </main>
    );
}