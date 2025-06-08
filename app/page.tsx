import Image from "next/image"
import Link from "next/link"
import {
  ChevronRight,
  Shield,
  Users,
  Building,
  Phone,
  Clock,
  CheckCircle,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-image.jpg"
            alt="Equipo de seguridad GES"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Protección y Seguridad Profesional
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Soluciones de seguridad integral para empresas, eventos y propiedades. Más de 15 años de experiencia
              protegiendo lo que más valora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Solicitar Cotización
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Nuestros Servicios <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios de Seguridad</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones de seguridad personalizadas para satisfacer las necesidades específicas de cada
              cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Guardias de Seguridad</h3>
              <p className="text-gray-600 mb-4">
                Personal capacitado y certificado para proteger sus instalaciones, eventos o propiedades con
                profesionalismo.
              </p>
              <Link
                href="/servicios/guardias"
                className="flex items-center text-yellow-600 font-medium hover:text-yellow-700"
              >
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguridad para Empresas</h3>
              <p className="text-gray-600 mb-4">
                Protección integral para instalaciones comerciales, industriales y corporativas con personal
                especializado.
              </p>
              <Link
                href="/servicios/empresas"
                className="flex items-center text-yellow-600 font-medium hover:text-yellow-700"
              >
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguridad para Eventos</h3>
              <p className="text-gray-600 mb-4">
                Control de acceso, vigilancia y protección para todo tipo de eventos públicos y privados.
              </p>
              <Link
                href="/servicios/eventos"
                className="flex items-center text-yellow-600 font-medium hover:text-yellow-700"
              >
                Más información <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir GES Seguridad?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Personal Certificado</h3>
              <p className="text-gray-600">
                Guardias capacitados y con todas las certificaciones requeridas por la ley.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Servicio 24/7</h3>
              <p className="text-gray-600">Disponibilidad permanente para atender sus necesidades de seguridad.</p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Equipamiento Moderno</h3>
              <p className="text-gray-600">
                Tecnología y equipamiento de última generación para garantizar su seguridad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Experiencia Comprobada</h3>
              <p className="text-gray-600">Más de 15 años brindando servicios de seguridad de excelencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-black mb-2">¿Necesita servicios de seguridad?</h2>
              <p className="text-lg text-black/80">Contáctenos hoy mismo para una consulta gratuita y personalizada.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                Solicitar Cotización
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
                <Phone className="mr-2 h-4 w-4" /> Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "El servicio de GES Seguridad ha sido excepcional. Su personal es profesional y siempre está atento a
                cualquier situación. Recomiendo ampliamente sus servicios."
              </p>
              <div>
                <p className="font-bold">Carlos Mendoza</p>
                <p className="text-sm text-gray-500">Gerente de Operaciones, Empresa Comercial</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Contratamos a GES para un evento importante y quedamos muy satisfechos. Su equipo fue discreto pero
                efectivo, manteniendo el orden sin interferir con la experiencia de nuestros invitados."
              </p>
              <div>
                <p className="font-bold">María González</p>
                <p className="text-sm text-gray-500">Coordinadora de Eventos, Hotel Premium</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Llevamos más de 3 años trabajando con GES Seguridad para proteger nuestras instalaciones. Su respuesta
                ante incidentes es rápida y su equipo siempre está bien preparado."
              </p>
              <div>
                <p className="font-bold">Roberto Valenzuela</p>
                <p className="text-sm text-gray-500">Director de Seguridad, Centro Comercial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctenos</h2>
              <p className="text-gray-300 mb-8">
                Estamos disponibles para atender sus consultas y proporcionarle una solución de seguridad adaptada a sus
                necesidades.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Dirección</h3>
                    <p className="text-gray-300">Av. Principal 1234, Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Teléfono</h3>
                    <p className="text-gray-300">+56 2 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-300">contacto@gesseguridad.cl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Envíenos un mensaje</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                      placeholder="Su email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                    placeholder="Su teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
                    placeholder="¿En qué podemos ayudarle?"
                  ></textarea>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Enviar Mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
