"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const AcousticDemoClient: React.FC = () => {
  const [isWindowClosed, setIsWindowClosed] = useState<boolean>(true);

  const decibels = isWindowClosed ? 36 : 82;
  const noiseLevelText = isWindowClosed
    ? "Calm Library Silence (36 dB)"
    : "Loud Street Traffic & Horns (82 dB)";

  return (
    <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-sm space-y-8">
      <div className="max-w-2xl space-y-2">
        <Badge variant="accent">Interactive Sound Isolation Simulation</Badge>
        <HeadingFormula
          as="h2"
          regularText="Experience the uPVC"
          italicText="Acoustic Shield"
          className="text-2xl sm:text-3xl font-bold"
        />
        <p className="text-xs sm:text-sm text-muted">
          Compare ambient outdoor road traffic against our multi-chamber double-glazed uPVC window enclosures.
        </p>
      </div>

      {/* Interactive Toggle & Meter */}
      <div className="bg-canvas rounded-2xl p-6 sm:p-8 border border-border-subtle space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted font-bold block mb-1">
              Window Configuration State:
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsWindowClosed(false)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  !isWindowClosed
                    ? "bg-red-600 text-white shadow-md scale-105"
                    : "bg-surface text-muted border border-border-subtle hover:text-ink"
                }`}
              >
                Window Open (Traffic)
              </button>
              <button
                type="button"
                onClick={() => setIsWindowClosed(true)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isWindowClosed
                    ? "bg-emerald-700 text-white shadow-md scale-105"
                    : "bg-surface text-muted border border-border-subtle hover:text-ink"
                }`}
              >
                uPVC Closed (Silent)
              </button>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-muted block">Indoor Noise Level</span>
            <span
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors ${
                isWindowClosed ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {decibels} dB
            </span>
          </div>
        </div>

        {/* Visual Noise Spectrum Meter */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className={isWindowClosed ? "text-emerald-700" : "text-red-600"}>
              {noiseLevelText}
            </span>
            <span className="text-muted text-[11px]">Outdoor baseline: 82 dB</span>
          </div>

          {/* Bar Gauge */}
          <div className="w-full h-3 bg-border-subtle rounded-full overflow-hidden flex">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isWindowClosed ? "bg-emerald-600 w-[36%]" : "bg-red-600 w-[85%]"
              }`}
            />
          </div>

          <div className="flex justify-between text-[10px] text-muted pt-1">
            <span>20 dB (Whisper)</span>
            <span>40 dB (Quiet Room)</span>
            <span>60 dB (Conversation)</span>
            <span>80 dB (Heavy Traffic)</span>
            <span>100 dB (Siren)</span>
          </div>
        </div>

        {/* Engineering Breakdown Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border-subtle text-xs">
          <div className="space-y-1">
            <span className="font-bold text-ink block">5-Chamber Frame</span>
            <p className="text-muted leading-tight">
              Internal air cavities absorb acoustic vibrations and block thermal conduction.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-ink block">Double EPDM Gaskets</span>
            <p className="text-muted leading-tight">
              Automotive compression seals prevent wind whistling, dust drafts and water seepage.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-ink block">Acoustic Double Glass</span>
            <p className="text-muted leading-tight">
              Sound-dampening PVB laminated or argon gas-filled double insulated glass units (DGU).
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <span className="text-xs text-muted">
          Want a demonstration on your road-facing bedroom or balcony?
        </span>
        <Button
          href={formatWhatsAppUrl(
            COMPANY.phone,
            "Hello WALL & DECO, I am interested in soundproof uPVC windows for my space in Prayagraj."
          )}
          external
          variant="primary"
          size="md"
          icon={<MessageSquare className="w-4 h-4" />}
        >
          Enquire for uPVC Window Quote
        </Button>
      </div>
    </div>
  );
};

