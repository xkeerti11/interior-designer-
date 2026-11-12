import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "surface" | "concept" | "completed";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variantStyles = {
    default: "bg-ink/5 text-ink border border-border-subtle",
    accent: "bg-accent/10 text-accent border border-accent/20",
    surface: "bg-surface text-muted border border-border-subtle",
    concept: "bg-amber-100/70 text-amber-900 border border-amber-300/60 font-medium",
    completed: "bg-emerald-100/70 text-emerald-900 border border-emerald-300/60 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium select-none",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

