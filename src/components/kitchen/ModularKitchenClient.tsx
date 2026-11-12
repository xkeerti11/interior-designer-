"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { KITCHEN_LAYOUTS, FINISH_TIERS, COUNTERTOP_OPTIONS } from "@/data/kitchens";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const ModularKitchenClient: React.FC = () => {
  const [selectedLayoutId, setSelectedLayoutId] = useState<string>("l-shape");
  const [wallA, setWallA] = useState<number>(12);
  const [wallB, setWallB] = useState<number>(10);
  const [selectedFinishId, setSelectedFinishId] = useState<string>("acrylic");
  const [selectedCountertopId, setSelectedCountertopId] = useState<string>("quartz");

  const selectedLayout =
    KITCHEN_LAYOUTS.find((l) => l.id === selectedLayoutId) || KITCHEN_LAYOUTS[0];
  const selectedFinish =
    FINISH_TIERS.find((f) => f.id === selectedFinishId) || FINISH_TIERS[1];
  const selectedCountertop =
    COUNTERTOP_OPTIONS.find((c) => c.id === selectedCountertopId) || COUNTERTOP_OPTIONS[1];

  // Calculated running feet
  const runningFeet =
    selectedLayout.id === "straight"
      ? wallA
      : selectedLayout.id === "parallel"
      ? wallA + wallB
      : selectedLayout.id === "l-shape"
      ? wallA + wallB - 2
      : selectedLayout.id === "u-shape"
      ? wallA + wallB + 6
      : wallA + wallB + 8; // Island

  const whatsappMessage = `Hello WALL & DECO, I configured a Modular Kitchen estimate on your website:
- Layout: ${selectedLayout.title}
- Counter Dimensions: Wall A (${wallA}ft) ${selectedLayout.id !== "straight" ? `x Wall B (${wallB}ft)` : ""} (~${runningFeet} running ft)
- Finish: ${selectedFinish.name}
- Countertop: ${selectedCountertop.name}
Please provide an estimated budget and showroom consultation in Prayagraj.`;

  return (
    <div className="space-y-16">
      {/* Interactive Estimator Panel */}
      <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-sm">
        <div className="max-w-2xl mb-8 space-y-2">
          <Badge variant="accent">Interactive Cost & Planning Estimator</Badge>
          <HeadingFormula
            as="h2"
            regularText="Plan Your Modular Kitchen in"
            italicText="Prayagraj"
            className="text-2xl sm:text-3xl font-bold"
          />
          <p className="text-xs sm:text-sm text-muted">
            Configure layout shapes, counter run lengths, and finishes for a deterministic planning summary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Layout Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-3">
                1. Select Kitchen Layout
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {KITCHEN_LAYOUTS.map((layout) => (
                  <button
                    key={layout.id}
                    onClick={() => setSelectedLayoutId(layout.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      selectedLayoutId === layout.id
                        ? "border-accent bg-accent/10 shadow-sm"
                        : "border-border-subtle bg-canvas hover:border-ink/20"
                    }`}
                  >
                    <span className="text-xs font-bold text-ink block">{layout.title}</span>
                    <span className="text-[11px] text-muted block mt-1 line-clamp-1">
                      {layout.idealFor}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                2. Adjust Wall Dimensions (in Feet)
              </label>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1.5">
                  <span>Primary Counter Wall: <strong className="text-ink">{wallA} Feet</strong></span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="24"
                  value={wallA}
                  onChange={(e) => setWallA(Number(e.target.value))}
                  className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
                />
              </div>

              {selectedLayout.id !== "straight" && (
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Secondary Counter Wall: <strong className="text-ink">{wallB} Feet</strong></span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="18"
                    value={wallB}
                    onChange={(e) => setWallB(Number(e.target.value))}
                    className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Step 3: Finish Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-3">
                3. Choose Shutter Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {FINISH_TIERS.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinishId(finish.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedFinishId === finish.id
                        ? "border-accent bg-accent/10 shadow-sm"
                        : "border-border-subtle bg-canvas hover:border-ink/20"
                    }`}
                  >
                    <span className="text-xs font-bold text-ink block">{finish.name}</span>
                    <span className="text-[10px] text-muted mt-1 block leading-tight">{finish.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Countertop */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-3">
                4. Select Countertop Stone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {COUNTERTOP_OPTIONS.map((ct) => (
                  <button
                    key={ct.id}
                    onClick={() => setSelectedCountertopId(ct.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedCountertopId === ct.id
                        ? "border-accent bg-accent/10 shadow-sm"
                        : "border-border-subtle bg-canvas hover:border-ink/20"
                    }`}
                  >
                    <span className="text-xs font-bold text-ink block">{ct.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Summary Card */}
          <div className="lg:col-span-5 bg-canvas p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                Configuration Summary
              </span>
              <h3 className="text-xl font-bold text-ink">{selectedLayout.title}</h3>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted">Total Counter Run:</span>
                  <span className="font-bold text-accent text-sm">~{runningFeet} Running Feet</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted">Selected Finish:</span>
                  <span className="font-semibold text-ink">{selectedFinish.name}</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted">Countertop Stone:</span>
                  <span className="font-semibold text-ink">{selectedCountertop.name}</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted">Carcass Core:</span>
                  <span className="font-semibold text-ink">BWP HDHMR (100% Waterproof)</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted">Hardware Warranty:</span>
                  <span className="font-semibold text-emerald-700">{selectedFinish.warranty} Warranty</span>
                </div>
              </div>

              {/* Hardware inclusions */}
              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">
                  Included Standards:
                </span>
                <div className="space-y-1 text-[11px] text-muted">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Soft-close tandem drawers (up to 45 kg load rating)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Heavy-duty stainless steel 304 cutlery & bottle pullouts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>PVC skirting seal preventing water ingress under cabinets</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-border-subtle">
              <Button
                href={formatWhatsAppUrl(COMPANY.phone, whatsappMessage)}
                external
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Send to WhatsApp for Exact Price
              </Button>
              <p className="text-[11px] text-muted text-center leading-snug">
                Final quotations include 3D CAD design, on-site measurement, transport & installation in Prayagraj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

