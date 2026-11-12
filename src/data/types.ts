export type MaterialCategory =
  | "pvc-panel"
  | "wpc-fluted"
  | "charcoal-louver"
  | "uv-marble"
  | "vertical-garden"
  | "kitchen-finish"
  | "upvc-profile";

export interface MaterialItem {
  id: string;
  name: string;
  category: MaterialCategory;
  categoryLabel: string;
  image: string;
  finishType: string;
  thicknessMm?: number | null;
  widthMm?: number | null;
  heightMm?: number | null;
  waterResistance: "100% Waterproof" | "Water-Resistant" | "Standard";
  termiteProof: boolean;
  fireRetardant: boolean;
  lowRate?: number | null;
  highRate?: number | null;
  rateUnit?: string;
  description: string;
  features: string[];
  status: "available" | "enquire";
}

export interface PortfolioProject {
  id: string;
  title: string;
  neighborhood: string;
  category: "living-room" | "bedroom" | "kitchen" | "commercial" | "full-home";
  categoryLabel: string;
  summary: string;
  coverImage: string;
  gallery: string[];
  visualType: "Completed Project" | "Concept Visual";
  scope: string[];
  highlight: string;
}

export interface KitchenLayoutOption {
  id: "straight" | "l-shape" | "u-shape" | "parallel" | "island";
  title: string;
  description: string;
  idealFor: string;
  diagramSvgPath: string;
  minRunFeet: number;
}

