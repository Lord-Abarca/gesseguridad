import Image from "next/image"
import { CheckCircle, Award, Users, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Equipo GES Seguridad"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Quiénes Somos</h1>
            <p className="text-xl text-gray-200">
              Conozca más sobre GES Seguridad, nuestra historia, valores y compromiso con la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  GES Seguridad nació en 2008 con la visión de transformar la industria de la seguridad en Chile,
                  ofreciendo servicios profesionales con un enfoque centrado en el cliente y la excelencia operativa.
                </p>
                <p>
                  Lo que comenzó como una pequeña empresa familiar con un puñado de guardias, ha crecido hasta
                  convertirse en una de las empresas de seguridad más respetadas del país, con presencia en múltiples
                  regiones y un equipo de más de 200 profesionales altamente capacitados.
                </p>
                <p>
                  A lo largo de nuestra trayectoria, hemos mantenido firme nuestro compromiso con la calidad, la ética
                  profesional y la mejora continua, adaptándonos a las nuevas tecnologías y metodologías para ofrecer
                  soluciones de seguridad integrales y efectivas.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/about-history.jpg" alt="Historia de GES Seguridad" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misión, Visión y Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros principios fundamentales guían cada acción y decisión que tomamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Misión</h3>
              <p className="text-gray-600 text-center">
                Proporcionar servicios de seguridad de la más alta calidad que protejan eficazmente a nuestros clientes,
                sus activos y su personal, contribuyendo a crear entornos seguros donde puedan desarrollar sus
                actividades con tranquilidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Visión</h3>
              <p className="text-gray-600 text-center">
                Ser reconocidos como la empresa líder en servicios de seguridad en Chile, destacando por nuestra
                excelencia operativa, innovación constante y el desarrollo profesional de nuestro equipo humano.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Integridad y ética profesional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Compromiso con la excelencia</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Respeto por las personas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Trabajo en equipo</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Innovación y mejora continua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Equipo Directivo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesionales con amplia experiencia en seguridad y gestión empresarial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-1.jpg" alt="Director General" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Carlos Martínez</h3>
              <p className="text-gray-600">Director General</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-2.jpg" alt="Directora de Operaciones" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Ana Gómez</h3>
              <p className="text-gray-600">Directora de Operaciones</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-3.jpg" alt="Director de Recursos Humanos" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Roberto Silva</h3>
              <p className="text-gray-600">Director de Recursos Humanos</p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/images/team-4.jpg" alt="Directora Comercial" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">María Rodríguez</h3>
              <p className="text-gray-600">Directora Comercial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificaciones y Acreditaciones</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cumplimos con los más altos estándares de calidad y seguridad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/cert-1.jpg" alt="Certificación ISO 9001" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-center">ISO 9001:2015</h3>
              <p className="text-gray-600 text-center text-sm">Gestión de Calidad</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/cert-2.jpg" alt="Certificación ISO 45001" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-center">ISO 45001:2018</h3>
              <p className="text-gray-600 text-center text-sm">Seguridad y Salud Laboral</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/cert-3.jpg" alt="Acreditación OS-10" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-center">OS-10</h3>
              <p className="text-gray-600 text-center text-sm">Carabineros de Chile</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <Image src="/images/cert-4.jpg" alt="Certificación BASC" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-center">BASC</h3>
              <p className="text-gray-600 text-center text-sm">Comercio Seguro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
