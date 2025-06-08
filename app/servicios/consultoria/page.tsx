import Image from "next/image"
import Link from "next/link"
import { Brain, Search, FileText, TrendingUp, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConsultoriaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/consultoria-hero.jpg"
            alt="Consultoría en Seguridad"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Consultoría en Seguridad</h1>
            <p className="text-xl text-gray-200">
              Asesoría especializada para optimizar la seguridad de su organización con soluciones estratégicas y
              personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise en Seguridad Estratégica</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nuestro equipo de consultores especializados en seguridad cuenta con décadas de experiencia en el
                  análisis, diseño e implementación de sistemas de seguridad integral para organizaciones de todos los
                  tamaños y sectores.
                </p>
                <p>
                  Ofrecemos una perspectiva externa e imparcial que le permitirá identificar vulnerabilidades, optimizar
                  recursos y desarrollar estrategias de seguridad efectivas y sostenibles en el tiempo.
                </p>
                <p>
                  Trabajamos en estrecha colaboración con su equipo directivo para entender los objetivos de negocio y
                  desarrollar soluciones de seguridad que no solo protejan, sino que también agreguen valor a su
                  organización.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/security-consulting.jpg"
                alt="Consultoría en Seguridad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios de Consultoría */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios de Consultoría</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Asesoría integral en todos los aspectos de la seguridad organizacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Evaluación de Riesgos</h3>
              <p className="text-gray-600">
                Análisis exhaustivo de vulnerabilidades, amenazas y riesgos específicos de su organización y sector.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Diseño de Protocolos</h3>
              <p className="text-gray-600">
                Desarrollo de procedimientos y protocolos de seguridad personalizados para su operación específica.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Planificación Estratégica</h3>
              <p className="text-gray-600">
                Desarrollo de planes maestros de seguridad alineados con los objetivos de negocio a largo plazo.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Optimización de Recursos</h3>
              <p className="text-gray-600">
                Análisis de eficiencia y recomendaciones para optimizar la inversión en seguridad.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auditorías de Seguridad</h3>
              <p className="text-gray-600">
                Revisión integral de sistemas existentes con recomendaciones de mejora y actualización.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Capacitación Especializada</h3>
              <p className="text-gray-600">
                Programas de entrenamiento para equipos internos en cultura de seguridad y prevención de riesgos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Consultoría */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Consultoría</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un enfoque metodológico que garantiza resultados efectivos y sostenibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Diagnóstico Inicial</h3>
              <p className="text-gray-600">
                Evaluación completa de la situación actual, identificación de necesidades y objetivos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Análisis Profundo</h3>
              <p className="text-gray-600">
                Estudio detallado de riesgos, vulnerabilidades y oportunidades de mejora específicas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Desarrollo de Soluciones</h3>
              <p className="text-gray-600">
                Diseño de estrategias y protocolos personalizados con plan de implementación detallado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Seguimiento y Mejora</h3>
              <p className="text-gray-600">
                Acompañamiento en la implementación y monitoreo continuo para asegurar efectividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">¿Necesita Asesoría en Seguridad?</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Contáctenos para una consulta inicial y descubra cómo optimizar la seguridad de su organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  Solicitar Consulta
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10">
                <Phone className="mr-2 h-4 w-4" /> +56 2 2345 6789
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
