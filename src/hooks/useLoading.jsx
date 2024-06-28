import { useState } from "react";

// Hook personalizado para manejar el estado de carga
const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado de carga, inicialmente false

  // Función para mostrar el estado de carga
  const showLoading = () => {
    setIsLoading(true);
  };

  // Función para ocultar el estado de carga
  const hideLoading = () => {
    setIsLoading(false);
  };


  return { isLoading, showLoading, hideLoading, }; 
};

export default useLoading; 
