# WALL & DECO — Production-Ready Frontend (Phase 1)

> **Live Local Development:** `npm run dev` (Runs at `http://localhost:3000`)  
> **Production Build:** `npm run build`  
> **Linting & Code Quality:** `npm run lint`  
> **Brand Location:** Chowk, Garhi Sarai, Prayagraj, Uttar Pradesh 211003  
> **Direct Telephone & WhatsApp:** `+91 89201 44187`

---

## 1. Project Overview & Phase 1 Scope

This repository contains the complete **Phase 1 Production-Ready Frontend** for **WALL & DECO**, a Prayagraj-based interior design studio and architectural materials partner.

Built strictly according to [Wall_and_Deco_Frontend_First_PRD.md](Wall_and_Deco_Frontend_First_PRD.md), this release delivers:
- **100% Static & Client-Side Frontend:** Zero backend dependencies, no database migrations, no persistent remote file storage in this phase.
- **Strict Anti-AI-Slop Discipline:** Adheres to `claude-design` rules—no generic purple/cyan neon gradients, no emoji bullets, no unverified 5-star review screenshots, and no arbitrary numbers. 3D renders are honestly tagged as **"Concept Visual"** versus verified **"Completed Project"**.
- **Interactive Deterministic Tools:** Before/After transformation slider, PVC/WPC material swatch explorer with spec drawer, modular kitchen dimensional estimator, uPVC acoustic sound-isolation simulation, and contact enquiry form with in-browser floor plan preview.

---

## 2. Technology Stack

| Layer | Technology | Usage in Project |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Full static site prerendering (SSG), fast navigation, metadata API |
| **Language** | **TypeScript 5** | Strict types for all materials, projects, layouts, and forms (`src/data/types.ts`) |
| **Styling** | **Tailwind CSS 4 + CSS Variables** | Exact PRD design tokens, 4/8px spatial rhythm, fluid typography |
| **Animation & Interactions** | **GSAP & Modern Touch Events** | Physics-based Before/After slider dragging, smooth drawer transitions |
| **Icons** | **Lucide React** | Clean architectural 1.5px stroke icons |
| **SEO & Schema** | **MetadataRoute + JSON-LD** | Automatic `sitemap.xml`, `robots.txt`, and Schema.org `HomeAndConstructionBusiness` markup |

---

## 3. Design System & Tokens

* **Canvas Background:** `--color-canvas: #F3EEE3` (Warm editorial cream)
* **Surface Background:** `--color-surface: #FAF7F0` (Card and drawer containers)
* **Ink Typography:** `--color-ink: #111111` (Headers, body copy, and navbar CTA)
* **Burnt Orange Accent:** `--color-accent: #D9541E` (Primary interactive CTA buttons)
* **Burnt Orange Hover:** `--color-accent-hover: #B84315`
* **Footer Surface:** `--color-footer: #111111`
* **Pre-Footer CTA Banner:** `--color-cta-panel: #EAE3D2`
* **Subtle Borders & Dividers:** `rgba(17, 17, 17, 0.08)` & `rgba(17, 17, 17, 0.15)`
* **Dual-Typography Formula:** `Plus Jakarta Sans` for clean modern structural layout + `Instrument Serif` (Italic) for highlighted emotional focus phrases with SVG curved burnt-orange underlines.

---

## 4. Route Inventory

| Route | Page Name | Core Functionality & Features |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero, Prayagraj climate commitment, core services grid, Before/After transformation slider, featured portfolio, quick estimator teaser, split pre-footer CTA |
| `/interior-design-prayagraj` | **Turnkey Interiors** | Living, bedroom, and kitchen space breakdowns, 4-step execution process, consultation booking |
| `/pvc-wpc-wall-panels-prayagraj` | **Material Catalogue** | Category filters (Charcoal, WPC, UV Marble, PVC), thickness tags, specification drawer modal, direct WhatsApp quote links |
| `/modular-kitchen-prayagraj` | **Modular Kitchens** | Ergonomics guide, waterproof HDHMR carcass specs, finish tiers, interactive running-feet dimension estimator |
| `/upvc-windows-doors` | **uPVC Windows & Doors** | Sound-insulating multi-chamber profiles, openable casement & sliding systems, interactive decibel gauge acoustic comparison demo |
| `/portfolio` | **Projects Gallery** | Filterable spaces (Living, Kitchen, Bedroom, Facade) with honest "Completed Project" vs "Concept Visual" tags |
| `/contact-showroom` | **Contact & Showroom** | Chowk experience center location, hours (open daily until 10 PM), directions, and enquiry form with local in-browser floor plan preview |
| `/privacy-policy` | **Privacy Policy** | Data safety and local file preview disclosures |
| `/terms` | **Terms of Service** | Guidelines on preliminary estimations and material warranties |
| `/_not-found` | **Custom 404** | Branded recovery route guiding visitors back to the catalogue |
| `/sitemap.xml` | **XML Sitemap** | Dynamic crawler sitemap prioritizing local Prayagraj landing pages |
| `/robots.txt` | **Robots Configuration** | Search engine indexing rules |

---

## 5. Development & Build Commands

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev

# 3. Create optimized static production build
npm run build

# 4. Verify TypeScript and ESLint code standards
npm run lint
```

---

## 6. Phase 2 Backend Seams (Blueprint for Future Backend Work)

When transitioning to **Phase 2**, the following seams are pre-structured for immediate backend integration:
1. **Enquiry Storage:** Replace `ContactFormClient.tsx`'s client-side timeout with a POST request to `/api/enquiries` connecting to a PostgreSQL/Supabase database.
2. **Persistent File Uploads:** Connect the file picker to S3 or Cloudflare R2 bucket storage to upload architectural drawings and floor plans.
3. **Admin CMS:** Connect `@/data/materials.ts` and `@/data/projects.ts` to headless CMS tables for live price rate updates and project uploads.
4. **WhatsApp Automation:** Integrate WhatsApp Business Cloud API to automatically deliver PDF estimates generated from the Modular Kitchen Estimator.
