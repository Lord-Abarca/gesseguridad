import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle, Clock, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GuardiasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-guards.jpg"
            alt="Guardias de Seguridad"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guardias de Seguridad</h1>
            <p className="text-xl text-gray-200">
              Personal altamente capacitado y certificado para proteger sus instalaciones con profesionalismo y
              eficiencia.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protección Profesional las 24 Horas</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nuestros guardias de seguridad son profesionales altamente entrenados que cuentan con todas las
                  certificaciones requeridas por la legislación chilena, incluyendo la acreditación OS-10 de Carabineros
                  de Chile.
                </p>
                <p>
                  Cada miembro de nuestro equipo recibe capacitación continua en técnicas de seguridad, primeros
                  auxilios, prevención de riesgos, manejo de crisis y atención al cliente, garantizando un servicio de
                  excelencia.
                </p>
                <p>
                  Nos adaptamos a las necesidades específicas de cada cliente, proporcionando soluciones de seguridad
                  personalizadas que van desde vigilancia básica hasta protección especializada de alto nivel.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/guards-detail.jpg" alt="Guardias Profesionales" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Características del Servicio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué Incluye Nuestro Servicio?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un servicio integral que cubre todos los aspectos de la seguridad física.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personal Certificado</h3>
              <p className="text-gray-600">
                Todos nuestros guardias cuentan con certificación OS-10 y capacitación continua en seguridad y primeros
                auxilios.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Servicio 24/7</h3>
              <p className="text-gray-600">
                Disponibilidad completa las 24 horas del día, los 7 días de la semana, adaptándonos a sus horarios y
                necesidades.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Supervisión Constante</h3>
              <p className="text-gray-600">
                Supervisores experimentados que garantizan la calidad del servicio y el cumplimiento de protocolos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Guardias */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Guardias Disponibles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con diferentes especialidades para cubrir todas sus necesidades de seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Guardias de Vigilancia</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Control de acceso y salida de personas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Rondas de seguridad programadas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Monitoreo de sistemas de alarma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Reportes detallados de novedades</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Guardias Especializados</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Protección ejecutiva y VIP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Seguridad para eventos especiales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Escoltas y traslado de valores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <span>Seguridad en obras y construcciones</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Contratación */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Contratación</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y transparente para comenzar a proteger sus instalaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Evaluación Inicial</h3>
              <p className="text-gray-600">Visitamos sus instalaciones para evaluar necesidades y riesgos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Propuesta Personalizada</h3>
              <p className="text-gray-600">Diseñamos una solución específica para sus requerimientos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Selección de Personal</h3>
              <p className="text-gray-600">Asignamos guardias especializados según el perfil requerido.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Inicio del Servicio</h3>
              <p className="text-gray-600">Comenzamos la protección con supervisión y seguimiento continuo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">¿Necesita Guardias de Seguridad?</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Contáctenos hoy mismo para una evaluación gratuita y comience a proteger sus instalaciones con
              profesionales certificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  Solicitar Cotización
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
