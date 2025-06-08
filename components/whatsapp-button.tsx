"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/56912345678", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-2 w-64">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-900">¿Necesita ayuda?</h3>
            <button onClick={() => setIsTooltipVisible(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Contáctenos por WhatsApp para una respuesta inmediata a sus consultas de seguridad.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chatear ahora
          </button>
        </div>
      )}

      <button
        onClick={() => (isTooltipVisible ? handleWhatsAppClick() : setIsTooltipVisible(true))}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  )
}
