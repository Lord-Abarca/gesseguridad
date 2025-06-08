import Image from "next/image"
import { Building, Users, Award, TrendingUp } from "lucide-react"

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/clients-hero.jpg"
            alt="Nuestros Clientes"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Clientes</h1>
            <p className="text-xl text-gray-200">
              Empresas líderes confían en GES Seguridad para proteger sus activos más valiosos.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <p className="text-gray-600">Empresas Atendidas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Eventos Protegidos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600">Satisfacción del Cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores que Atendemos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sectores que Atendemos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Brindamos servicios de seguridad especializados para diversos sectores de la economía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image src="/images/sector-retail.jpg" alt="Retail" fill className="object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retail y Centros Comerciales</h3>
              <p className="text-gray-600">
                Protección integral para tiendas, centros comerciales y espacios de retail con alto flujo de personas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/sector-corporate.jpg"
                  alt="Corporativo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Sector Corporativo</h3>
              <p className="text-gray-600">
                Seguridad para oficinas corporativas, edificios empresariales y sedes de grandes compañías.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/sector-industrial.jpg"
                  alt="Industrial"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Sector Industrial</h3>
              <p className="text-gray-600">
                Protección de instalaciones industriales, plantas de producción y centros de distribución.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image src="/images/sector-healthcare.jpg" alt="Salud" fill className="object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sector Salud</h3>
              <p className="text-gray-600">
                Seguridad especializada para hospitales, clínicas y centros de atención médica.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image src="/images/sector-education.jpg" alt="Educación" fill className="object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sector Educativo</h3>
              <p className="text-gray-600">
                Protección para colegios, universidades e instituciones educativas de todos los niveles.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src="/images/sector-hospitality.jpg"
                  alt="Hotelería"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Hotelería y Turismo</h3>
              <p className="text-gray-600">
                Servicios de seguridad para hoteles, restaurantes y empresas del sector turístico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Destacados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clientes Destacados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas líderes que han confiado en nuestros servicios de seguridad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-1.png"
                alt="Cliente 1"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-2.png"
                alt="Cliente 2"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-3.png"
                alt="Cliente 3"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-4.png"
                alt="Cliente 4"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-5.png"
                alt="Cliente 5"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
              <Image
                src="/images/client-6.png"
                alt="Cliente 6"
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Algunos ejemplos de cómo hemos ayudado a nuestros clientes a mejorar su seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/case-study-1.jpg" alt="Caso de Éxito 1" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Centro Comercial Plaza Norte</h3>
                <p className="text-gray-600 mb-4">
                  Implementamos un sistema integral de seguridad que redujo los incidentes en un 75% y mejoró la
                  experiencia de compra de los visitantes.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Sector:</span> Retail | <span className="font-medium">Año:</span> 2023
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/case-study-2.jpg" alt="Caso de Éxito 2" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Corporación Minera del Sur</h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos e implementamos protocolos de seguridad que mejoraron la protección de activos críticos y
                  personal en un 90%.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Sector:</span> Minería | <span className="font-medium">Año:</span> 2022
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/case-study-3.jpg" alt="Caso de Éxito 3" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Festival de Música Verano 2023</h3>
                <p className="text-gray-600 mb-4">
                  Proporcionamos seguridad para un evento de 50,000 asistentes sin incidentes mayores, garantizando una
                  experiencia segura para todos.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Sector:</span> Eventos | <span className="font-medium">Año:</span> 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
