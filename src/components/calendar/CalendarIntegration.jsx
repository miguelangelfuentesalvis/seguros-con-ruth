import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import AppointmentForm from './AppointmentForm';
import CalendarSuccess from './CalendarSuccess';
import useApi from '../../hooks/useApi';

export default function CalendarIntegration() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);
  const { loading: apiLoading, error: apiError, fetchData } = useApi();
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
      setAuthError('Error: Configura VITE_GOOGLE_CLIENT_ID en .env');
      console.error('Missing VITE_GOOGLE_CLIENT_ID');
    }
  }, []);

  const handleSuccess = async (credentialResponse) => {
    try {
      setAuthLoading(true);
      setAuthError(null);

      if (!credentialResponse.credential) {
        throw new Error('No se recibió token de Google');
      }


      localStorage.setItem('google_token', credentialResponse.credential);
      setIsAuthenticated(true);
    } catch (err) {
      setAuthError(`Error de autenticación: ${err.message}`);
      console.error('Auth error:', err);
    } finally {
      setAuthLoading(false);
    }
  };

  if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded">
        Error: Configura VITE_GOOGLE_CLIENT_ID en tu archivo .env
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {(authError || apiError) && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {authError || apiError}
        </div>
      )}

      {(authLoading || apiLoading) && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-2">Cargando...</p>
        </div>
      )}

      {!isAuthenticated ? (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <div className="text-center">
            <p className="mb-4">Inicia sesión con Google para acceder al calendario:</p>
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={() => setAuthError('Error al autenticar con Google. Por favor, intenta nuevamente.')}
              scope="https://www.googleapis.com/auth/calendar"
              useOneTap
            />
          </div>
        </GoogleOAuthProvider>
      ) : appointmentData ? (
        <CalendarSuccess data={appointmentData} />
      ) : (
        <AppointmentForm
          onSuccess={setAppointmentData}
          onError={setAuthError}
        />
      )}
    </div>
  );
}