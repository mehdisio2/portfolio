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
            // PROJET SÉLECTIONNÉ
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                        Infrastructure Universelle <br />
                        <span className="text-slate-400">de Télémédecine.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        Une plateforme hospitalière numérique multi-entités conçue pour unifier le triage des patients, les consultations vidéo et les dossiers médicaux en un "Système d'Exploitation" unique et évolutif.
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
                        { label: 'Latence Vidéo', value: '< 1.2s', sub: 'Réseau Global Edge' },
                        { label: 'Conformité', value: '100%', sub: 'Conforme CNDP/RGPD' },
                        { label: 'Réservation', value: '3 Clics', sub: 'Optimisé pour la Conversion' },
                        { label: 'Performance', value: '98/100', sub: 'Score Lighthouse' },
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
                    <h2 className="text-3xl font-serif text-white mb-6">Le Problème de Fragmentation</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Les cabinets privés et les cliniques multi-spécialités s'appuient souvent sur une architecture hétéroclite composée d'outils déconnectés : Calendly pour les rendez-vous, Zoom pour la vidéo et le papier pour les dossiers.
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                        Cette fragmentation génère des silos de données, alourdit les tâches administratives et oblige les patients à multiplier les applications pour une simple consultation.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-serif text-white mb-6">La Solution Unifiée</h2>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Nous avons conçu un <span className="text-white font-medium">Système d'Exploitation Clinique Zero-Trust</span> qui centralise l'intégralité du parcours patient.
                    </p>
                    <ul className="space-y-4 mt-8">
                        <li className="flex items-start gap-3">
                            <Activity className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Routage Multi-Spécialités (Dentaire, Derma, Généraliste)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Contrôle d'Accès par Rôles (Vue Patient vs Médecin)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-cyan-400 mt-1" />
                            <span className="text-slate-300">Gestion de la File d'Attente en Temps Réel</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 4. VIDEO WALKTHROUGH (The centerpiece) */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="bg-slate-900/50 border border-slate-800 p-2 rounded-2xl shadow-2xl overflow-hidden">
                    {/* PLACEHOLDER FOR LOOM EMBED */}
                    <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center relative group cursor-pointer">
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                        <span className="z-20 border border-white/20 bg-white/10 backdrop-blur px-6 py-3 rounded-full text-white font-medium group-hover:bg-white group-hover:text-black transition-all">
                            ▶ Voir la Démonstration (30s)
                        </span>
                        {/* Embed your Loom iframe here with w-full h-full */}
                    </div>
                </div>
            </section>

            {/* 5. VISUAL FEATURE GRID (Bento Style) */}
            <section className="py-24 bg-[#0F1422] border-t border-slate-800">
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-serif text-white mb-4">Conçu pour Évoluer</h2>
                        <p className="text-slate-400">Implémentations techniques clés au cœur de la plateforme.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {/* LARGE CARD: Doctor Dashboard */}
                        <div className="md:col-span-2 md:row-span-2 bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-600 transition-colors">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif text-white mb-2">Centre de Commande Clinicien</h3>
                                <p className="text-slate-400 max-w-sm">Un tableau de bord unifié gérant les files d'attente, l'historique médical et le triage visuel en temps réel.</p>
                            </div>
                            {/* Put your Dashboard Screenshot here as an <img /> */}
                            <img src="/doctor-dashboard.png" alt="clinician-dashboard" />
                        </div>

                        {/* SMALL CARD: Security */}
                        <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-slate-600 transition-colors">
                            <div className="relative z-10">
                                <Database className="w-10 h-10 text-cyan-400" />
                                <h3 className="text-xl font-serif text-white mt-4 mb-2">Données Zero-Trust</h3>
                                <p className="text-slate-400 text-sm">La sécurité au niveau des lignes (RLS) garantit une isolation totale entre les dossiers patients.</p>
                            </div>
                            <img src="/database-rls.png" alt="Row Level Security Diagram" className="mt-4" />
                        </div>

                        {/* SMALL CARD: Video */}
                        <div className="bg-[#0B0F19] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-600 transition-colors">
                            <Video className="w-10 h-10 text-cyan-400" />
                            <div>
                                <h3 className="text-xl font-serif text-white mt-4 mb-2">Vidéo Intégrée</h3>
                                <p className="text-slate-400 text-sm">Implémentation de Jitsi sur mesure, allégée pour un usage strictement professionnel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNICAL DEEP DIVE */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-white mb-12">Points Forts de l'Architecture</h2>

                <div className="space-y-12">
                    {/* 01. TYPE SAFETY */}
                    <div className="group">
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <span className="text-cyan-400 font-mono">01.</span>
                            Sécurité de Typage Stricte via Supabase
                        </h3>
                        <p className="text-slate-400 mb-6 pl-8">
                            Le schéma de base de données est introspecté automatiquement pour générer les définitions TypeScript, garantissant la sûreté du code de bout en bout, de PostgreSQL au client React.
                        </p>
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

                    {/* 02. REAL-TIME SYNC */}
                    <div className="group">
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <span className="text-cyan-400 font-mono">02.</span>
                            État Temps Réel Orienté Événements
                        </h3>
                        <p className="text-slate-400 mb-6 pl-8">
                            Utilisation du journal de réplication de Supabase (WAL) pour envoyer instantanément les changements de BDD au client par WebSockets. La salle d'attente se met à jour en direct, sans polling.
                        </p>
                        <div className="pl-8">
                            <div className="bg-[#0F1422] p-6 rounded-lg border border-slate-800 font-mono text-sm overflow-x-auto text-slate-300">
                                <p><span className="text-purple-400">const</span> channel = supabase</p>
                                <p className="pl-4">.channel(<span className="text-green-400">'room-updates'</span>)</p>
                                <p className="pl-4">.on(<span className="text-green-400">'postgres_changes'</span>, event ={'>'} {'{'}</p>
                                <p className="pl-8"><span className="text-blue-400">refreshQueue</span>(event.new);</p>
                                <p className="pl-4">{'}'})</p>
                                <p className="pl-4">.subscribe();</p>
                            </div>
                        </div>
                    </div>

                    {/* 03. SECURITY ARCHITECTURE */}
                    <div className="group">
                        <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                            <span className="text-cyan-400 font-mono">03.</span>
                            Isolation des Données Côté Serveur
                        </h3>
                        <p className="text-slate-400 mb-6 pl-8">
                            Les dossiers médicaux sensibles sont appelés exclusivement via les <strong>Composants Serveurs</strong>. Ainsi, les tokens d'authentification et les données JSON brutes ne sont jamais exposés au navigateur client.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. FOOTER CTA */}
            <section className="py-32 text-center border-t border-slate-800">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Prêt à faire évoluer votre <br />infrastructure ?</h2>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-cyan-50 transition-colors"
                >
                    Réserver une Consultation <ArrowRight className="w-4 h-4" />
                </Link>
            </section>

        </main>
    );
}