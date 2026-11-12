import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { PROJECTS } from "@/data/projects";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MessageSquare } from "lucide-react";

export const metadata = {
  title: "Interior Projects & Concepts in Prayagraj | WALL & DECO",
  description:
    "Explore residential living spaces, bedrooms, modular kitchens, and uPVC architectural facade installations across Civil Lines, Tagore Town, and Prayagraj.",
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">Curated Portfolios</Badge>
            <HeadingFormula
              as="h1"
              regularText="Executed Projects &"
              italicText="Design Concepts"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Every space reflects thoughtful architectural material pairing, custom lighting integration, and precision joinery. We distinguish clearly between completed work and 3D concept visualizations.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section>
        <Container>
          <PortfolioClient initialProjects={PROJECTS} />
        </Container>
      </section>

      {/* Showroom CTA */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-8 sm:p-12 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl font-bold text-ink">Have an Architectural Floor Plan Ready?</h3>
              <p className="text-sm text-muted">
                Send your layout or architect CAD drawing on WhatsApp for a preliminary 3D concept assessment.
              </p>
            </div>
            <Button
              href={formatWhatsAppUrl(
                COMPANY.phone,
                "Hello WALL & DECO, I have a floor plan and would like to discuss an interior project in Prayagraj."
              )}
              external
              variant="primary"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Share Floor Plan on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

