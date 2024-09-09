// Importa los componentes necesarios de react-router-dom para manejar las rutas y redirecciones
import { Navigate, Route, Routes } from 'react-router-dom';

// Importa las rutas de autenticación y del journal (diario) desde sus respectivos módulos
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

// Importa el componente de verificación de autenticación, que se mostrará mientras se verifica el estado de autenticación
import { CheckingAuth } from '../ui';

// Importa el hook personalizado que verifica el estado de autenticación
import { useCheckAuth } from '../hooks';

// Define el componente principal de enrutamiento de la aplicación
export const AppRouter = () => {
  
  // Obtiene el estado de autenticación utilizando el hook personalizado useCheckAuth
  // Este hook probablemente verifica si el usuario está autenticado, no autenticado o si aún se está comprobando el estado.
  const status = useCheckAuth();

  // Si el estado de autenticación está en 'checking', renderiza el componente CheckingAuth (pantalla de carga)
  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    // El componente Routes de react-router-dom se encarga de renderizar las rutas correspondientes según la URL
    <Routes>

      {
        // Si el usuario está autenticado (status === 'authenticated'), se renderizan las rutas del Journal (JournalRoutes)
        (status === 'authenticated')
        ?  <Route path="/*" element={<JournalRoutes />} />

        // Si el usuario no está autenticado, se renderizan las rutas de autenticación (AuthRoutes)
        :  <Route path="/auth/*" element={<AuthRoutes />} />
      }

      {/* Si el usuario intenta acceder a una ruta no definida, lo redirige al login */}
      <Route path="/*" element={<Navigate to='/auth/login' />} />

    </Routes>
  );
};
