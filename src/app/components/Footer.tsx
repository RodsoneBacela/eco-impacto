import { Link } from "react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-lg flex items-center justify-center">
                <span >
                  <img src="/lg.webp" alt="EcoImpacto Logo" className="w-full h-10" />
                </span>
              </div>
              <div>
                <img src="/logo-2.webp" alt="" className="w-full h-8"/>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Capacitando líderes para um futuro sustentável em Moçambique e além.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-400 hover:text-white transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@ecoimpacto.co.mz" className="hover:text-white transition-colors">
                  info@ecoimpacto.co.mz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Tete, Moçambique</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoImpacto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}