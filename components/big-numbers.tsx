"use client";

import { useEffect, useRef, useState } from "react";

interface NumberItemProps {
  value: string;
  label: string;
  suffix?: string;
}

function NumberItem({ value, label, suffix = "" }: NumberItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = Number.parseInt(value.replace(/\D/g, ""), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-off-white mb-2">
        {count}
        {suffix}
      </div>
      <p
        className="text-verde-claro text-sm sm:text-base tracking-wide uppercase"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {label}
      </p>
    </div>
  );
}

const numbers = [
  { value: "30", suffix: "+", label: "Anos de experiência" },
  { value: "10000", suffix: "+", label: "Pacientes atendidos" },
  { value: "500", suffix: "+", label: "Alunos formados" },
  { value: "98", suffix: "%", label: "De satisfação" },
];

export function BigNumbers() {
  return (
    <section className="py-20 lg:py-28 bg-marrom-profundo">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {numbers.map((item) => (
            <NumberItem
              key={item.label}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
