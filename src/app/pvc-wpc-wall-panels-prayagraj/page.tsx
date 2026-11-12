import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { MaterialCatalogueClient } from "@/components/materials/MaterialCatalogueClient";
import { MATERIALS } from "@/data/materials";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MessageSquare, ShieldCheck, Sparkles, MapPin } from "lucide-react";

export const metadata = {
  title: "PVC, WPC & Charcoal Wall Panels in Prayagraj | WALL & DECO",
  description:
    "Explore authentic charcoal louvers, exterior WPC fluted panels, and high-gloss UV marble sheets in Prayagraj. 100% waterproof and termite-proof.",
};

export default function MaterialsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">Architectural Material Catalogue</Badge>
            <HeadingFormula
              as="h1"
              regularText="Tactile Wall Panels &"
              italicText="Surface Materials"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Engineered surface materials that solve Prayagraj wall seepage, moisture paint peeling, and termite degradation forever. Browse our live inventory or test physical samples in our Chowk experience showroom.
            </p>
          </div>
        </Container>
      </section>

      {/* Catalogue & Explorer */}
      <section>
        <Container>
          <MaterialCatalogueClient initialMaterials={MATERIALS} />
        </Container>
      </section>

      {/* Why Choose Our Materials */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <h3 className="text-lg font-bold text-ink">Zero Termite Infestation</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Charcoal polystyrene and wood-plastic composites carry zero organic cellulose that attracts termites or borer insects.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <Sparkles className="w-8 h-8 text-accent" />
              <h3 className="text-lg font-bold text-ink">Zero Demolition Needed</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Can be mounted directly over damp walls, chipped plaster, or old paint using high-strength polymer adhesives and concealed brackets.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
              <MapPin className="w-8 h-8 text-accent" />
              <h3 className="text-lg font-bold text-ink">Local Prayagraj Showroom</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                No ordering blindly from online catalogs. Visit our Chowk showroom to see full 8x4 ft monolithic slabs and take home sample chips.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Showroom CTA */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-6 sm:p-12 border border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-ink">Need a Custom Material Measurement?</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Send your wall dimensions on WhatsApp for an immediate quantity and cost estimate.
              </p>
            </div>
            <Button
              href={formatWhatsAppUrl(
                COMPANY.phone,
                "Hello WALL & DECO, I need assistance calculating wall panel requirements for my home in Prayagraj."
              )}
              external
              variant="primary"
              size="lg"
              className="w-full md:w-auto shrink-0 justify-center text-center"
              icon={<MessageSquare className="w-4 h-4 shrink-0" />}
            >
              Get Instant WhatsApp Estimate
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

