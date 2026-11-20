"use client";

import React, { useState } from "react";
import { Calculator, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

export const QuickEstimator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"panels" | "kitchen">("panels");

  // Wall Panels state
  const [wallWidth, setWallWidth] = useState(12);
  const [wallHeight, setWallHeight] = useState(10);
  const [panelType, setPanelType] = useState("charcoal");

  // Kitchen state
  const [kitchenLayout, setKitchenLayout] = useState("l-shape");
  const [runA, setRunA] = useState(10);
  const [runB, setRunB] = useState(8);

  // Wall panel calculations
  const totalSqFt = wallWidth * wallHeight;
  // A standard charcoal louver is ~5 inches wide (0.41 ft) x 9.5 ft height = ~4 sqft
  const estimatedPanels = Math.ceil(totalSqFt / 4);

  // Kitchen calculations
  const totalRunFeet =
    kitchenLayout === "straight"
      ? runA
      : kitchenLayout === "parallel"
      ? runA + runB
      : kitchenLayout === "l-shape"
      ? runA + runB - 2 // deducting corner overlap
      : runA + runB + 6; // U-shape approximate

  const whatsappMessage =
    activeTab === "panels"
      ? `Hello WALL & DECO, I used your online estimator for a wall of ${wallWidth}ft x ${wallHeight}ft (${totalSqFt} sq.ft) using ${panelType} panels (~${estimatedPanels} panels). Can you provide a price quotation for Prayagraj?`
      : `Hello WALL & DECO, I estimated a ${kitchenLayout.toUpperCase()} modular kitchen with ~${totalRunFeet} running feet counter length. Can you share an estimated budget and finish options?`;

  return (
    <div id="estimate" className="bg-surface rounded-3xl p-6 sm:p-10 border border-border-subtle shadow-sm">
      <div className="max-w-2xl mb-8">
        <span className="text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
          <Calculator className="w-4 h-4" />
          <span>Interactive Planning Tool</span>
        </span>
        <HeadingFormula
          as="h2"
          regularText="Estimate Your Space in"
          italicText="Seconds"
          className="text-2xl sm:text-3xl mt-2 font-bold"
        />
        <p className="text-sm text-muted mt-2 leading-relaxed">
          Get instantaneous dimension calculations before your site measurement visit. No arbitrary hidden charges; final quotations are verified on-site.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border-subtle mb-8 gap-6">
        <button
          onClick={() => setActiveTab("panels")}
          className={`pb-3 text-sm font-semibold transition-all relative ${
            activeTab === "panels"
              ? "text-ink font-bold"
              : "text-muted hover:text-ink"
          }`}
        >
          Wall Panels & Louvers
          {activeTab === "panels" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("kitchen")}
          className={`pb-3 text-sm font-semibold transition-all relative ${
            activeTab === "kitchen"
              ? "text-ink font-bold"
              : "text-muted hover:text-ink"
          }`}
        >
          Modular Kitchen Layout
          {activeTab === "kitchen" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent rounded-full" />
          )}
        </button>
      </div>

      {/* Panel Calculator */}
      {activeTab === "panels" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <label htmlFor="wall-width-slider" className="cursor-pointer">
                  Wall Width: <strong className="text-ink">{wallWidth} Feet</strong>
                </label>
                <span className="text-xs text-muted">(Horizontal Run)</span>
              </div>
              <input
                id="wall-width-slider"
                type="range"
                min="4"
                max="30"
                value={wallWidth}
                onChange={(e) => setWallWidth(Number(e.target.value))}
                aria-label="Wall Width in feet"
                className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <label htmlFor="wall-height-slider" className="cursor-pointer">
                  Ceiling Height: <strong className="text-ink">{wallHeight} Feet</strong>
                </label>
                <span className="text-xs text-muted">(Vertical Height)</span>
              </div>
              <input
                id="wall-height-slider"
                type="range"
                min="7"
                max="14"
                value={wallHeight}
                onChange={(e) => setWallHeight(Number(e.target.value))}
                aria-label="Ceiling Height in feet"
                className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Preferred Material Category:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "charcoal", label: "Charcoal Louver" },
                  { id: "wpc", label: "WPC Fluted" },
                  { id: "uv-marble", label: "UV Marble Sheet" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPanelType(item.id)}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                      panelType === item.id
                        ? "border-accent bg-accent/10 text-accent font-semibold"
                        : "border-border-subtle bg-canvas text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-canvas p-6 rounded-2xl border border-border-subtle space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-muted font-bold">
              Estimated Requirements
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline border-b border-border-subtle pb-2">
                <span className="text-sm text-muted">Surface Area</span>
                <span className="text-xl font-bold text-ink">{totalSqFt} sq.ft</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border-subtle pb-2">
                <span className="text-sm text-muted">Approx. Panels Needed</span>
                <span className="text-xl font-bold text-accent">~{estimatedPanels} panels</span>
              </div>
              <div className="text-xs text-muted flex items-start gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Includes 5% standard architectural cut & wastage tolerance.</span>
              </div>
            </div>

            <Button
              href={formatWhatsAppUrl(COMPANY.phone, whatsappMessage)}
              external
              variant="primary"
              size="md"
              className="w-full justify-center mt-2"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Get WhatsApp Quote
            </Button>
          </div>
        </div>
      )}

      {/* Kitchen Calculator */}
      {activeTab === "kitchen" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Select Kitchen Shape:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "straight", label: "Straight" },
                  { id: "l-shape", label: "L-Shaped" },
                  { id: "parallel", label: "Parallel" },
                  { id: "u-shape", label: "U-Shaped" },
                ].map((layout) => (
                  <button
                    key={layout.id}
                    type="button"
                    onClick={() => setKitchenLayout(layout.id)}
                    className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                      kitchenLayout === layout.id
                        ? "border-accent bg-accent/10 text-accent font-semibold"
                        : "border-border-subtle bg-canvas text-muted hover:text-ink"
                    }`}
                  >
                    {layout.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium mb-2">
                <label htmlFor="kitchen-run-a" className="cursor-pointer">
                  Primary Wall Counter: <strong className="text-ink">{runA} Feet</strong>
                </label>
              </div>
              <input
                id="kitchen-run-a"
                type="range"
                min="6"
                max="22"
                value={runA}
                onChange={(e) => setRunA(Number(e.target.value))}
                aria-label="Primary Wall Counter in feet"
                className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
              />
            </div>

            {kitchenLayout !== "straight" && (
              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <label htmlFor="kitchen-run-b" className="cursor-pointer">
                    Secondary Wall Counter: <strong className="text-ink">{runB} Feet</strong>
                  </label>
                </div>
                <input
                  id="kitchen-run-b"
                  type="range"
                  min="4"
                  max="18"
                  value={runB}
                  onChange={(e) => setRunB(Number(e.target.value))}
                  aria-label="Secondary Wall Counter in feet"
                  className="w-full accent-accent h-2 bg-canvas rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-canvas p-6 rounded-2xl border border-border-subtle space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-muted font-bold">
              Countertop & Cabinet Run
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline border-b border-border-subtle pb-2">
                <span className="text-sm text-muted">Estimated Running Length</span>
                <span className="text-xl font-bold text-accent">~{totalRunFeet} Running Ft</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-border-subtle pb-2">
                <span className="text-sm text-muted">Layout Configuration</span>
                <span className="text-sm font-semibold text-ink capitalize">{kitchenLayout}</span>
              </div>
              <div className="text-xs text-muted flex items-start gap-1.5 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Includes base cabinets, wall overheads & tandem drawers.</span>
              </div>
            </div>

            <Button
              href={formatWhatsAppUrl(COMPANY.phone, whatsappMessage)}
              external
              variant="primary"
              size="md"
              className="w-full justify-center mt-2"
              icon={<MessageSquare className="w-4 h-4" />}
            >
              Consult On WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

