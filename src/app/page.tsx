import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Layers,
  VolumeX,
  ChefHat,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeadingFormula } from "@/components/ui/HeadingFormula";
import { Badge } from "@/components/ui/Badge";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { QuickEstimator } from "@/components/home/QuickEstimator";
import { COMPANY } from "@/data/company";
import { PROJECTS } from "@/data/projects";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="accent">Prayagraj Interior & Architectural Partner</Badge>
              </div>

              <HeadingFormula
                as="h1"
                regularText="Design-Led Living,"
                italicText="Crafted in Prayagraj"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                withCurvedUnderline
              />

              <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                We transform raw residential shells into warm, tactile homes. From fluted charcoal feature walls and modular kitchens to sound-insulated uPVC windows—designed, customized and installed right from our Chowk showroom.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href="/contact-showroom"
                  variant="primary"
                  size="lg"
                  icon={<Sparkles className="w-4 h-4 text-amber-200" />}
                >
                  Book Free Site Measurement
                </Button>
                <Button
                  href="/pvc-wpc-wall-panels-prayagraj"
                  variant="outline"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Material Catalogue
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span>100% Termite & Damp Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>10-Year Profiles Warranty</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>Open Daily Until 10 PM</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border-subtle">
                <Image
                  src="/images/hero/hero-living.jpg"
                  alt="Minimalist luxury living space with fluted wall panels and warm ambient cove lighting"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300">
                    Featured Interior Concept
                  </span>
                  <p className="text-sm font-medium leading-snug">
                    Fluted Charcoal Louvers with 3000K Architectural Cove Lighting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. NUMBERS & STUDIO STORY */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                The WALL & DECO Commitment
              </span>
              <HeadingFormula
                as="h2"
                regularText="Interior Execution Built for"
                italicText="Prayagraj's Climate"
                className="text-3xl sm:text-4xl font-bold"
              />
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Prayagraj experiences extreme weather transitions—from scorching summer heatwaves to monsoon humidity that causes wall seepage, bubbling paint, and termite infestation.
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Unlike traditional contractors who use generic plywood that warps in dampness, WALL & DECO supplies specialized high-density charcoal louvers, exterior WPC composites, boiling waterproof HDHMR kitchen carcasses, and multi-chamber uPVC profiles that stay pristine for decades.
              </p>
              <div className="pt-2">
                <Button href="/interior-design-prayagraj" variant="secondary" size="md">
                  Read Our Execution Process &rarr;
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {COMPANY.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-canvas border border-border-subtle shadow-sm space-y-2"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-ink tracking-tight font-sans">
                    {stat.value}
                  </span>
                  <p className="text-xs sm:text-sm text-muted font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE OFFERINGS GRID */}
      <section>
        <Container>
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">
              Specialized Solutions
            </span>
            <HeadingFormula
              as="h2"
              regularText="Turnkey Interiors &"
              italicText="Architectural Materials"
              className="text-3xl sm:text-4xl font-bold"
            />
            <p className="text-sm sm:text-base text-muted">
              Choose between complete end-to-end design and execution, or source individual premium materials for your own architect or carpenter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Turnkey Interiors */}
            <div className="group rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/categories/turnkey-interior.jpg"
                  alt="Turnkey interior design services in Prayagraj"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="surface">Design & Build</Badge>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Compass className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Turnkey</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink">Turnkey Interior Design</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Complete bedroom, living room, false ceiling, and lighting execution handled under single-point responsibility.
                  </p>
                </div>
                <Link
                  href="/interior-design-prayagraj"
                  aria-label="Explore turnkey interior design process for Prayagraj homes"
                  className="text-xs font-bold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Explore Interior Process</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Modular Kitchens */}
            <div className="group rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/categories/modular-kitchen.jpg"
                  alt="Modular kitchen design with acrylic and PU finishes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="surface">100% Waterproof</Badge>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <ChefHat className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Kitchens</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink">Modular Kitchens</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Custom L-shape, Parallel, and Island layouts with soft-close tandem boxes, acrylic finishes, and quartz tops.
                  </p>
                </div>
                <Link
                  href="/modular-kitchen-prayagraj"
                  aria-label="Design your modular kitchen with waterproof materials"
                  className="text-xs font-bold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Design Your Kitchen</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Wall Panels */}
            <div className="group rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/categories/wall-panels.jpg"
                  alt="PVC and WPC fluted wall louvers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="surface">In Stock</Badge>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Panels</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink">PVC / WPC & Charcoal</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Fluted wall louvers, exterior WPC cladding, and UV marble sheets for instant moisture-proof wall makeovers.
                  </p>
                </div>
                <Link
                  href="/pvc-wpc-wall-panels-prayagraj"
                  aria-label="Browse PVC, WPC and Charcoal material catalogue"
                  className="text-xs font-bold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Browse Material Catalogue</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 4: uPVC Windows */}
            <div className="group rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/categories/upvc-windows.jpg"
                  alt="Soundproof uPVC windows and French doors"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="surface">Acoustic Shield</Badge>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <VolumeX className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Acoustics</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink">uPVC Windows & Doors</h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Double-glazed multi-chamber profiles blocking up to 80% of outdoor traffic noise and dust infiltration.
                  </p>
                </div>
                <Link
                  href="/upvc-windows-doors"
                  aria-label="Test acoustic soundproof uPVC demo"
                  className="text-xs font-bold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Test Acoustic Demo</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. BEFORE & AFTER TRANSFORMATION */}
      <section className="bg-surface py-20 border-y border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                Real Transformation
              </span>
              <HeadingFormula
                as="h2"
                regularText="From Raw Shell to"
                italicText="Finished Elegance"
                className="text-3xl sm:text-4xl font-bold"
              />
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                See how WALL & DECO handles raw brick and concrete civil construction shells. We conceal all exposed wiring conduit, install moisture barriers, erect fluted charcoal acoustic louvers, and cast warm indirect cove lighting.
              </p>
              <div className="space-y-2 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero demolition required for wall paneling installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Installed in as little as 48 hours without painting odor</span>
                </div>
              </div>
              <div className="pt-2">
                <Button
                  href={formatWhatsAppUrl(
                    COMPANY.phone,
                    "Hello WALL & DECO, I saw your before/after transformation on your website and want to transform my room."
                  )}
                  external
                  variant="primary"
                  size="md"
                >
                  Transform My Room &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage="/images/slider/before-raw.jpg"
                afterImage="/images/slider/after-finished.jpg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 5. INTERACTIVE ESTIMATOR TEASER */}
      <section>
        <Container>
          <QuickEstimator />
        </Container>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section>
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                Recent Portfolios
              </span>
              <HeadingFormula
                as="h2"
                regularText="Spaces Designed Across"
                italicText="Prayagraj"
                className="text-3xl sm:text-4xl font-bold"
              />
              <p className="text-sm text-muted">
                Explore residential living rooms, modular kitchens, and villa facades crafted for local homeowners.
              </p>
            </div>
            <Button href="/portfolio" variant="outline" size="sm">
              View All Projects ({PROJECTS.length}) &rarr;
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-surface border border-border-subtle overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={project.visualType === "Completed Project" ? "completed" : "concept"}>
                      {project.visualType}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-muted mb-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{project.neighborhood}</span>
                    </div>
                    <h3 className="text-base font-bold text-ink leading-snug">{project.title}</h3>
                    <p className="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border-subtle">
                    <Link
                      href="/portfolio"
                      aria-label={`View full project details for ${project.title} in ${project.neighborhood}`}
                      className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1"
                    >
                      View Project Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. PRE-FOOTER SPLIT CTA PANEL */}
      <section>
        <Container>
          <div className="bg-cta-panel rounded-3xl p-8 sm:p-14 border border-border-subtle shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  Experience Materials In Person
                </span>
                <HeadingFormula
                  as="h2"
                  regularText="Visit Our Experience Center in"
                  italicText="Chowk, Prayagraj"
                  className="text-2xl sm:text-4xl font-bold"
                />
                <p className="text-sm text-ink/80 max-w-xl leading-relaxed">
                  Touch physical fluted louver samples, inspect full-scale 8x4 ft UV marble slabs, test soft-close Blum kitchen drawer mechanisms, and hear the acoustic silence of our uPVC window mockups.
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-ink/90 pt-1">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{COMPANY.address}</span>
                  <span className="text-ink/40">•</span>
                  <span>{COMPANY.hours}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button
                  href="/contact-showroom"
                  variant="navbar"
                  size="lg"
                  className="w-full justify-center"
                >
                  Get Directions & Hours
                </Button>
                <Button
                  href={formatWhatsAppUrl(
                    COMPANY.phone,
                    "Hello WALL & DECO, I would like to book a showroom visit to see your material samples."
                  )}
                  external
                  variant="primary"
                  size="lg"
                  className="w-full justify-center"
                >
                  WhatsApp Quotation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
