import { useState } from "react"

export default function ContactForm({ preselectedService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    console.log("Formulario enviado:", formData)
    alert("Gracias por contactarnos. Nos comunicaremos contigo pronto.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="service" className="block text-gray-700 mb-2">
            Servicio de interés
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="salud">Seguro de Salud</option>
            <option value="vida">Seguro de Vida</option>
            <option value="auto">Seguro de Auto</option>
            <option value="hogar">Seguro de Hogar</option>
            <option value="dental">Seguro Dental</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
