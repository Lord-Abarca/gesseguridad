import Image from "next/image"
import Link from "next/link"
import { Home, Shield, Clock, Users, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResidencialPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-residential.jpg"
            alt="Seguridad Residencial"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Seguridad Residencial</h1>
            <p className="text-xl text-gray-200">
              Protección integral para su hogar y familia con servicios discretos y profesionales las 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Su Hogar, Nuestra Prioridad</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Entendemos que su hogar es su refugio más importante. Por eso ofrecemos servicios de seguridad
                  residencial diseñados específicamente para proteger a su familia y sus bienes más preciados, mientras
                  mantiene la privacidad y comodidad de su vida cotidiana.
                </p>
                <p>
                  Nuestros guardias residenciales están especialmente entrenados para brindar un servicio discreto pero
                  efectivo, adaptándose a las rutinas familiares y manteniendo un ambiente de tranquilidad sin ser
                  intrusivos.
                </p>
                <p>
                  Trabajamos con familias, ejecutivos, personalidades públicas y cualquier persona que valore la
                  seguridad y tranquilidad en su hogar, ofreciendo soluciones personalizadas según sus necesidades
                  específicas.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/residential-security.jpg" alt="Seguridad Residencial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios de Seguridad Residencial</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protección completa para su hogar con servicios adaptados a sus necesidades familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vigilancia Perimetral</h3>
              <p className="text-gray-600">
                Monitoreo continuo del perímetro de su propiedad, jardines y accesos principales para prevenir
                intrusiones.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Control de Visitantes</h3>
              <p className="text-gray-600">
                Gestión profesional de visitas, proveedores y servicios, verificando identidades y autorizando accesos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rondas de Seguridad</h3>
              <p className="text-gray-600">
                Inspecciones programadas de la propiedad durante el día y la noche para detectar cualquier anomalía.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Servicio 24/7</h3>
              <p className="text-gray-600">
                Protección continua las 24 horas del día, los 7 días de la semana, con guardias en turnos rotativos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Protección de Propiedades</h3>
              <p className="text-gray-600">
                Custodia de vehículos, equipos, jardines y todas las instalaciones de su propiedad residencial.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Respuesta a Emergencias</h3>
              <p className="text-gray-600">
                Protocolo de actuación inmediata ante alarmas, emergencias médicas o situaciones de riesgo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Propiedades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Propiedades que Protegemos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestros servicios a diferentes tipos de residencias y necesidades familiares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/images/house-type-1.jpg"
                  alt="Casas Familiares"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold mb-2">Casas Familiares</h3>
              <p className="text-sm text-gray-600">Residencias unifamiliares y bifamiliares</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src="/images/house-type-2.jpg" alt="Condominios" fill className="object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2">Condominios</h3>
              <p className="text-sm text-gray-600">Complejos residenciales y condominios</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src="/images/house-type-3.jpg" alt="Parcelas" fill className="object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2">Parcelas</h3>
              <p className="text-sm text-gray-600">Propiedades rurales y parcelas de agrado</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src="/images/house-type-4.jpg" alt="Mansiones" fill className="object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2">Mansiones</h3>
              <p className="text-sm text-gray-600">Propiedades de lujo y mansiones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Especiales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/residential-features.jpg"
                alt="Características Especiales"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Características de Nuestro Servicio</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Discreción Total</h3>
                    <p className="text-gray-600">
                      Nuestros guardias mantienen un perfil bajo, respetando la privacidad familiar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Personal Seleccionado</h3>
                    <p className="text-gray-600">
                      Guardias con experiencia en seguridad residencial y excelente presentación personal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Flexibilidad Horaria</h3>
                    <p className="text-gray-600">
                      Adaptamos los horarios de servicio a las rutinas y necesidades de su familia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Comunicación Directa</h3>
                    <p className="text-gray-600">
                      Línea directa con supervisores y reportes regulares sobre la seguridad de su hogar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Servicios Adicionales</h3>
                    <p className="text-gray-600">
                      Recepción de correspondencia, supervisión de trabajos y otros servicios de apoyo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planes de Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planes de Servicio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Opciones flexibles de seguridad residencial adaptadas a diferentes necesidades y presupuestos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Plan Básico</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Vigilancia diurna (12 horas)
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Control de acceso básico
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Rondas programadas
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Reporte semanal
                </p>
              </div>
              <p className="text-sm text-gray-500">Ideal para propiedades pequeñas</p>
            </div>

            <div className="border-2 border-yellow-500 rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-medium">Más Popular</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Plan Completo</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Vigilancia 24/7
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Control total de visitantes
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Rondas cada 2 horas
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Reporte diario
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Respuesta a emergencias
                </p>
              </div>
              <p className="text-sm text-gray-500">Ideal para familias y propiedades medianas</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Plan Premium</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Vigilancia 24/7 con doble guardia
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Control VIP de visitantes
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Rondas cada hora
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Reporte en tiempo real
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Servicios adicionales incluidos
                </p>
              </div>
              <p className="text-sm text-gray-500">Ideal para mansiones y propiedades de lujo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Proteja su Hogar y Familia</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Contáctenos para una evaluación gratuita de seguridad residencial y descubra cómo podemos brindar
              tranquilidad a su familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  Solicitar Evaluación Gratuita
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
