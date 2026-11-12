import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ModularKitchenClient } from "@/components/kitchen/ModularKitchenClient";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { ShieldCheck, Flame, Droplets, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Modular Kitchens in Prayagraj | WALL & DECO",
  description:
    "Bespoke modular kitchens designed for Prayagraj homes. Boiling waterproof HDHMR carcass, anti-fingerprint acrylic/PU shutters, Blum hardware & quartz countertops.",
};

export default function ModularKitchenPage() {
  const highlights = [
    {
      icon: <Droplets className="w-5 h-5 text-accent" />,
      title: "100% Boiling Waterproof",
      desc: "High-density moisture-resistant (HDHMR) core engineered to withstand daily Indian cooking wash routines without swelling.",
    },
    {
      icon: <Flame className="w-5 h-5 text-accent" />,
      title: "Heat & Spice Resistant",
      desc: "Surfaces resist hot oil splatters, mustard seeds, and turmeric stains with zero surface yellowing.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "10-Year Hardware Warranty",
      desc: "German-engineered soft-close hinges and tandem box drawer channels tested for over 200,000 cycles.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">Modular Kitchens</Badge>
            <HeadingFormula
              as="h1"
              regularText="Intelligent Kitchens,"
              italicText="Engineered for Living"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              We build culinary workstations crafted specifically for Indian cooking habits. Seamless acrylic and matte PU finishes that clean in seconds, paired with precision Blum hardware and solid quartz surfaces.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Estimator Component */}
      <section>
        <Container>
          <ModularKitchenClient />
        </Container>
      </section>

      {/* Engineering Highlights */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Quality Standards
            </span>
            <HeadingFormula
              as="h2"
              regularText="Why Prayagraj Families Trust Our"
              italicText="Kitchen Engineering"
              className="text-3xl sm:text-4xl font-bold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3"
              >
                <div className="p-3 w-fit rounded-xl bg-accent/10">{h.icon}</div>
                <h3 className="text-lg font-bold text-ink">{h.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Box */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-8 sm:p-12 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-ink">Inspect Real Kitchen Displays in Person</h3>
              <p className="text-sm text-muted">
                Visit our Chowk showroom to test working tandem pullouts, magic corners, and hydraulic pantry lift-ups.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact-showroom" variant="navbar" size="lg">
                Showroom Location
              </Button>
              <Button
                href={formatWhatsAppUrl(
                  COMPANY.phone,
                  "Hello WALL & DECO, I would like to schedule a site measurement for my kitchen in Prayagraj."
                )}
                external
                variant="primary"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                WhatsApp Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

