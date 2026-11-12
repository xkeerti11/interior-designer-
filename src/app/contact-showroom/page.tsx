import React from "react";
import { Container } from "@/components/ui/Container";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContactFormClient } from "@/components/contact/ContactFormClient";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Navigation,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Visit Prayagraj Showroom & Contact | WALL & DECO",
  description:
    "Visit our architectural materials experience center at Chowk, Garhi Sarai, Prayagraj. Call +91 89201 44187 or book a free on-site interior measurement.",
};

export default function ContactShowroomPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14">
      {/* Hero */}
      <section>
        <Container>
          <div className="max-w-3xl space-y-4">
            <Badge variant="accent">Prayagraj Showroom & Studio</Badge>
            <HeadingFormula
              as="h1"
              regularText="Visit Our Experience Center in"
              italicText="Chowk, Prayagraj"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              withCurvedUnderline
            />
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Touch physical materials before deciding. See full-size 8x4 ft UV marble slabs, fluted louvers, modular kitchen displays, and test soundproof uPVC window mockups.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Showroom Info + Contact Form */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Showroom Details Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Address Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border-subtle space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    Primary Showroom
                  </span>
                  <h3 className="text-2xl font-bold text-ink">WALL & DECO Studio</h3>
                </div>

                <div className="space-y-4 text-sm text-ink/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink font-semibold">Location Address</strong>
                      <p className="text-muted text-xs leading-relaxed mt-0.5">
                        {COMPANY.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink font-semibold">Showroom Timings</strong>
                      <p className="text-muted text-xs leading-relaxed mt-0.5">
                        {COMPANY.hours} (Appointments recommended for 3D consultations)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-ink font-semibold">Direct Telephone</strong>
                      <a
                        href={`tel:${COMPANY.phoneRaw}`}
                        className="text-accent hover:underline text-xs font-semibold mt-0.5 block"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <Button
                    href={COMPANY.googleMapsUrl}
                    external
                    variant="navbar"
                    size="md"
                    className="flex-1 justify-center text-xs"
                    icon={<Navigation className="w-3.5 h-3.5 text-accent" />}
                  >
                    Google Maps
                  </Button>
                  <Button
                    href={formatWhatsAppUrl(
                      COMPANY.phone,
                      "Hello WALL & DECO, I would like to visit your Chowk showroom today."
                    )}
                    external
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center text-xs"
                    icon={<MessageSquare className="w-3.5 h-3.5" />}
                  >
                    WhatsApp Chat
                  </Button>
                </div>
              </div>

              {/* Showroom Experience Highlights */}
              <div className="p-6 rounded-2xl bg-canvas border border-border-subtle space-y-3">
                <span className="text-xs uppercase tracking-wider text-muted font-bold block">
                  What You Can Experience Here:
                </span>
                <div className="space-y-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Take home free cut swatches of charcoal louvers & WPC panels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Test soft-close Blum tandem drawer systems with live weight</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Listen to the acoustic isolation chamber comparing road noise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free on-the-spot 3D space assessment with our designers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactFormClient />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

