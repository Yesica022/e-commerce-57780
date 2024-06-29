import React from 'react';

const ProductSection = () => {
  return (
    <section className="flex flex-col items-center bg-white p-14 gap-9 mt-12">
      <div className="mx-auto px-4 text-center">
        <h3 className="text-2xl font-medium text-gray-700 mb-4">Nuestras categorías</h3>
        <p className="text-lg">Descubre nuestros productos diseñados especialmente para cuidar de tu bienestar</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/img/Books.png" alt="Libros" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Libros</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/img/Kits.png" alt="Kits de relajación" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Kits de relajación</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/img/Accesories.png" alt="Accesorios" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Accesorios</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/src/img/Health Food.png" alt="Alimentación sana" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <p className="text-lg">Alimentación sana</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
