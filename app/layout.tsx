import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",

});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",

});

export const metadata: Metadata = {
  title: "Digitale Santé | Infrastructure Clinique",
  description: "Infrastructure numérique pour les cliniques et cabinets privés performants au Maroc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
