"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Pourquoi évitez-vous WordPress/Webflow ?",
        answer:
            "Voyez WordPress comme la location d'une clinique : vous êtes limité par les règles d'un tiers. Nous développons sur Next.js, une infrastructure de niveau entreprise. Cela garantit que votre présence numérique est visuellement sur mesure (aucun modèle générique), à chargement instantané (meilleur pour Google), protégée contre le piratage (pas de plugins) et, surtout, prête techniquement à évoluer vers une application complète de télémédecine lorsque vous serez prêt à grandir.",
    },
    {
        question: "Quelle est la structure d'assistance après le lancement ?",
        answer:
            "Nous ne disparaissons pas. Nous agissons en tant que partenaire technologique. Tous les engagements incluent une période d'hyper-assistance de 30 jours, avec des options de forfaits de maintenance continus pour gérer la sécurité et les mises à jour.",
    },
    {
        question: "Quel est le délai de développement typique ?",
        answer:
            "Nous acceptons un nombre limité de projets pour garantir notre concentration. La création d'un cabinet standard prend de 2 à 3 semaines ; une infrastructure clinique complexe nécessite de 4 à 6 semaines.",
    },
]

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-mono text-xs tracking-widest text-slate-500 mb-4 block">// CLARTÉ</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Détails Opérationnels.</h2>
                </div>

                {/* Accordion */}
                <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="font-serif text-lg lg:text-xl text-slate-800 pr-8">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                                    }`}
                            >
                                <p className="font-sans text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
