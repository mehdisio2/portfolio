import { Check } from "lucide-react"

const engagementModels = [
    {
        title: "Modernisation de Cabinet Legacy",
        subtitle: "Rôle : Équipe Agence",
        description:
            "Pour les cabinets freinés par des sites web lents et génériques. Nous auditons et reconstruisons votre présence numérique avec un code haute performance, garantissant un chargement instantané de votre site et le respect de toutes les normes SEO techniques.",
        features: [
            { name: "Migration de fichiers Excel vers Cloud Sécurisé", detail: null },
            { name: "Intégration de passerelles de paiement locales", detail: null },
            { name: "Archivage numérique conforme", detail: null },
            { name: "Optimisation du Tunnel de Réservation", detail: null },
        ],
        bestFor: "Cabinets Privés / Dentaires / Dermato",
    },
    {
        title: "Layer de Conformité \"Turnkey\"",
        subtitle: "Rôle : Partenaires Technologiques",
        description:
            "Pour les cliniques atteignant un plafond opérationnel. Nous concevons et développons une infrastructure logicielle sécurisée sur mesure pour résoudre des blocages spécifiques, allant du triage automatisé des patients au stockage de données conforme aux normes de la CNDP.",
        features: [
            { name: "Hébergement local au Maroc", detail: "Certifié" },
            { name: "Chiffrement des données de santé", detail: null },
            { name: "Documentation CNDP prête à l'emploi", detail: null },
        ],
        bestFor: "Cliniques en Croissance / Startups en Télésanté",
    },
]

export function EngagementModelsSection() {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    {/* Eyebrow */}
                    <span className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4 block">
            // MODÈLES D'ENGAGEMENT
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Comment Nous Appliquons Notre Expertise.</h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {engagementModels.map((model) => (
                        <div
                            key={model.title}
                            className="group flex flex-col h-full bg-white border border-slate-200 p-8 lg:p-10 transition-all duration-300 hover:border-slate-900"
                        >
                            {/* Title */}
                            <h3 className="font-serif text-2xl lg:text-3xl text-slate-900 mb-2">{model.title}</h3>

                            {/* Subtitle */}
                            <p className="font-mono text-sm text-slate-500 tracking-wide mb-6">{model.subtitle}</p>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed mb-8">{model.description}</p>

                            {/* Features List */}
                            <ul className="space-y-4 mb-8 grow">
                                {model.features.map((feature) => (
                                    <li key={feature.name} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-slate-900 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">
                                            <span className="font-medium">{feature.name}</span>
                                            {feature.detail && <span className="text-slate-500"> ({feature.detail})</span>}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-slate-100 space-y-2">
                                <p className="font-mono text-xs tracking-wide text-slate-500">IDÉAL POUR : {model.bestFor}</p>
                                <p className="font-mono text-xs tracking-wide text-slate-400">EXÉCUTION : EXPERTS EN INTERNE</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
