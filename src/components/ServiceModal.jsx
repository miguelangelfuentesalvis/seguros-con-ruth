import { useEffect, useRef } from "react"
import { FaChevronRight, FaCheckCircle, FaTimes } from "react-icons/fa"

export default function ServiceModal({ service, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [onClose])

  if (!service) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <div className={`${service.bgColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Cerrar"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-lg text-gray-700 mb-6">{service.detailedInfo.intro}</p>

          <h4 className="text-xl font-semibold mb-4">Características y Beneficios:</h4>
          <ul className="space-y-3 mb-8">
            {service.detailedInfo.benefits.map((info, index) => (
              <li key={index} className="flex items-start">
                <FaChevronRight className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{info}</span>
              </li>
            ))}
          </ul>

          <h4 className="text-xl font-semibold mb-4">¿Por qué elegir nuestro {service.title}?</h4>
          <ul className="space-y-3 mb-8">
            {service.detailedInfo.whyChoose.map((reason, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center">
            <a
              href="#contacto"
              onClick={onClose}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
