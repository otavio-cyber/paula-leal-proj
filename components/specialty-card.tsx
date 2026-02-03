"use client";

import type { LucideIcon } from "lucide-react";

interface SpecialtyCardProps {
  icon: LucideIcon;
  title: string;
}

export function SpecialtyCard({ icon: Icon, title }: SpecialtyCardProps) {
  return (
    <div className="group bg-off-white hover:bg-verde-claro p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="p-3 rounded-full bg-nude/50 group-hover:bg-off-white transition-colors duration-300">
          <Icon
            className="w-7 h-7 text-marrom group-hover:text-terracota transition-colors duration-300"
            strokeWidth={1.5}
          />
        </div>
        <h3
          className="text-lg font-medium text-marrom-profundo group-hover:text-marrom-profundo transition-colors duration-300"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
