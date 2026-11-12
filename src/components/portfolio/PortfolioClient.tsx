"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { MapPin, X, CheckCircle2, MessageSquare } from "lucide-react";
import { PortfolioProject } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/data/company";
import { formatWhatsAppUrl } from "@/lib/utils";

interface PortfolioClientProps {
  initialProjects: PortfolioProject[];
}

export const PortfolioClient: React.FC<PortfolioClientProps> = ({
  initialProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Lock body scroll and handle ESC key when project detail modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedProject]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "living-room", label: "Living Spaces" },
    { id: "kitchen", label: "Modular Kitchens" },
    { id: "bedroom", label: "Bedrooms" },
    { id: "commercial", label: "Commercial & Facade" },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return initialProjects;
    return initialProjects.filter((p) => p.category === activeCategory);
  }, [initialProjects, activeCategory]);

  return (
    <div className="space-y-10">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? "bg-ink text-white shadow-sm"
                : "bg-surface text-muted hover:text-ink border border-border-subtle"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge
                  variant={project.visualType === "Completed Project" ? "completed" : "concept"}
                >
                  {project.visualType}
                </Badge>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{project.neighborhood}</span>
                </div>
                <h3 className="text-base font-bold text-ink leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {project.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
                <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-accent hover:underline cursor-pointer"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-surface rounded-3xl shadow-2xl border border-border-subtle overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-border-subtle flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant={
                      selectedProject.visualType === "Completed Project"
                        ? "completed"
                        : "concept"
                    }
                  >
                    {selectedProject.visualType}
                  </Badge>
                  <span className="text-xs text-muted font-medium">
                    {selectedProject.neighborhood}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ink">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-1.5">
                  Project Narrative
                </h4>
                <p className="text-sm text-ink leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="bg-canvas p-4 rounded-2xl border border-border-subtle space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold">
                  Key Design Highlight
                </h4>
                <p className="text-xs text-ink/90 leading-relaxed font-medium">
                  {selectedProject.highlight}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-muted font-bold mb-2">
                  Scope of Work Executed
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedProject.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-ink/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 px-6 border-t border-border-subtle bg-canvas flex items-center justify-between gap-4">
              <span className="text-xs text-muted">
                Want a similar aesthetic for your space?
              </span>
              <Button
                href={formatWhatsAppUrl(
                  COMPANY.phone,
                  `Hello WALL & DECO, I saw your project '${selectedProject.title}' on your website and would like a consultation for my home in Prayagraj.`
                )}
                external
                variant="primary"
                size="sm"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                Consult on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

