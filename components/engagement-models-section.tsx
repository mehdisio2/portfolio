import { Check } from "lucide-react"

const engagementModels = [
    {
        title: "Performance Re-Architecture",
        subtitle: "Role: Technical Lead & Developer",
        description:
            "For practices held back by slow, generic websites. I personally audit and rebuild your digital presence using high-performance code, ensuring your site loads instantly and meets every technical SEO standard.",
        features: [
            { name: "Next.js Migration", detail: "Sub-second load times" },
            { name: "Technical SEO Audit & Fixes", detail: "Schema/Structure" },
            { name: "Mobile-First Interface Design", detail: null },
            { name: "Booking Flow Optimization", detail: null },
        ],
        bestFor: "Private Practice / Dental / Derma",
    },
    {
        title: "Systems Architecture",
        subtitle: "Role: Interim CTO / Engineer",
        description:
            "For clinics hitting operational ceilings. I design and build secure, custom software infrastructure to solve specific bottlenecks—from automated patient triage to HIPAA-compliant data storage.",
        features: [
            { name: "Custom Web Application Development", detail: null },
            { name: "Secure Database Architecture", detail: "Supabase" },
            { name: "Telemedicine Video Integration", detail: null },
            { name: "Patient Portal Implementation", detail: null },
        ],
        bestFor: "Scaling Clinics / Telehealth Startups",
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
            // ENGAGEMENT MODELS
                    </span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">How I Apply My Expertise.</h2>
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
                            <ul className="space-y-4 mb-8 flex-grow">
                                {model.features.map((feature) => (
                                    <li key={feature.name} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">
                                            <span className="font-medium">{feature.name}</span>
                                            {feature.detail && <span className="text-slate-500"> ({feature.detail})</span>}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-slate-100 space-y-2">
                                <p className="font-mono text-xs tracking-wide text-slate-500">BEST FOR: {model.bestFor}</p>
                                <p className="font-mono text-xs tracking-wide text-slate-400">EXECUTION: DIRECT BY EL MAHDI</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
