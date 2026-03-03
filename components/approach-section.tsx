export function ApproachSection() {
    const steps = [
        {
            phase: "// PHASE_01 : DIAGNOSTIC",
            headline: "Le Diagnostic Digital",
            body: "Nous commençons par un audit approfondi de votre concurrence locale et des opportunités SEO. Nous identifions exactement où les revenus vous échappent avant de proposer un périmètre technique.",
            output: "[ LIVRABLE: DOCUMENT_STRATEGIE.PDF ]",
        },
        {
            phase: "// PHASE_02 : ARCHITECTURE",
            headline: "Ingénierie Système",
            body: "Pas de modèles préconçus. Nous concevons des environnements cliniques sur mesure avec Next.js. La base de données est conçue pour la conformité CNDP et des temps de chargement ultra-rapides.",
            output: "[ STACK: NEXT.JS / SUPABASE ]",
        },
        {
            phase: "// PHASE_03 : INTÉGRATION",
            headline: "Déploiement Continu",
            body: "Lancement sans interruption. Nous gérons la migration de domaine et fournissons un support technique direct pour nous assurer que votre personnel d'accueil est prêt dès le premier jour.",
            output: "[ STATUT: EN_PRODUCTION ]",
        },
    ]

    return (
        <section id="approach" className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Subtle dot grid background pattern */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20 lg:mb-24">
                    {/* Eyebrow Label */}
                    <p className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase mb-4">Le Protocole Technique</p>
                    {/* Large Serif Headline */}
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#0f172a] tracking-tight">
                        Le Standard de Développement Clinique.
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="relative">
                    {/* Horizontal connector line - desktop only */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
                        <div className="h-px bg-slate-200 mx-16" />
                        {/* Node between card 1-2 */}
                        <div className="absolute left-[33%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 border-2 border-white" />
                        {/* Node between card 2-3 */}
                        <div className="absolute left-[67%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 border-2 border-white" />
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.phase} className="relative h-full">
                                {/* Vertical connector line - mobile only */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden absolute left-1/2 -bottom-8 w-px h-8 bg-slate-200" />
                                )}

                                {/* Card */}
                                <div className="group relative h-full flex flex-col bg-white border border-slate-200 p-6 lg:p-8 transition-all duration-300 hover:border-slate-800 hover:shadow-lg hover:-translate-y-1">
                                    {/* Corner brackets - Top Left */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-slate-300 group-hover:border-slate-800 transition-colors duration-300" />
                                    {/* Corner brackets - Bottom Right */}
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-slate-300 group-hover:border-slate-800 transition-colors duration-300" />

                                    {/* Tech Label */}
                                    <p className="font-mono text-[10px] tracking-wide text-slate-400 mb-4">{step.phase}</p>

                                    {/* Headline */}
                                    <h3 className="font-serif text-xl lg:text-2xl text-slate-900 mb-4">{step.headline}</h3>

                                    {/* Body */}
                                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6 grow">{step.body}</p>

                                    {/* Bottom Spec */}
                                    <p className="font-mono text-[10px] tracking-wide text-slate-400">{step.output}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
