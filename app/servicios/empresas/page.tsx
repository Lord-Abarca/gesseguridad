import Image from "next/image"
import Link from "next/link"
import { Building, Shield, Users, Eye, AlertTriangle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmpresasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-business.jpg"
            alt="Seguridad para Empresas"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Seguridad para Empresas</h1>
            <p className="text-xl text-gray-200">
              Soluciones integrales de seguridad corporativa adaptadas a las necesidades específicas de su empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protección Integral para su Empresa</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Entendemos que cada empresa tiene necesidades únicas de seguridad. Por eso desarrollamos soluciones
                  personalizadas que protegen no solo sus instalaciones, sino también a su personal, activos y
                  información crítica.
                </p>
                <p>
                  Nuestro enfoque integral combina personal altamente capacitado, tecnología de vanguardia y protocolos
                  probados para crear un ambiente de trabajo seguro que permita a su empresa operar con tranquilidad y
                  eficiencia.
                </p>
                <p>
                  Trabajamos con empresas de todos los tamaños y sectores, desde pequeñas oficinas hasta grandes
                  corporaciones multinacionales, adaptando nuestros servicios a sus requerimientos específicos y
                  presupuesto.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/business-security.jpg" alt="Seguridad Empresarial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Servicios Incluidos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una gama completa de servicios de seguridad diseñados para proteger todos los aspectos de su empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Control de Acceso</h3>
              <p className="text-gray-600">
                Gestión y control de entrada y salida de personal, visitantes y proveedores con sistemas avanzados de
                identificación.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vigilancia Perimetral</h3>
              <p className="text-gray-600">
                Monitoreo continuo de las instalaciones mediante rondas programadas y sistemas de videovigilancia
                integrados.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Protección de Personal</h3>
              <p className="text-gray-600">
                Seguridad para ejecutivos, empleados y visitantes, incluyendo escoltas y protección en eventos
                corporativos.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Protección de Activos</h3>
              <p className="text-gray-600">
                Custodia y protección de equipos, inventarios, documentos confidenciales y otros activos críticos de la
                empresa.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gestión de Crisis</h3>
              <p className="text-gray-600">
                Protocolos de respuesta ante emergencias, evacuaciones y situaciones de crisis con coordinación con
                autoridades.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultoría en Seguridad</h3>
              <p className="text-gray-600">
                Evaluación de riesgos, diseño de protocolos de seguridad y asesoría para optimizar la protección
                empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores Especializados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectores Especializados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencia comprobada en diversos sectores empresariales con soluciones adaptadas a cada industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/images/sector-financial.jpg"
                  alt="Sector Financiero"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold mb-2">Sector Financiero</h3>
              <p className="text-sm text-gray-600">Bancos, financieras y casas de cambio</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src="/images/sector-tech.jpg" alt="Tecnología" fill className="object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2">Tecnología</h3>
              <p className="text-sm text-gray-600">Empresas de software y telecomunicaciones</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/images/sector-manufacturing.jpg"
                  alt="Manufactura"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold mb-2">Manufactura</h3>
              <p className="text-sm text-gray-600">Plantas industriales y centros de producción</p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image src="/images/sector-logistics.jpg" alt="Logística" fill className="object-cover rounded-full" />
              </div>
              <h3 className="font-bold mb-2">Logística</h3>
              <p className="text-sm text-gray-600">Centros de distribución y almacenes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/business-benefits.jpg" alt="Beneficios Empresariales" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios para su Empresa</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Reducción de Riesgos</h3>
                    <p className="text-gray-600">Minimización de pérdidas por robos, vandalismo y otros incidentes.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ambiente Laboral Seguro</h3>
                    <p className="text-gray-600">
                      Mayor tranquilidad para empleados y visitantes, mejorando la productividad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Cumplimiento Normativo</h3>
                    <p className="text-gray-600">
                      Adherencia a regulaciones de seguridad laboral y protección de datos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Imagen Corporativa</h3>
                    <p className="text-gray-600">
                      Proyección de profesionalismo y confianza hacia clientes y socios comerciales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Proteja su Empresa con Profesionales</h2>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Solicite una evaluación gratuita de seguridad y descubra cómo podemos proteger su empresa de manera
              integral.
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
