"use client";

import {
  Scale,
  Utensils,
  HeartPulse,
  Activity,
  Zap,
  Heart,
  Sparkles,
  Sun,
  Brain,
  Apple,
  Syringe,
  Pill,
} from "lucide-react";
import { SpecialtyCard } from "./specialty-card";

const specialties = [
  { icon: Scale, title: "Emagrecimento" },
  { icon: Utensils, title: "Transtornos Alimentares" },
  { icon: HeartPulse, title: "Doenças Crônicas" },
  { icon: Activity, title: "Doenças Metabólicas" },
  { icon: Zap, title: "Performance" },
  { icon: Heart, title: "Libido" },
  { icon: Sparkles, title: "Reposição Hormonal" },
  { icon: Sun, title: "Qualidade de Vida" },
  { icon: Brain, title: "Memória" },
  { icon: Apple, title: "Estratégias Alimentares" },
  { icon: Syringe, title: "Injetáveis" },
  { icon: Pill, title: "Vitaminas e Minerais" },
];

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 lg:py-32 bg-nude">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-marrom-profundo mb-4">
            Áreas de{" "}
            <span className="font-medium text-terracota">Especialização</span>
          </h2>
          <p
            className="text-marrom text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Cuidado integral e personalizado para sua saúde endócrina
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {specialties.map((specialty) => (
            <SpecialtyCard
              key={specialty.title}
              icon={specialty.icon}
              title={specialty.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
