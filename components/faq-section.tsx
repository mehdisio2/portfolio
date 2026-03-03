"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Est-ce que mon site sera conforme à la loi 09-08 ?",
        answer:
            "Absolument. Chaque projet inclut le chiffrement des données, l'hébergement au Maroc et l'assistance pour vos déclarations CNDP.",
    },
    {
        question: "Comment fonctionne l'intégration WhatsApp ?",
        answer:
            "Nous connectons votre site à l'API WhatsApp Business pour automatiser les confirmations de RDV sans intervention manuelle de votre secrétaire.",
    },
    {
        question: "Est-ce compatible avec mon logiciel actuel ?",
        answer:
            "Nos solutions sont conçues comme une couche agile (Claims Gateway) qui peut s'ajouter à vos outils existants pour moderniser la communication patient.",
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
