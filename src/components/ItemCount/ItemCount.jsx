import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

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
    <div className="flex items-center space-x-4 mt-4">
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
  );
};

export default ItemCount;
