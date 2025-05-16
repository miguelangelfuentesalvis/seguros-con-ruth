import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { CalendarIntegration } from "../components/calendar";

export default function Contact() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Contacto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-6">
                <div className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">123 Calle Principal, Ciudad, Estado, CP 12345</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-gray-800 transition-colors">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Correo Electrónico</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@segurosconruth.com" className="hover:text-gray-800 transition-colors">
                      info@segurosconruth.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-600 text-white p-3 rounded-full mr-4">
                  <FaClock size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Horario de Atención</h3>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Ubicación</h2>
              <div className="bg-gray-300 h-80 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-gray-600">Mapa de ubicación</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Agenda tu Cita</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <CalendarIntegration />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}