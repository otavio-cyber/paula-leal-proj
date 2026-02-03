"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-off-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="#inicio" className="relative z-10">
            <Image
              src="/images/logo.png"
              alt="Dra. Paula Leal - Endocrinologista"
              width={200}
              height={60}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? "text-marrom hover:text-terracota"
                    : "text-off-white hover:text-terracota"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="px-6 py-2.5 bg-terracota text-off-white text-sm font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-marrom-profundo hover:scale-105"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Agendar Consulta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-marrom-profundo" : "text-off-white"
            }`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-marrom-profundo/95 backdrop-blur-lg transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl text-off-white font-light tracking-wide transition-colors duration-300 hover:text-terracota"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-terracota text-off-white text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-nude hover:text-marrom-profundo"
          >
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
