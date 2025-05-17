import { useState } from "react";
import EmailService from "../services/EmailService";

export default function ContactForm({ preselectedService = "" }) {
  const emailService = EmailService();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      if (!formData.email.includes("@")) {
        throw new Error("Por favor ingresa un email válido");
      }

      await emailService.handleEmailSending({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      });

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message || "Error al enviar el mensaje",
      });
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Contáctanos</h3>

      {status.success && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          ¡Mensaje enviado con éxito! Te responderemos pronto.
        </div>
      )}

      {status.error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {status.error}
        </div>
      )}

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
          disabled={status.loading}
          className={`w-full ${
            status.loading
              ? "bg-gray-400"
              : "bg-green-500 hover:bg-green-600"
          } text-white font-bold py-3 px-4 rounded-md transition-colors`}
        >
          {status.loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}