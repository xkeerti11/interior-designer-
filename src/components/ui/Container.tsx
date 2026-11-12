import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "tight" | "wide" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}) => {
  const sizeStyles = {
    tight: "max-w-5xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

