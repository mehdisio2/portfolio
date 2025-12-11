"use client";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function SiteHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isCaseStudy = pathname?.startsWith('/work/');

    const navItems = [
        { name: "Expertise", link: "/#expertise" },
        { name: "Approach", link: "/#approach" },
        { name: "Case Study", link: "/work/telemed" },
    ];

    return (
        <Navbar>
            <NavBody className={isCaseStudy ? "bg-[#0B0F19] border-slate-800" : ""}>
                <div className="flex items-center gap-2">
                    <NavbarLogo variant={isCaseStudy ? "light" : "dark"} />
                </div>
                <NavItems items={navItems} variant={isCaseStudy ? "light" : "dark"} />
                <div className="flex items-center gap-4">
                    <span className={`text-sm font-medium cursor-pointer transition-colors group-data-[scrolled=true]:hidden ${isCaseStudy ? 'text-white hover:text-slate-300' : 'text-foreground hover:text-muted-foreground'}`}>EN | AR</span>
                    <NavbarButton href="#" variant={isCaseStudy ? "secondary" : "primary"}>
                        Book Consultation
                    </NavbarButton>
                </div>
            </NavBody>

            <MobileNav className={isCaseStudy ? "bg-[#0B0F19] border-slate-800" : ""}>
                <MobileNavHeader>
                    <NavbarLogo variant={isCaseStudy ? "light" : "dark"} />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={isCaseStudy ? "text-white" : ""}
                    />
                </MobileNavHeader>
                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                >
                    <div className="flex flex-col w-full gap-2 mt-4 px-4">
                        <NavbarButton href="#" variant="primary" className="w-full">
                            Book Consultation
                        </NavbarButton>
                    </div>
                    {navItems.slice().reverse().map((item, idx) => ( // Render specific order if needed, but requirements say: custom order
                        null // Removing this map to do custom order below
                    ))}
                    {/* Specific order: Button (above), Case Study, Expertise, Approach, Toggle */}
                    <a
                        href="/work/telemed"
                        className="block w-full px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Case Study
                    </a>
                    <a
                        href="/#expertise"
                        className="block w-full px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Expertise
                    </a>
                    <a
                        href="/#approach"
                        className="block w-full px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Approach
                    </a>
                    <div className="px-4 py-2 text-lg font-medium text-foreground">
                        EN | AR
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
