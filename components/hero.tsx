"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const heroImages = [
  "/images/img-7314.jpg",
  "/images/img-7716.jpg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "2000ms" }}
        >
          <Image
            src={src}
            alt="Dra. Paula Leal"
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Desktop Gradient */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(64, 38, 23, 0.85) 0%, rgba(64, 38, 23, 0.6) 40%, rgba(64, 38, 23, 0.3) 70%, transparent 100%)",
        }}
      />

      {/* Mobile Gradient */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(64, 38, 23, 0.9) 0%, rgba(64, 38, 23, 0.65) 45%, rgba(64, 38, 23, 0.25) 75%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-screen flex flex-col justify-start lg:justify-center">
        <div className="max-w-2xl pt-24 sm:pt-28 lg:pt-0">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-off-white leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Cuidado especializado em{" "}
            <span className="font-medium text-terracota">
              endocrinologia
            </span>
          </h1>

          {/* Subtítulo (desktop only) */}
          <p
            className="hidden lg:block text-lg sm:text-xl lg:text-2xl text-off-white/90 font-light leading-relaxed mb-8 lg:mb-10 animate-fade-in-up"
            style={{
              fontFamily: "var(--font-montserrat)",
              animationDelay: "0.4s",
            }}
          >
            Focado na sua saúde, qualidade de vida e longevidade.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-in-up mt-4 lg:mt-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="#contato"
              className="inline-block px-8 py-4 bg-terracota text-off-white text-base lg:text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-off-white hover:text-marrom-profundo hover:scale-105 shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <Link
          href="#especialidades"
          className="flex flex-col items-center gap-2 text-off-white/70 hover:text-off-white transition-colors"
          aria-label="Rolar para baixo"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Explore
          </span>
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
}
