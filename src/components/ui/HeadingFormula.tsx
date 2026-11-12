import React from "react";
import { cn } from "@/lib/utils";

interface HeadingFormulaProps {
  as?: "h1" | "h2" | "h3" | "h4";
  regularText: string;
  italicText: string;
  afterText?: string;
  withCurvedUnderline?: boolean;
  className?: string;
  italicClassName?: string;
}

export const HeadingFormula: React.FC<HeadingFormulaProps> = ({
  as: Component = "h2",
  regularText,
  italicText,
  afterText,
  withCurvedUnderline = true,
  className,
  italicClassName,
}) => {
  return (
    <Component className={cn("tracking-tight text-ink font-sans leading-[1.15]", className)}>
      <span>{regularText} </span>
      <span
        className={cn(
          "font-serif italic font-normal tracking-normal text-[1.12em] px-0.5",
          withCurvedUnderline && "curved-underline",
          italicClassName
        )}
      >
        {italicText}
      </span>
      {afterText && <span> {afterText}</span>}
    </Component>
  );
};

