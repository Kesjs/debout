import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BÉNIN DEBOUT — L'excellence chez les jeunes",
    template: "%s | BÉNIN DEBOUT",
  },
  description:
    "Association apolitique dédiée au développement du capital humain de la jeunesse béninoise. Solidarité humanitaire, formation numérique et rayonnement international.",
  keywords: [
    "Bénin Debout",
    "association Bénin",
    "jeunesse béninoise",
    "formation numérique Bénin",
    "solidarité Bénin",
    "artisan numérique",
    "CIAN 2026",
    "association loi 1901",
  ],
  authors: [{ name: "BÉNIN DEBOUT" }],
  creator: "BÉNIN DEBOUT",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "BÉNIN DEBOUT",
    title: "BÉNIN DEBOUT — L'excellence chez les jeunes",
    description:
      "Association apolitique dédiée au développement du capital humain de la jeunesse béninoise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BÉNIN DEBOUT — L'excellence chez les jeunes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
