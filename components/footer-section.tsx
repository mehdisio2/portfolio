import { Linkedin, Twitter } from "lucide-react"

export function FooterSection() {
return (
<footer className="bg-[#0f172a] py-24 lg:py-32">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* CTA Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-10 text-balance">
            Ready to upgrade your infrastructure?
        </h2>

        {/* CTA Button */}
        <a href="#"
            className="inline-block bg-white text-slate-900 font-medium px-8 py-4 text-base lg:text-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg">
            Book Consultation
        </a>

        {/* Bottom Row */}
        <div
            className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left - Branding */}
            <span className="font-mono text-xs tracking-wide text-slate-500">El Mahdi Badilou // Clinical Systems</span>

            {/* Right - Social + Copyright */}
            <div className="flex items-center gap-6">
                <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300"
                    aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                </a>
                <span className="font-mono text-xs text-slate-500">© 2025</span>
            </div>
        </div>
    </div>
</footer>
)
}