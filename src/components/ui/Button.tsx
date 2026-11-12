import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "navbar" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.97] touch-manipulation text-center leading-snug";

  const variantStyles = {
    primary:
      "bg-accent text-on-accent hover:bg-accent-hover shadow-sm hover:shadow-md",
    navbar:
      "bg-ink text-footer-text hover:bg-neutral-800 shadow-sm",
    secondary:
      "bg-surface text-ink hover:bg-[#F2ECE0] border border-border-subtle",
    outline:
      "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-surface",
    ghost:
      "bg-transparent text-ink hover:bg-black/5",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 sm:px-4 py-2 rounded-full gap-1.5 min-h-[36px]",
    md: "text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-full gap-2 min-h-[44px]",
    lg: "text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-3.5 rounded-full sm:rounded-full gap-2 sm:gap-2.5 min-h-[48px] sm:min-h-[52px]",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};

