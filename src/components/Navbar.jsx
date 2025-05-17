import { useState } from "react"
import { FaBars, FaTimes, FaShieldAlt } from "react-icons/fa"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#196172] text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img className="h-8 w-auto" src="/logo1.png" alt="Ruth Seguros" />
          <span className="font-bold text-xl">Seguros con Ruth</span>
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#servicios" className="hover:text-gray-300 transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="hover:text-gray-300 transition-colors">
            Sobre mí
          </a>
          <a href="#testimonios" className="hover:text-gray-300 transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="hover:text-gray-300 transition-colors">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="hidden md:block bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-600 transition-colors"
        >
          Contáctanos
        </a>

        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#196172] py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-6">
            <a href="#" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Home
            </a>
            <a href="#servicios" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Servicios
            </a>
            <a href="#nosotros" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Sobre mí
            </a>
            <a href="#testimonios" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Testimonios
            </a>
            <a href="#contacto" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-transparent border border-white text-white px-6 py-2 rounded-full text-center hover:bg-white hover:text-gray-600 transition-colors w-full md:w-auto"
              onClick={toggleMenu}
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
