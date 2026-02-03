import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-marrom-profundo relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracota/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-verde-medio/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-off-white mb-6 leading-tight">
            Pronto para cuidar da sua{" "}
            <span className="font-medium text-terracota">saúde</span>?
          </h2>
          <p
            className="text-verde-claro text-lg lg:text-xl mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Agende sua consulta e dê o primeiro passo em direção a uma vida mais
            saudável e equilibrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contato"
              className="inline-block px-10 py-4 bg-terracota text-off-white text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-off-white hover:text-marrom-profundo hover:scale-105 shadow-lg"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Agendar Consulta
            </Link>
            <Link
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border-2 border-off-white text-off-white text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-off-white hover:text-marrom-profundo"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
