import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { COMPANY } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | WALL & DECO",
  description: "Privacy policy and client data handling principles for WALL & DECO in Prayagraj.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20">
      <Container size="tight">
        <div className="space-y-6">
          <HeadingFormula
            as="h1"
            regularText="Privacy & Client Data"
            italicText="Policy"
            className="text-3xl sm:text-4xl font-bold"
            withCurvedUnderline
          />
          <p className="text-xs text-muted">
            Last Updated: November 2026 • Phase 1 Frontend Specification
          </p>

          <div className="space-y-6 text-sm text-ink/80 leading-relaxed pt-4 border-t border-border-subtle">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">1. Information We Collect</h2>
              <p>
                When you submit an inquiry through our consultation forms or communicate with us via phone or WhatsApp, we receive contact details such as your full name, mobile number, neighborhood in Prayagraj, and space specifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">2. Local File Preview Safety</h2>
              <p>
                In this Phase 1 release, any architectural floor plan or room photograph you select in our contact form is processed strictly in your local browser memory for preview purposes. No uploaded files are transmitted or persisted on remote database servers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">3. How We Use Your Details</h2>
              <p>
                Your phone number and project requirements are used solely by our internal design specialists to prepare measurement visits, calculate material estimates, and communicate quotation updates. We never sell or share client contacts with third-party advertising brokers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-ink">4. Showroom & Contact Inquiries</h2>
              <p>
                If you have questions regarding your data, you can reach our team at our experience center: {COMPANY.address}, or via telephone at {COMPANY.phone}.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

