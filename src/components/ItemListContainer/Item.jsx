import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="rounded-lg bg-white max-w-sm shadow-lg h-auto flex flex-col justify-between">
      <div className="justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-auto w-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-6 py-2 flex-grow">
        <p className="text-sm text-primary uppercase font-semibold mb-2">{product.category}</p>
        <p className="text-lg font-medium mb-2">{product.name}</p>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <p className="text-lg font-medium text-span">
          COP {product.price.toLocaleString()}
        </p>
      </div>
      <div className="px-6 py-2 mb-4">
        <Link
          to={"/detalle/" + product.id}
          className="inline-block px-6 py-2 border-2 border-teal-600 text-teal-600 font-medium text-sm leading-tight rounded-lg hover:bg-teal-600 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
