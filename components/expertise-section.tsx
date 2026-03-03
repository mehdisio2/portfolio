"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const expertiseItems = [
    {
        id: 1,
        number: "01",
        title: "Acquisition & Fidélisation WhatsApp",
        body: "Transformez votre site web en un moteur de rendez-vous. Intégration native WhatsApp pour les rappels automatiques, la prise de RDV et le suivi post-consultation.",
        imageSrc: "/expertise/growth-chart.svg",
    },
    {
        id: 2,
        number: "02",
        title: 'L\'esthétique "Cabinet Premium"',
        body: "Un design qui reflète l'excellence de vos soins. Nous créons des vitrines digitales qui instaurent la confiance avant même la première consultation.",
        imageSrc: "/expertise/luxury-interior.svg",
    },
    {
        id: 3,
        number: "03",
        title: "Prêt pour l'AMO & la Digitalisation",
        body: "Une infrastructure conçue pour s'interfacer avec les nouveaux flux CNSS/CNOPS. Générez vos documents et gérez vos données patients en totale conformité avec les exigences de 2026.",
        imageSrc: "/expertise/infrastructure.svg",
    },
]

export function ExpertiseSection() {
    const [activeItem, setActiveItem] = useState<number | null>(1)

    return (
        <section id="expertise" className="min-h-screen bg-[#FAFAFA] py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Expertise</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground tracking-tight text-balance">
                        Un Cabinet Taillé pour la Croissance
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
                            <div className="aspect-4/3 bg-[#EBEDF0] rounded-sm overflow-hidden relative">
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
                                            Sélectionnez un élément
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
