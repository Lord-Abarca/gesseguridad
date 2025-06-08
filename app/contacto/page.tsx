"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("Mensaje enviado correctamente. Nos pondremos en contacto con usted pronto.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contacto GES Seguridad"
            fill
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contáctenos</h1>
            <p className="text-xl text-gray-200">
              Estamos aquí para ayudarle con todas sus necesidades de seguridad. Contáctenos hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Oficina Principal</h3>
                    <p className="text-gray-600">Av. Providencia 1234, Oficina 567</p>
                    <p className="text-gray-600">Providencia, Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Teléfonos</h3>
                    <p className="text-gray-600">+56 2 2345 6789 (Principal)</p>
                    <p className="text-gray-600">+56 9 8765 4321 (Emergencias 24/7)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Correos Electrónicos</h3>
                    <p className="text-gray-600">contacto@gesseguridad.cl</p>
                    <p className="text-gray-600">ventas@gesseguridad.cl</p>
                    <p className="text-gray-600">emergencias@gesseguridad.cl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                    <p className="text-gray-600">Emergencias: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ubicación</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Mapa interactivo de Google Maps</p>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Envíenos un Mensaje</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="su@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Seleccione un servicio</option>
                    <option value="guardias">Guardias de Seguridad</option>
                    <option value="empresas">Seguridad para Empresas</option>
                    <option value="eventos">Seguridad para Eventos</option>
                    <option value="residencial">Seguridad Residencial</option>
                    <option value="consultoria">Consultoría en Seguridad</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Cuéntenos sobre sus necesidades de seguridad..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Oficinas Regionales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Oficinas Regionales</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con presencia en las principales ciudades del país para brindarle un mejor servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Valparaíso</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                  Av. Brasil 567, Valparaíso
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                  +56 32 234 5678
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-yellow-500" />
                  valparaiso@gesseguridad.cl
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Concepción</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                  Av. O'Higgins 890, Concepción
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                  +56 41 345 6789
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-yellow-500" />
                  concepcion@gesseguridad.cl
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">La Serena</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                  Av. Francisco de Aguirre 123, La Serena
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                  +56 51 456 7890
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-yellow-500" />
                  laserena@gesseguridad.cl
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
