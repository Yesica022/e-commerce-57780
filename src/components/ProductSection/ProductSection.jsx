import React from 'react';
import { Link } from 'react-router-dom';

const ProductSection = () => {
  return (
    <section className="flex flex-col items-center bg-white p-14 gap-9 mt-12">
      <div className="mx-auto px-4 text-center">
        <h3 className="text-2xl font-medium text-gray-700 mb-4">Nuestras categorías</h3>
        <p className="text-lg">Descubre nuestros productos diseñados especialmente para cuidar de tu bienestar</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <Link to="/categoria/libros" className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <img src="/books.png" alt="Libros" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Libros</p>
          </div>
        </Link>
        {/* Card 2 */}
        <Link to="/categoria/kits" className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <img src="/Kits.png" alt="Kits de relajación" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Kits de relajación</p>
          </div>
        </Link>
        {/* Card 3 */}
        <Link to="/categoria/accesorios" className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <img src="/Accesories.png" alt="Accesorios" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Accesorios</p>
          </div>
        </Link>
        {/* Card 4 */}
        <Link to="/categoria/alimentacion" className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <img src="/Health Food.png" alt="Alimentación sana" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Alimentación sana</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProductSection;


