import Image from "next/image"
import Link from "next/link"
import { Shield, Building, Users, Home, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Servicios de Seguridad"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h1>
            <p className="text-xl text-gray-200">
              Soluciones de seguridad integrales y personalizadas para cada necesidad.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/service-guards.jpg" alt="Guardias de Seguridad" fill className="object-cover" />
            </div>
            <div>
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Guardias de Seguridad</h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  Nuestros guardias de seguridad son profesionales altamente capacitados y certificados, preparados para
                  proteger sus instalaciones, eventos o propiedades con el más alto nivel de profesionalismo.
                </p>
                <p>
                  Todos nuestros guardias cuentan con la acreditación OS-10 de Carabineros de Chile y reciben
                  capacitación continua en técnicas de seguridad, primeros auxilios, prevención de riesgos y atención al
                  cliente.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Personal uniformado y debidamente identificado</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Equipados con sistemas de comunicación</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Supervisión permanente</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Reportes detallados de actividades</span>
                </div>
              </div>
              <Link href="/servicios/guardias">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Más Información <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad para Empresas</h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  Ofrecemos soluciones de seguridad integrales para empresas de todos los tamaños y sectores, adaptadas
                  a las necesidades específicas de cada cliente.
                </p>
                <p>
                  Nuestros servicios incluyen control de acceso, vigilancia perimetral, protección de activos, seguridad
                  para ejecutivos y empleados, y gestión de crisis.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Evaluación de riesgos y vulnerabilidades</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Diseño de planes de seguridad personalizados</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Integración con sistemas tecnológicos</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Protocolos de respuesta a emergencias</span>
                </div>
              </div>
              <Link href="/servicios/empresas">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Más Información <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image src="/images/service-business.jpg" alt="Seguridad para Empresas" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/service-events.jpg" alt="Seguridad para Eventos" fill className="object-cover" />
            </div>
            <div>
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad para Eventos</h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  Garantizamos la seguridad y el orden en todo tipo de eventos, desde pequeñas reuniones corporativas
                  hasta grandes festivales y conciertos.
                </p>
                <p>
                  Nuestro equipo se encarga del control de acceso, vigilancia, protección de artistas o personalidades,
                  y gestión de multitudes, permitiéndole concentrarse en el éxito de su evento.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Planificación previa al evento</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Control de acceso y acreditaciones</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Gestión de situaciones de emergencia</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Coordinación con autoridades locales</span>
                </div>
              </div>
              <Link href="/servicios/eventos">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Más Información <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Seguridad Residencial</h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p>
                  Protegemos su hogar y familia con servicios de seguridad residencial personalizados, incluyendo
                  vigilancia, control de acceso y respuesta a emergencias.
                </p>
                <p>
                  Nuestros guardias residenciales están especialmente entrenados para brindar un servicio discreto y
                  profesional, manteniendo la privacidad y tranquilidad de su hogar.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Vigilancia perimetral 24/7</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Control de acceso de visitantes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Rondas de seguridad programadas</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Respuesta inmediata a alarmas</span>
                </div>
              </div>
              <Link href="/servicios/residencial">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Más Información <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image src="/images/service-residential.jpg" alt="Seguridad Residencial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Adicionales</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementamos nuestros servicios principales con soluciones especializadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Consultoría en Seguridad</h3>
              <p className="text-gray-600 mb-4">
                Evaluación de riesgos, diseño de protocolos de seguridad y asesoría especializada para optimizar la
                protección de su organización.
              </p>
              <Link href="/servicios/consultoria" className="text-yellow-600 font-medium hover:text-yellow-700">
                Más información →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Investigaciones Privadas</h3>
              <p className="text-gray-600 mb-4">
                Servicios de investigación privada realizados por profesionales con experiencia en seguridad corporativa
                y personal.
              </p>
              <Link href="/servicios/investigaciones" className="text-yellow-600 font-medium hover:text-yellow-700">
                Más información →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3">Capacitación en Seguridad</h3>
              <p className="text-gray-600 mb-4">
                Programas de capacitación para empresas en prevención de riesgos, protocolos de emergencia y cultura de
                seguridad.
              </p>
              <Link href="/servicios/capacitacion" className="text-yellow-600 font-medium hover:text-yellow-700">
                Más información →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
