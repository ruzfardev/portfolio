import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  title: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ title, className }) => {
  return (
    <div className={cn("relative mb-12", className)}>
      <div className="flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative">
          <h2 className="bg-background px-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
