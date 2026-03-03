"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const expertiseItems = [
    {
        id: 1,
        number: "01",
        title: "Le Moteur d'Acquisition de Patients",
        body: "Un cabinet ne peut pas se développer s'il est introuvable. Nous concevons des sites web spécifiquement pour la Domination des Recherches (SEO) et la visibilité locale. En optimisant la vitesse du site et l'architecture mobile, nous nous assurons que votre clinique capte les patients à forte intention de recherche dans votre région.",
        imageSrc: "/expertise/growth-chart.svg",
    },
    {
        id: 2,
        number: "02",
        title: 'L\'Esthétique "Cabinet Privé"',
        body: "La confiance s'établit en quelques millisecondes. Pour les professionnels de l'esthétique et du dentaire, votre présence numérique est votre nouvelle salle d'attente. Nous concevons des interfaces de luxe sur mesure qui reflètent la qualité de vos soins cliniques, vous positionnant comme le choix premium de votre marché.",
        imageSrc: "/expertise/luxury-interior.svg",
    },
    {
        id: 3,
        number: "03",
        title: "Infrastructure de Qualité Médicale",
        body: "Nous n'utilisons pas de modèles bon marché. Nous construisons sur une Architecture Cloud d'Entreprise (Next.js & Supabase). Cela signifie que votre site est ultra-rapide et protégé contre le piratage dès aujourd'hui, tout en étant techniquement prêt à intégrer des portails patients sécurisés et des fonctionnalités de télémédecine dès que vous serez prêt à évoluer.",
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
