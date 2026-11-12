"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  CheckCircle2,
  ShieldCheck,
  X,
  MessageSquare,
} from "lucide-react";
import { MaterialItem } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

interface MaterialCatalogueClientProps {
  initialMaterials: MaterialItem[];
}

export const MaterialCatalogueClient: React.FC<MaterialCatalogueClientProps> = ({
  initialMaterials,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  // Lock body scroll and support ESC key when modal is open
  useEffect(() => {
    if (selectedMaterial) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedMaterial(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedMaterial]);

  const categories = [
    { id: "all", label: "All Architectural Materials" },
    { id: "charcoal-louver", label: "Charcoal Louvers" },
    { id: "wpc-fluted", label: "WPC Fluted Louvers" },
    { id: "uv-marble", label: "UV Marble Sheets" },
    { id: "pvc-panel", label: "PVC Wall Cladding" },
    { id: "kitchen-finish", label: "Kitchen Finishes" },
  ];

  const filteredMaterials = useMemo(() => {
    return initialMaterials.filter((mat) => {
      const matchesCategory =
        selectedCategory === "all" || mat.category === selectedCategory;
      const matchesSearch =
        mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.finishType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mat.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialMaterials, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface border border-border-subtle shadow-sm">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search material textures, thickness, finishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-canvas border border-border-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 text-ink"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category count indicator */}
        <div className="text-xs text-muted font-medium">
          Showing <strong className="text-ink">{filteredMaterials.length}</strong> verified materials
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-ink text-white shadow-sm"
                : "bg-surface text-muted hover:text-ink border border-border-subtle hover:bg-canvas"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Material Grid */}
      {filteredMaterials.length === 0 ? (
        <div className="text-center py-16 bg-surface rounded-2xl border border-border-subtle space-y-3">
          <p className="text-base font-semibold text-ink">No materials matched your search</p>
          <p className="text-xs text-muted">Try clearing the search query or selecting a different category.</p>
          <Button variant="secondary" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                <Image
                  src={material.image}
                  alt={material.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <Badge variant="surface" className="backdrop-blur-sm bg-surface/90">
                    {material.categoryLabel}
                  </Badge>
                  {material.thicknessMm && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ink/80 text-white backdrop-blur-sm">
                      {material.thicknessMm} mm
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-accent block">
                    {material.finishType}
                  </span>
                  <h3 className="text-base font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {material.description}
                  </p>
                </div>

                {/* Features & Action */}
                <div className="pt-3 border-t border-border-subtle space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-muted">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{material.waterResistance}</span>
                    </span>
                    {material.termiteProof && (
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Termite Proof</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => setSelectedMaterial(material)}
                    >
                      View Specs
                    </Button>
                    <Button
                      href={formatWhatsAppUrl(
                        COMPANY.phone,
                        `Hello WALL & DECO, I am interested in ${material.name} (${material.categoryLabel}). Can you share price per sq.ft and Prayagraj availability?`
                      )}
                      external
                      variant="primary"
                      size="sm"
                      className="flex-1 text-xs justify-center"
                      icon={<MessageSquare className="w-3.5 h-3.5" />}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SPECIFICATIONS DRAWER / MODAL */}
      {selectedMaterial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl border border-border-subtle overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 border-b border-border-subtle flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  {selectedMaterial.categoryLabel} Specifications
                </span>
                <h3 className="text-xl font-bold text-ink mt-0.5">{selectedMaterial.name}</h3>
              </div>
              <button
                onClick={() => setSelectedMaterial(null)}
                className="p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">
                  Overview & Application
                </h4>
                <p className="text-sm text-ink leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="bg-canvas p-4 rounded-2xl border border-border-subtle space-y-2.5">
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-1">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-muted">Finish Texture:</span>
                  <span className="font-semibold text-ink">{selectedMaterial.finishType}</span>

                  <span className="text-muted">Thickness:</span>
                  <span className="font-semibold text-ink">
                    {selectedMaterial.thicknessMm ? `${selectedMaterial.thicknessMm} mm` : "Customizable"}
                  </span>

                  <span className="text-muted">Standard Panel Dimensions:</span>
                  <span className="font-semibold text-ink">
                    {selectedMaterial.widthMm && selectedMaterial.heightMm
                      ? `${selectedMaterial.widthMm}mm x ${selectedMaterial.heightMm}mm`
                      : "Available in standard 8ft & 9.5ft lengths"}
                  </span>

                  <span className="text-muted">Moisture & Water Rating:</span>
                  <span className="font-semibold text-emerald-700">{selectedMaterial.waterResistance}</span>

                  <span className="text-muted">Termite & Borer Proof:</span>
                  <span className="font-semibold text-emerald-700">
                    {selectedMaterial.termiteProof ? "100% Certified Lifetime Protection" : "Treated"}
                  </span>

                  <span className="text-muted">Fire Retardant:</span>
                  <span className="font-semibold text-ink">
                    {selectedMaterial.fireRetardant ? "Class-1 Flame Retardant" : "Standard"}
                  </span>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">
                  Architectural Advantages
                </h4>
                <div className="space-y-1.5">
                  {selectedMaterial.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-ink/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 px-6 border-t border-border-subtle bg-canvas flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-muted">
                Available at Chowk Showroom, Prayagraj.
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedMaterial(null)}
                >
                  Close
                </Button>
                <Button
                  href={formatWhatsAppUrl(
                    COMPANY.phone,
                    `Hello WALL & DECO, I checked ${selectedMaterial.name} on your website. Please share available shades and sample availability.`
                  )}
                  external
                  variant="primary"
                  size="sm"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  WhatsApp Quotation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

