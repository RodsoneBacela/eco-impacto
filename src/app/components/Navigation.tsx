import { Link } from "react-router";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] via-[#10b981] to-[#f97316] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  <img src="/eco.webp" alt="w-full h-8" />
                </span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                <img src="/logo-2.webp" alt="logo" className="w-full h-8"/>
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#2563eb] transition-colors">
              Home
            </Link>
            <Link to="/cursos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
              Cursos
            </Link>
            <Link to="/sobre-nos" className="text-gray-700 hover:text-[#2563eb] transition-colors">
              Sobre Nós
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-[#2563eb] transition-colors">
              Contacto
            </Link>
            <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
              e-admin
            </Button>
          </div>

          {/* Mobile menu botao*/}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/cursos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cursos
            </Link>
            <Link
              to="/sobre-nos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              to="/contacto"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-4 pt-2">
              <Button variant="outline" className="w-full border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white">
                e-admin
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}