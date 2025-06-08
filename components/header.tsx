"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="GES Seguridad Logo" width={150} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 font-medium">
              Inicio
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-yellow-600 font-medium">
                Servicios <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/servicios/guardias" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Guardias de Seguridad
                </Link>
                <Link href="/servicios/empresas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Seguridad para Empresas
                </Link>
                <Link href="/servicios/eventos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Seguridad para Eventos
                </Link>
                <Link href="/servicios/residencial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Seguridad Residencial
                </Link>
              </div>
            </div>
            <Link href="/nosotros" className="text-gray-700 hover:text-yellow-600 font-medium">
              Quiénes Somos
            </Link>
            <Link href="/clientes" className="text-gray-700 hover:text-yellow-600 font-medium">
              Clientes
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-yellow-600 font-medium">
              Contacto
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="mr-2 h-4 w-4" /> +56 2 2345 6789
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-yellow-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-yellow-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <p className="font-medium text-gray-900 mb-2">Servicios</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/servicios/guardias"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Guardias de Seguridad
                  </Link>
                  <Link
                    href="/servicios/empresas"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seguridad para Empresas
                  </Link>
                  <Link
                    href="/servicios/eventos"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seguridad para Eventos
                  </Link>
                  <Link
                    href="/servicios/residencial"
                    className="block text-gray-700 hover:text-yellow-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seguridad Residencial
                  </Link>
                </div>
              </div>
              <Link
                href="/nosotros"
                className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-t border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link
                href="/clientes"
                className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-t border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-yellow-600 font-medium py-2 border-t border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <div className="pt-2 border-t border-gray-100">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Phone className="mr-2 h-4 w-4" /> +56 2 2345 6789
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
