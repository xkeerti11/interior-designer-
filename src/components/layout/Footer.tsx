import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer text-footer-text pt-16 pb-12 mt-auto border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold tracking-wider text-2xl text-white">
                WALL & DECO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mb-0.5" />
            </div>
            <p className="text-sm text-[#A8A296] leading-relaxed max-w-sm">
              Prayagraj’s dedicated turnkey interior-design studio and architectural-materials showroom. Specializing in fluted charcoal louvers, UV marble sheets, bespoke modular kitchens, and acoustic uPVC window enclosures.
            </p>
            <div className="pt-2">
              <a
                href={formatWhatsAppUrl(
                  COMPANY.phone,
                  "Hello WALL & DECO, I would like to request an interior consultation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#25D366]/15 text-[#4ADE80] border border-[#25D366]/30 hover:bg-[#25D366]/25 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+91 89201 44187)</span>
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C5BFB2] font-semibold">
              Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EAE6DF]">
              <li>
                <Link
                  href="/interior-design-prayagraj"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Turnkey Interiors</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/modular-kitchen-prayagraj"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Modular Kitchens</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pvc-wpc-wall-panels-prayagraj"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>PVC & WPC Panels</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/upvc-windows-doors"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>uPVC Windows & Doors</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Project Gallery</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C5BFB2] font-semibold">
              Prayagraj Showroom
            </h3>
            <div className="space-y-3 text-sm text-[#EAE6DF]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A45] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {COMPANY.address}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF7A45] shrink-0" />
                <p>{COMPANY.hours}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7A45] shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <div className="pt-1">
              <a
                href={COMPANY.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#FF7A45] hover:text-[#FFA37A] hover:underline inline-flex items-center gap-1 font-medium"
              >
                Get Google Maps Directions &rarr;
              </a>
            </div>
          </div>

          {/* Neighborhoods Served */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#C5BFB2] font-semibold">
              Areas Served in Prayagraj
            </h3>
            <p className="text-xs text-[#C5BFB2] leading-relaxed">
              We provide free site measurement visits and turnkey execution across:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {COMPANY.neighborhoodsServed.map((area) => (
                <span
                  key={area}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#EAE6DF]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C5BFB2]">
          <p>
            &copy; 2026 WALL & DECO. All rights reserved. Prayagraj, UP.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact-showroom" className="hover:text-white transition-colors">
              Showroom Visit
            </Link>
            <a
              href="https://www.ktux.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAE6DF] hover:text-[#FF7A45] font-medium transition-colors inline-flex items-center gap-1 group"
              aria-label="Made by ktux (opens in a new tab)"
            >
              <span>Made by</span>
              <span className="font-semibold underline underline-offset-4 decoration-white/30 group-hover:decoration-[#FF7A45]">
                ktux
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

