import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";

export const metadata = {
  title: "Terms & Conditions | WALL & DECO",
  description: "Terms of service, quotation estimates, and execution policies for WALL & DECO.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container size="tight">
        <div className="space-y-6">
          <HeadingFormula
            as="h1"
            regularText="Terms & Execution"
            italicText="Guidelines"
            className="text-3xl sm:text-4xl font-bold"
            withCurvedUnderline
          />
          <p className="text-xs text-muted">
            Last Updated: November 2026 • Phase 1 Guidelines
          </p>

          <div className="space-y-6 text-sm text-ink/80 leading-relaxed pt-4 border-t border-border-subtle">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">1. Online Cost Estimations</h2>
              <p>
                Calculations provided by our online Wall Panel and Modular Kitchen Estimators are preliminary planning estimates based on standard room dimensions. Final formal quotations are issued following an in-person physical laser site measurement and verified material shade selection.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">2. Concept Visuals & Completed Work</h2>
              <p>
                To provide architectural inspiration, our portfolio and category displays clearly label 3D concept visualizations versus completed project photographs. Concepts represent spatial design possibilities and material pairings executed to custom client specifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">3. Material Warranties</h2>
              <p>
                Material warranties (including 10-year uPVC profile warranties and termite protection certifications) are subject to proper usage conditions and in-house professional installation standards.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

