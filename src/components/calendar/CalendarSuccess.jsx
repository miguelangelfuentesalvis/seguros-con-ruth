export default function CalendarSuccess({ data }) {
  return (
    <div className="text-center p-6 bg-green-50 rounded-lg">
      <h3 className="text-xl font-bold text-green-700 mb-2">¡Cita Agendada!</h3>
      <p className="mb-4">Hemos programado tu cita para {data.service}.</p>
      
      <div className="text-left bg-white p-4 rounded mb-4">
        <p><strong>Nombre:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Fecha:</strong> {data.date} a las {data.time}</p>
      </div>
      
      <p className="text-sm text-gray-600">
        Recibirás un email de confirmación con los detalles.
      </p>
    </div>
  );
}