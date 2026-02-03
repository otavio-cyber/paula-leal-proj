import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  role?: string;
}

export function TestimonialCard({ name, text, role }: TestimonialCardProps) {
  return (
    <div className="bg-off-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <Quote
        className="w-10 h-10 text-terracota/30 mb-4"
        strokeWidth={1}
      />
      <p
        className="text-marrom leading-relaxed mb-6 text-base lg:text-lg"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {text}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-verde-claro/50 flex items-center justify-center">
          <span className="text-marrom-profundo font-medium text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-marrom-profundo font-medium">{name}</p>
          {role && (
            <p
              className="text-marrom/70 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
