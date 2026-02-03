import Image from "next/image";
import Link from "next/link";

export function AboutDoctor() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-off-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-doctor.jpg"
                alt="Dra. Paula Leal - Endocrinologista"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracota/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-verde-claro/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span
              className="text-terracota text-sm tracking-widest uppercase mb-4 block"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Sobre
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-marrom-profundo mb-6 leading-tight">
              Dra. Paula Leal
            </h2>
            <div
              className="space-y-4 text-marrom leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <p>
                Com mais de 30 anos de dedicação à endocrinologia, construí
                minha carreira com base em um princípio fundamental:{" "}
                <strong className="text-marrom-profundo">
                  cada paciente é único
                </strong>
                .
              </p>
              <p>
                Minha abordagem vai além do tratamento de sintomas. Busco
                compreender profundamente cada pessoa, seus objetivos de vida e
                suas necessidades específicas para criar um plano de cuidados
                verdadeiramente personalizado.
              </p>
              <p>
                Acredito que a medicina de qualidade deve unir conhecimento
                técnico atualizado com{" "}
                <strong className="text-marrom-profundo">
                  empatia e atenção genuína
                </strong>
                . É essa combinação que permite alcançar resultados
                transformadores na saúde e na qualidade de vida dos meus
                pacientes.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contato"
                className="inline-block px-8 py-3 bg-terracota text-off-white font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-marrom-profundo hover:scale-105"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Agendar Consulta
              </Link>
              <Link
                href="#especialidades"
                className="inline-block px-8 py-3 border-2 border-terracota text-terracota font-medium tracking-wide rounded-full transition-all duration-300 hover:bg-terracota hover:text-off-white"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Ver Especialidades
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
