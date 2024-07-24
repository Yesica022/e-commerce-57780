import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd, addCar }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col  mt-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="px-3 py-1 border-2 border-gray-500 rounded"
          disabled={count <= 1}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={increment}
          className="px-3 py-1 border-2 border-gray-500 rounded"
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button
        onClick={() => addCar(count)}
        className="mt-4 px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm leading-tight rounded-lg hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
