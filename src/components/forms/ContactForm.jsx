import { useState } from 'react';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const auth = new google.auth.OAuth2({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      });
      auth.setCredentials({ access_token: localStorage.getItem('google_token') });

      const gmail = google.gmail({ version: 'v1', auth });

      const emailLines = [
        `From: ${formData.email}`,
        `To: tu@email.com`,
        'Content-Type: text/html; charset=utf-8',
        `Subject: Mensaje de contacto de ${formData.name}`,
        '',
        `<p><strong>Nombre:</strong> ${formData.name}</p>`,
        `<p><strong>Email:</strong> ${formData.email}</p>`,
        `<p><strong>Mensaje:</strong> ${formData.message}</p>`
      ];
      
      const email = emailLines.join('\n');
      const base64Email = btoa(unescape(encodeURIComponent(email)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: base64Email
        }
      });

      alert('Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Nombre</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      
      <div>
        <label className="block mb-1 font-medium">Mensaje</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-2 border rounded"
          rows="4"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}