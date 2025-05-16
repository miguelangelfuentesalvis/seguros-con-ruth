import { useState } from 'react';
import useApi from '../../hooks/useApi';

export default function AppointmentForm({ onSuccess, onError, accessToken }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { fetchData } = useApi();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const createCalendarEvent = async (eventData) => {
    if (!accessToken) {
      throw new Error('No se encontró el token de acceso. Por favor, inicia sesión nuevamente.');
    }

    const response = await fetchData(
      'https://www.googleapis.com/calendar/v3/calendars/primary/events',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(eventData)
      }
    );

    if (response.error) {
      throw new Error(response.error.message || 'Error al crear el evento en el calendario');
    }

    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
      const now = new Date();

      if (selectedDateTime < now) {
        throw new Error('No puedes agendar citas en fechas pasadas');
      }

      const event = {
        summary: `Cita con ${formData.name}`,
        description: formData.description,
        start: {
          dateTime: `${formData.date}T${formData.time}:00-05:00`,
          timeZone: 'America/Mexico_City'
        },
        end: {
          dateTime: `${formData.date}T${formData.time}:30-05:00`,
          timeZone: 'America/Mexico_City'
        },
        attendees: [{ email: formData.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 }
          ]
        }
      };

      const result = await createCalendarEvent(event);
      onSuccess(result);
    } catch (error) {
      console.error('Error al crear evento:', error);


      let errorMessage = error.message;
      if (error.message.includes('invalid_grant') || error.message.includes('token expired')) {
        errorMessage = 'La sesión ha expirado. Por favor, inicia sesión nuevamente.';
      } else if (error.message.includes('insufficient permissions')) {
        errorMessage = 'No tenemos permisos para crear el evento. Por favor, verifica los permisos de la aplicación.';
      }

      onError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 text-gray-700">Nombre completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          minLength={3}
        />
      </div>

      <div>
        <label className="block mb-1 text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Hora</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
            min="09:00"
            max="18:00"
          />
        </div>
      </div>

      <div>
        <label className="block mb-1 text-gray-700">Motivo de la cita</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="3"
          required
          minLength={10}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded text-white font-medium transition-colors ${isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
          }`}
      >
        {isSubmitting ? 'Agendando...' : 'Confirmar Cita'}
      </button>
    </form>
  );
}