import React from "react";
import { cn } from "@/lib/utils";

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={cn(
        "absolute left-4 top-4 z-[100] rounded-md bg-primary px-4 py-2 text-primary-foreground",
        "transform -translate-y-16 focus:translate-y-0",
        "transition-transform duration-200",
        "sr-only focus:not-sr-only",
        className
      )}
    >
      {children}
    </a>
  );
};
