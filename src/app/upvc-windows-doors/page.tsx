import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AcousticDemoClient } from "@/components/upvc/AcousticDemoClient";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Wind, Lock, Sun, VolumeX, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Sound-Insulating uPVC Windows & Doors in Prayagraj | WALL & DECO",
  description:
    "Multi-chamber double-glazed uPVC sliding windows, casements, and French patio doors in Prayagraj. Blocks street noise, monsoon water, and extreme heat.",
};

export default function UPVCPage() {
  const windowTypes = [
    {
      title: "Sliding Windows with Mosquito Mesh",
      desc: "Smooth gliding multi-track systems with integrated stainless steel 304 mosquito mesh. Perfect for balconies and living rooms.",
      features: ["2, 2.5 & 3-track options", "Heavy-duty brass tandem rollers", "Interlock air seal"],
    },
    {
      title: "Casement Openable Windows",
      desc: "Outward or inward opening windows with multi-point locking handles providing 100% compression seal against rain and wind.",
      features: ["90-degree friction stays", "Double perimeter EPDM gaskets", "Superior thermal insulation"],
    },
    {
      title: "Tilt & Turn European Systems",
      desc: "Dual-action windows that tilt from the top for secure draft-free ventilation or swing open fully for easy glass cleaning.",
      features: ["Micro-ventilation setting", "Burglary-resistant hardware", "Architectural flagship style"],
    },
    {
      title: "Slide & Fold French Patio Doors",
      desc: "Expansive multi-panel folding doors that slide effortlessly to merge your living lounge seamlessly with the garden or terrace.",
      features: ["Spans up to 18 feet opening", "Flush bottom track threshold", "Panoramic glass panels"],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">Acoustic & Weather Protection</Badge>
            <HeadingFormula
              as="h1"
              regularText="Sound-Insulating uPVC"
              italicText="Windows & Doors"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Block relentless street traffic noise, dust infiltration, and monsoon water seepage. Precision German-formulated uPVC profiles with multi-point locking and double-insulating glass units.
            </p>
          </div>
        </Container>
      </section>

      {/* Interactive Acoustic Demo */}
      <section>
        <Container>
          <AcousticDemoClient />
        </Container>
      </section>

      {/* Window Types Grid */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Profile Systems
            </span>
            <HeadingFormula
              as="h2"
              regularText="Engineered uPVC Profiles for"
              italicText="Every Opening"
              className="text-3xl sm:text-4xl font-bold"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {windowTypes.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-border-subtle space-y-1.5">
                  {item.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Advantages */}
      <section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <VolumeX className="w-6 h-6 text-accent" />
              <h4 className="text-base font-bold text-ink">Up to 40 dB Noise Cut</h4>
              <p className="text-xs text-muted leading-relaxed">
                Noticeable silence even next to heavy vehicular horns and railway lines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Sun className="w-6 h-6 text-accent" />
              <h4 className="text-base font-bold text-ink">30% Power Savings</h4>
              <p className="text-xs text-muted leading-relaxed">
                Prevents cool AC air loss, keeping rooms chilled during 45°C Prayagraj summers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Wind className="w-6 h-6 text-accent" />
              <h4 className="text-base font-bold text-ink">Monsoon Hurricane Seal</h4>
              <p className="text-xs text-muted leading-relaxed">
                Sloped drainage tracks drain driving rain water out without back-flow into your room.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border-subtle space-y-2">
              <Lock className="w-6 h-6 text-accent" />
              <h4 className="text-base font-bold text-ink">Multi-Point Locking</h4>
              <p className="text-xs text-muted leading-relaxed">
                Hardened steel mushroom cams lock into multiple perimeter points against intrusion.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Showroom CTA */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-8 sm:p-12 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-ink">Test the Acoustic Window Chamber Live</h3>
              <p className="text-sm text-muted">
                Visit our Chowk showroom to test our sound isolation chamber and feel the smoothness of sliding tracks.
              </p>
            </div>
            <Button
              href={formatWhatsAppUrl(
                COMPANY.phone,
                "Hello WALL & DECO, I need an on-site window measurement for uPVC in Prayagraj."
              )}
              external
              variant="primary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Book Site Measurement
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

