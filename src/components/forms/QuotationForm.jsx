import { useState } from 'react';

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Seguro de Auto',
    message: ''
  });

  const services = [
    'Seguro de Auto',
    'Seguro de Hogar',
    'Seguro de Vida',
    'Seguro Médico'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Cotización enviada. Nos pondremos en contacto pronto.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Nombre Completo</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Teléfono</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Servicio</label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full p-2 border rounded"
        >
          {services.map(service => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Mensaje</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border rounded"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Solicitar Cotización
      </button>
    </form>
  );
}