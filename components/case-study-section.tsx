import { ArrowRight } from "lucide-react"

export function CaseStudySection() {
    const metrics = [
        { value: "100%", label: "Compliance" },
        { value: "< 1s", label: "Load Time" },
        { value: "Zero", label: "Data Leaks" },
    ]

    return (
        <section className="relative bg-[#0B1121] py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - The Data */}
                    <div className="space-y-8">
                        {/* Eyebrow */}
                        <span className="font-mono text-xs tracking-widest text-cyan-400">// SELECTED WORK</span>

                        {/* Headline */}
                        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Telemedicine Redefined.
                        </h2>

                        {/* Context */}
                        <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                            A custom-engineered patient portal designed to automate intake and secure sensitive data.
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {metrics.map((metric) => (
                                <div key={metric.label} className="space-y-1">
                                    <span className="block font-serif text-3xl lg:text-4xl font-bold text-white">{metric.value}</span>
                                    <span className="block font-mono text-xs tracking-wide text-slate-500 uppercase">{metric.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Ghost Button */}
                        <div className="pt-4">
                            <button className="group inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-mono text-sm tracking-wide hover:bg-white hover:text-[#0B1121] transition-all duration-300">
                                Read Full Case Study
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - The Visual */}
                    <div className="relative flex items-center justify-center">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80%] h-[60%] bg-cyan-500/20 blur-[80px] rounded-full" />
                        </div>

                        {/* Device Mockup */}
                        <div className="relative z-10">
                            {/* Laptop Frame */}
                            <div className="relative bg-slate-800 rounded-xl p-2 shadow-2xl">
                                {/* Screen */}
                                <div className="relative bg-slate-900 rounded-lg overflow-hidden aspect-[16/10]">
                                    <img
                                        src="/telemedicine-app.png"
                                        alt="Telemedicine App Dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Screen Glare */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                </div>
                                {/* Laptop Base */}
                                <div className="h-3 bg-slate-700 rounded-b-xl mt-2 mx-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
