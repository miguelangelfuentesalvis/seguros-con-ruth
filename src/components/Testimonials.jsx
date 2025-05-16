import { useState } from "react"
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente de Seguro de Vida",
    quote:
      "Ruth me ayudó a encontrar el seguro de vida perfecto para mi familia. El proceso fue sencillo y ahora tengo la tranquilidad de saber que mis seres queridos estarán protegidos.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Cliente de Seguro de Auto",
    quote:
      "Después de mi accidente, el equipo de Ruth hizo que el proceso de reclamo fuera increíblemente fácil. Su servicio al cliente es excepcional y siempre están disponibles para responder mis preguntas.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Cliente de Seguro de Hogar",
    quote:
      "Gracias a Ruth, encontré un seguro de hogar que se ajusta perfectamente a mis necesidades y presupuesto. Su conocimiento y profesionalismo hicieron toda la diferencia.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  function nextTestimonial() {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  function prevTestimonial() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonios" className="py-16 bg-[#337f8c] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen mis clientes</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#196172] rounded-lg p-8 shadow-lg relative">
            <FaQuoteLeft className="text-[#337f8c] text-4xl absolute top-4 left-4" />

            <div className="text-center pt-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#337f8c] flex items-center justify-center">
                <FaUser size={40} className="text-white" />
              </div>
              <p className="text-xl italic mb-6">{current.quote}</p>
              <h4 className="text-xl font-semibold">{current.name}</h4>
              <p className="text-gray-300">{current.role}</p>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-[#337f8c] hover:bg-[#196172] text-white p-2 rounded-full transition-colors"
                aria-label="Testimonio anterior"
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-[#337f8c] hover:bg-[#196172] text-white p-2 rounded-full transition-colors"
                aria-label="Testimonio siguiente"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
