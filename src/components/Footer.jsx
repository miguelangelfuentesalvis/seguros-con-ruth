import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaShieldAlt,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#196172] text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="inline-block mb-4 items-center">
              <img className="h-8 w-auto" src="/logo1.png" alt="Ruth Seguros" />
              <span className="font-bold text-xl">Seguros con Ruth</span>
            </a>
            <p className="text-gray-300 mb-4">
              Ofrecemos las mejores soluciones de seguros personalizadas para proteger lo que más te importa.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>

            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-300 hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Seguro de Salud
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Seguro de Auto
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Seguro de Hogar
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Seguro Dental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-gray-300 mt-1 mr-3" />
                <span className="text-gray-300">1650 Sand Lake Rd #350, Orlando, FL 32809</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-gray-300 mr-3" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-gray-300 mr-3" />
                <a href="mailto:info@segurosconruth.com" className="text-gray-300 hover:text-white transition-colors">
                  info@segurosconruth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Seguros con Ruth. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
