import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Turnkey Interior Design in Prayagraj | WALL & DECO",
  description:
    "Comprehensive turnkey interior design and execution in Prayagraj. Living rooms, master suites, modular kitchens, false ceilings, and fluted panel feature walls.",
};

export default function InteriorDesignPage() {
  const steps = [
    {
      step: "01",
      title: "Complimentary Site Measurement",
      desc: "Our interior designer visits your home in Civil Lines, Tagore Town, or anywhere in Prayagraj to take laser-accurate measurements and assess wall conditions.",
    },
    {
      step: "02",
      title: "3D Visualization & Space Planning",
      desc: "We present photorealistic 3D renders of your exact room layouts, lighting simulations, and material combinations before any work begins.",
    },
    {
      step: "03",
      title: "Material Selection at Chowk Showroom",
      desc: "Touch physical swatches of our charcoal louvers, UV marble sheets, and kitchen finishes in person to approve exact colors and textures.",
    },
    {
      step: "04",
      title: "Turnkey Execution & Clean Handover",
      desc: "Our in-house installation specialists manage civil, electrical, paneling, and modular fittings with zero subcontracting delays and spotless cleanup.",
    },
  ];

  const spaces = [
    {
      title: "Living & Entertainment Spaces",
      desc: "Fluted charcoal acoustic TV backdrops, concealed wire management, warm 3000K indirect profile cove ceilings, and floating custom credenzas.",
      image: "/images/projects/living-sanctuary.jpg",
      scope: ["Acoustic Wall Louvers", "Concealed False Ceiling", "Floating Media Unit", "Curtain Pelmets"],
    },
    {
      title: "Master & Guest Bedroom Suites",
      desc: "Quiet, restorative sanctuaries with sound-insulating headboard paneling, integrated warm reading sconces, and floor-to-ceiling modular wardrobes.",
      image: "/images/projects/bedroom-suite.jpg",
      scope: ["Fluted Headboard Accents", "Bespoke Sliding Wardrobe", "Damp-Proof Wall Cladding", "Vanity Nook"],
    },
    {
      title: "Modern Modular Kitchens",
      desc: "Boiling waterproof HDHMR cabinetry wrapped in anti-fingerprint acrylic or matte PU finishes, paired with heavy-duty Blum and Hafele hardware.",
      image: "/images/categories/modular-kitchen.jpg",
      scope: ["Tandem Box Drawers", "Quartz Countertops", "Tall Pantry Unit", "Under-Cabinet Task Lighting"],
    },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-14">
      {/* Page Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-5">
            <Badge variant="accent">Turnkey Execution</Badge>
            <HeadingFormula
              as="h1"
              regularText="Thoughtful Interior Design,"
              italicText="Flawlessly Executed"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              We eliminate the chaos of juggling multiple independent carpenters, electricians, and painters. WALL & DECO provides end-to-end turnkey interior execution backed by certified materials and transparent timelines.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/contact-showroom"
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4" />}
              >
                Schedule Free Site Visit
              </Button>
              <Button
                href={formatWhatsAppUrl(
                  COMPANY.phone,
                  "Hello WALL & DECO, I am interested in turnkey interior design for my home in Prayagraj."
                )}
                external
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Chat with Designer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Spaces Breakdown */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Areas of Expertise
            </span>
            <HeadingFormula
              as="h2"
              regularText="Spaces We Transform in"
              italicText="Prayagraj Residences"
              className="text-3xl sm:text-4xl font-bold"
            />
            <p className="text-sm text-muted">
              Every room is engineered specifically for durability against local monsoon moisture and summer heat.
            </p>
          </div>

          <div className="space-y-16">
            {spaces.map((space, idx) => (
              <div
                key={space.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-ink">{space.title}</h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{space.desc}</p>
                  
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink block">
                      Scope of Execution:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {space.scope.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-muted">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      href="/contact-showroom"
                      variant="secondary"
                      size="sm"
                    >
                      Enquire for this Space &rarr;
                    </Button>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border-subtle shadow-md">
                    <Image
                      src={space.image}
                      alt={space.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4-Step Process */}
      <section>
        <Container>
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              The Journey
            </span>
            <HeadingFormula
              as="h2"
              regularText="How We Turn Vision into"
              italicText="Reality"
              className="text-3xl sm:text-4xl font-bold"
            />
            <p className="text-sm text-muted">
              A transparent, structured workflow designed to respect your time and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-serif italic text-accent font-bold">
                    {item.step}
                  </span>
                  <h4 className="text-base font-bold text-ink leading-snug">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Box */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-8 sm:p-12 border border-border-subtle text-center space-y-5 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">
              Ready to Upgrade Your Living Space?
            </span>
            <HeadingFormula
              as="h2"
              regularText="Let’s Discuss Your Interior in"
              italicText="Prayagraj"
              className="text-2xl sm:text-4xl font-bold"
            />
            <p className="text-sm text-muted max-w-xl mx-auto leading-relaxed">
              Whether you are moving into a new flat in Civil Lines or renovating an ancestral bungalow in Chowk, our designers are here to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button href="/contact-showroom" variant="navbar" size="lg">
                Book Free Site Measurement
              </Button>
              <Button
                href={formatWhatsAppUrl(COMPANY.phone, "Hello WALL & DECO, I would like to book a site visit.")}
                external
                variant="primary"
                size="lg"
              >
                WhatsApp Us Directly
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

