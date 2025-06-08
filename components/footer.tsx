import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-white.png"
                alt="GES Seguridad Logo"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Empresa líder en servicios de seguridad con más de 15 años de experiencia protegiendo empresas, eventos y
              propiedades en todo Chile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios/guardias" className="text-gray-400 hover:text-white">
                  Guardias de Seguridad
                </Link>
              </li>
              <li>
                <Link href="/servicios/empresas" className="text-gray-400 hover:text-white">
                  Seguridad para Empresas
                </Link>
              </li>
              <li>
                <Link href="/servicios/eventos" className="text-gray-400 hover:text-white">
                  Seguridad para Eventos
                </Link>
              </li>
              <li>
                <Link href="/servicios/residencial" className="text-gray-400 hover:text-white">
                  Seguridad Residencial
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria" className="text-gray-400 hover:text-white">
                  Consultoría en Seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="text-gray-400 hover:text-white">
                  Nuestros Clientes
                </Link>
              </li>
              <li>
                <Link href="/certificaciones" className="text-gray-400 hover:text-white">
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link href="/trabaja-con-nosotros" className="text-gray-400 hover:text-white">
                  Trabaja con Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog de Seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-400">Av. Principal 1234, Santiago, Chile</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-400">+56 2 2345 6789</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-gray-400">contacto@gesseguridad.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GES Seguridad. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terminos" className="text-gray-400 hover:text-white text-sm">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
