import type { Metadata } from "next";
import { plusJakartaSans, instrumentSerif } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { COMPANY } from "@/data/company";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://wallanddeco.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WALL & DECO | Premium Interior Design & Architectural Materials — Prayagraj",
    template: "%s | WALL & DECO Prayagraj",
  },
  description:
    "Turnkey interior execution, modular kitchens, PVC/WPC fluted panels, UV marble sheets, and sound-insulating uPVC windows in Prayagraj, Uttar Pradesh.",
  keywords: [
    "interior design prayagraj",
    "pvc wall panels prayagraj",
    "wpc louvers prayagraj",
    "charcoal louvers prayagraj",
    "modular kitchen prayagraj",
    "upvc windows prayagraj",
    "uv marble sheets prayagraj",
    "interior designer civil lines prayagraj",
  ],
  authors: [{ name: "WALL & DECO" }],
  creator: "WALL & DECO",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wallanddeco.in",
    title: "WALL & DECO | Premium Interior Design & Architectural Materials",
    description:
      "Turnkey interior execution, modular kitchens, PVC/WPC fluted panels, and sound-insulating uPVC windows in Prayagraj.",
    siteName: "WALL & DECO",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: COMPANY.name,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chowk, Garhi Sarai",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211003",
    addressCountry: "IN",
  },
  url: "https://wallanddeco.in",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "22:00",
  },
  areaServed: COMPANY.neighborhoodsServed,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Text" />
        <link rel="service-desc" type="application/json" href="/ai-catalog.json" title="AI Service Catalog" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-ink flex flex-col font-sans selection:bg-accent selection:text-on-accent">
        <Navbar />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
