"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-[1650px] md:px-10 mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              className="w-[150px] h-auto "
              alt="Backline Studios Logo"
              width={120}
              height={40}
            />
          </Link>

          <nav className="hidden text-[16px] md:flex items-center space-x-6">
            <Link
              href="#"
              className="  text-white hover:text-orange-500 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="  text-white hover:text-orange-500 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#"
              className="  text-white hover:text-orange-500 transition-colors"
            >
              Reglamento
            </Link>
            <Link
              href="#"
              className="  text-white hover:text-orange-500 transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#reservar"
              className="bg-white text-black px-4 py-2 rounded-full  font-medium hover:bg-orange-500 hover:text-white transition-colors"
            >
              Reservar Ahora
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Salas de Ensayo
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors py-2 border-b border-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="#reservar"
              className="bg-orange-500 text-white px-4 py-3 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservar Ahora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
