import { KitchenLayoutOption } from "./types";

export const KITCHEN_LAYOUTS: KitchenLayoutOption[] = [
  {
    id: "l-shape",
    title: "L-Shaped Kitchen",
    description: "Most popular layout for Indian residential homes, utilizing two adjoining walls for natural triangular workflow.",
    idealFor: "Medium to large apartments, corner spaces & open living areas",
    diagramSvgPath: "M10 10 H90 V40 H40 V90 H10 Z",
    minRunFeet: 14,
  },
  {
    id: "parallel",
    title: "Parallel (Galley) Kitchen",
    description: "Highest culinary efficiency with two opposing parallel counter runs separating prep, cook, and wash zones.",
    idealFor: "Pass-through rooms, dedicated cooking spaces with balcony access",
    diagramSvgPath: "M10 10 H90 V35 H10 Z M10 65 H90 V90 H10 Z",
    minRunFeet: 16,
  },
  {
    id: "u-shape",
    title: "U-Shaped Kitchen",
    description: "Maximum continuous storage and generous countertop area wrapping around three perimeter walls.",
    idealFor: "Large independent houses and passionate home chefs",
    diagramSvgPath: "M10 10 H90 V90 H60 V40 H40 V90 H10 Z",
    minRunFeet: 20,
  },
  {
    id: "straight",
    title: "Straight (Single Wall)",
    description: "Linear streamlined layout with all cooking, sink, and storage elements aligned along a single wall plane.",
    idealFor: "Compact apartments, 1BHKs, studio suites & open studio setups",
    diagramSvgPath: "M10 30 H90 V70 H10 Z",
    minRunFeet: 8,
  },
  {
    id: "island",
    title: "Island Kitchen",
    description: "Dramatic open-plan layout featuring an L or parallel run combined with a central freestanding multifunctional island counter.",
    idealFor: "Spacious villas, luxury duplexes, and entertaining guests",
    diagramSvgPath: "M10 10 H90 V35 H10 Z M30 55 H70 V85 H30 Z",
    minRunFeet: 22,
  },
];

export const FINISH_TIERS = [
  {
    id: "laminate",
    name: "Textured Matte Laminate",
    desc: "1mm anti-scratch high pressure laminate over boiling waterproof HDHMR core. Easy maintenance.",
    priceMultiplier: 1.0,
    warranty: "5 Years",
  },
  {
    id: "acrylic",
    name: "High-Gloss Seamless Acrylic",
    desc: "Mirror-finish UV resistant acrylic sheets with zero-joint edge banding. Highly reflective and bright.",
    priceMultiplier: 1.35,
    warranty: "10 Years",
  },
  {
    id: "pu-matte",
    name: "Ultra-Matte Soft-Touch PU",
    desc: "Multi-coat automotive grade polyurethane lacquer with velvety anti-fingerprint touch and thermal self-healing.",
    priceMultiplier: 1.65,
    warranty: "10 Years",
  },
];

export const COUNTERTOP_OPTIONS = [
  { id: "granite", name: "Premium Jet Black Granite", pricePerSqFt: 180 },
  { id: "quartz", name: "Solid White Quartz (Engineered Stone)", pricePerSqFt: 420 },
  { id: "calacatta-quartz", name: "Calacatta Gold Veined Quartz", pricePerSqFt: 580 },
];

