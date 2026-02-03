import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Maria Helena",
    text: "A Dra. Paula transformou minha relação com a saúde. Após anos lutando contra o peso, finalmente encontrei um tratamento que funciona e respeita meu corpo. Sou eternamente grata!",
    role: "Paciente há 5 anos",
  },
  {
    name: "Roberto Almeida",
    text: "Profissionalismo e humanidade andam juntos no consultório da Dra. Paula. Ela realmente ouve e entende as necessidades de cada paciente. Minha qualidade de vida melhorou significativamente.",
    role: "Paciente há 3 anos",
  },
  {
    name: "Fernanda Costa",
    text: "Depois de consultar vários especialistas, encontrei na Dra. Paula o cuidado personalizado que precisava. O acompanhamento é excepcional e os resultados falam por si.",
    role: "Paciente há 2 anos",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-nude">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span
            className="text-terracota text-sm tracking-widest uppercase mb-4 block"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-marrom-profundo mb-4">
            O que dizem os{" "}
            <span className="font-medium text-terracota">pacientes</span>
          </h2>
          <p
            className="text-marrom text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Histórias reais de transformação e cuidado
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              text={testimonial.text}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
