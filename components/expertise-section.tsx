"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const expertiseItems = [
    {
        id: 1,
        number: "01",
        title: "The Patient Acquisition Engine",
        body: "A practice cannot grow if it cannot be found. I engineer websites specifically for Search Dominance (SEO) and local visibility. By optimizing site velocity and mobile architecture, I ensure your clinic captures high-intent patients searching in your specific region.",
        imageSrc: "/expertise/growth-chart.svg",
    },
    {
        id: 2,
        number: "02",
        title: 'The "Private Practice" Aesthetic',
        body: "Trust is established in milliseconds. For cosmetic and dental professionals, your digital presence is your new waiting room. I design bespoke, luxury interfaces that mirror the quality of your clinical care—positioning you as the premium choice in your market.",
        imageSrc: "/expertise/luxury-interior.svg",
    },
    {
        id: 3,
        number: "03",
        title: "Medical-Grade Infrastructure",
        body: "I do not use cheap templates. I build on Enterprise-Grade Cloud Architecture (Next.js & Supabase). This means your site is hack-proof and fast today, but technically ready to integrate secure patient portals and telemedicine features whenever you are ready to scale.",
        imageSrc: "/expertise/infrastructure.svg",
    },
]

export function ExpertiseSection() {
    const [activeItem, setActiveItem] = useState<number | null>(1)

    return (
        <section id="expertise" className="min-h-screen bg-[#FAFAFA] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Expertise</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground tracking-tight text-balance">
                        A Practice Built for Growth
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Side - Accordion */}
                    <div className="space-y-0">
                        {expertiseItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={cn(
                                    "border-t border-[#E5E7EB] cursor-pointer group",
                                    index === expertiseItems.length - 1 && "border-b",
                                )}
                                onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                                onMouseEnter={() => setActiveItem(item.id)}
                            >
                                <div className="py-8">
                                    {/* Header */}
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-mono text-sm text-muted-foreground tracking-wider">{item.number}.</span>
                                        <h3
                                            className={cn(
                                                "font-serif text-2xl md:text-3xl lg:text-4xl transition-colors duration-300",
                                                activeItem === item.id
                                                    ? "text-foreground"
                                                    : "text-muted-foreground group-hover:text-foreground",
                                            )}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Expandable Body */}
                                    <div
                                        className={cn(
                                            "overflow-hidden transition-all duration-500 ease-in-out",
                                            activeItem === item.id ? "max-h-48 opacity-100 mt-6" : "max-h-0 opacity-0",
                                        )}
                                    >
                                        <p className="font-mono text-sm leading-relaxed text-muted-foreground pl-10 md:pl-14 max-w-xl">
                                            {item.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Sticky Image */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <div className="aspect-[4/3] bg-[#EBEDF0] rounded-sm overflow-hidden relative">
                                {expertiseItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "absolute inset-0 transition-opacity duration-700 ease-in-out",
                                            activeItem === item.id ? "opacity-100" : "opacity-0",
                                        )}
                                    >
                                        <img
                                            src={item.imageSrc}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                {/* Fallback when nothing selected */}
                                {activeItem === null && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                                            Select an item
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
