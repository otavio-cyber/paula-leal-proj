import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-marrom pt-16 lg:pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Dra. Paula Leal - Endocrinologista"
              width={180}
              height={54}
              className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p
              className="text-off-white/80 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Cuidado especializado em endocrinologia, focado na sua saúde,
              qualidade de vida e longevidade.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-off-white font-medium text-lg mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+5500000000000"
                  className="flex items-center gap-3 text-off-white/80 hover:text-terracota transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <Phone size={18} className="text-terracota" />
                  <span className="text-sm">(00) 0000-0000</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@drapaulaleal.com.br"
                  className="flex items-center gap-3 text-off-white/80 hover:text-terracota transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <Mail size={18} className="text-terracota" />
                  <span className="text-sm">contato@drapaulaleal.com.br</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/drapaulaleal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-off-white/80 hover:text-terracota transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <Instagram size={18} className="text-terracota" />
                  <span className="text-sm">@drapaulaleal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3
              className="text-off-white font-medium text-lg mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Endereço
            </h3>
            <div className="flex items-start gap-3 text-off-white/80">
              <MapPin size={18} className="text-terracota mt-1 flex-shrink-0" />
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Av. Exemplo, 1234
                <br />
                Sala 1001, 10º andar
                <br />
                Bairro - Cidade/UF
                <br />
                CEP: 00000-000
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-off-white font-medium text-lg mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Horários
            </h3>
            <div className="flex items-start gap-3 text-off-white/80">
              <Clock size={18} className="text-terracota mt-1 flex-shrink-0" />
              <div
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <p>Segunda a Sexta</p>
                <p className="text-off-white">08:00 - 18:00</p>
                <p className="mt-2">Sábado</p>
                <p className="text-off-white">08:00 - 12:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-off-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-off-white/60 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              © {new Date().getFullYear()} Dra. Paula Leal. Todos os direitos
              reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-off-white/60 text-sm hover:text-terracota transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-off-white/60 text-sm hover:text-terracota transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
