"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Why do you avoid WordPress/Webflow?",
        answer:
            "Think of WordPress like renting a clinic—you are limited by someone else's rules. I build on Next.js, which is enterprise-grade infrastructure. This ensures your digital presence is visually bespoke (no generic templates), instant-loading (better for Google), hack-proof (no plugins), and most importantly, technically ready to scale into a full telemedicine app whenever you are ready to grow.",
    },
    {
        question: "What is the support structure post-launch?",
        answer:
            "I do not disappear. I act as your technical partner. All engagements include a 30-day hyper-care period, with options for ongoing retainer packages to manage security and updates.",
    },
    {
        question: "What is the typical development timeline?",
        answer:
            "I accept limited engagements to ensure focus. A standard practice build launches in 2-3 weeks; complex clinical infrastructure takes 4-6 weeks.",
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
                    <span className="font-mono text-xs tracking-widest text-slate-500 mb-4 block">// CLARITY</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Operational Details.</h2>
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
                                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
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
