import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-teal-600">404</h1>
      <p className="text-lg mt-4">Página no encontrada</p>
      <Link to="/" className="mt-6 text-teal-600 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
