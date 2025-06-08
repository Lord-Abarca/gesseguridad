import Image from "next/image"
import Link from "next/link"
import { Users, Shield, Eye, AlertCircle, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-events.jpg"
            alt="Seguridad para Eventos"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Seguridad para Eventos</h1>
            <p className="text-xl text-gray-200">
              Garantizamos la seguridad y el éxito de sus eventos con personal especializado y protocolos probados.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eventos Seguros y Exitosos</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  La seguridad en eventos requiere experiencia, planificación meticulosa y ejecución impecable. Nuestro
                  equipo especializado en eventos cuenta con años de experiencia protegiendo todo tipo de actividades,
                  desde pequeñas reuniones corporativas hasta grandes festivales y conciertos.
                </p>
                <p>
                  Trabajamos en estrecha colaboración con organizadores, autoridades locales y otros proveedores para
                  crear un ambiente seguro que permita a los asistentes disfrutar plenamente del evento mientras
                  mantenemos el control y la tranquilidad.
                </p>
                <p>
                  Nuestro enfoque integral incluye evaluación previa de riesgos, planificación de contingencias, gestión
                  de multitudes y respuesta inmediata ante cualquier situación que pueda surgir.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/event-security.jpg" alt="Seguridad en Eventos" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Eventos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Eventos que Protegemos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencia comprobada en una amplia variedad de eventos y actividades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos Corporativos</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Conferencias y seminarios</li>
                <li>• Lanzamientos de productos</li>
                <li>• Reuniones de accionistas</li>
                <li>• Cenas de gala empresariales</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos Sociales</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Bodas y celebraciones</li>
                <li>• Fiestas privadas</li>
                <li>• Graduaciones</li>
                <li>• Eventos familiares</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos Masivos</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Conciertos y festivales</li>
                <li>• Eventos deportivos</li>
                <li>• Ferias y exposiciones</li>
                <li>• Manifestaciones públicas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos VIP</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Visitas de personalidades</li>
                <li>• Eventos gubernamentales</li>
                <li>• Premiaciones exclusivas</li>
                <li>• Eventos diplomáticos</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos Especiales</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Inauguraciones</li>
                <li>• Eventos religiosos</li>
                <li>• Actividades benéficas</li>
                <li>• Eventos culturales</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eventos Virtuales</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Transmisiones en vivo</li>
                <li>• Eventos híbridos</li>
                <li>• Estudios de grabación</li>
                <li>• Plataformas digitales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Incluidos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cobertura completa para garantizar la seguridad en todas las fases de su evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Planificación Previa</h3>
                  <p className="text-gray-600">
                    Evaluación del venue, análisis de riesgos, diseño de protocolos de seguridad y coordinación con
                    autoridades.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Control de Acceso</h3>
                  <p className="text-gray-600">
                    Gestión de entradas, verificación de invitaciones, control de acreditaciones y manejo de listas VIP.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Gestión de Multitudes</h3>
                  <p className="text-gray-600">
                    Control de flujo de personas, prevención de aglomeraciones y manejo seguro de evacuaciones si es
                    necesario.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Protección VIP</h3>
                  <p className="text-gray-600">
                    Seguridad personalizada para invitados especiales, artistas, ejecutivos y personalidades destacadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Vigilancia Perimetral</h3>
                  <p className="text-gray-600">
                    Monitoreo continuo del perímetro del evento, control de áreas restringidas y prevención de
                    intrusiones.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Respuesta a Emergencias</h3>
                  <p className="text-gray-600">
                    Protocolos de actuación ante incidentes, coordinación con servicios de emergencia y primeros
                    auxilios.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Comunicaciones</h3>
                  <p className="text-gray-600">
                    Sistema de comunicación integrado entre todo el equipo de seguridad y coordinación con
                    organizadores.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Reporte Post-Evento</h3>
                  <p className="text-gray-600">
                    Informe detallado de incidencias, recomendaciones de mejora y análisis de la operación de seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un enfoque sistemático que garantiza la seguridad desde la planificación hasta la ejecución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Consulta Inicial</h3>
              <p className="text-gray-600">
                Reunión para entender los requerimientos, tipo de evento y expectativas de seguridad.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Evaluación del Sitio</h3>
              <p className="text-gray-600">
                Inspección del venue, análisis de riesgos y diseño del plan de seguridad personalizado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Planificación Detallada</h3>
              <p className="text-gray-600">
                Desarrollo de protocolos, asignación de personal y coordinación con otros proveedores.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Ejecución y Seguimiento</h3>
              <p className="text-gray-600">
                Implementación del plan de seguridad con monitoreo continuo y ajustes en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">¿Planifica un Evento?</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Contáctenos para discutir sus necesidades de seguridad y garantizar el éxito de su evento con tranquilidad
              total.
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
