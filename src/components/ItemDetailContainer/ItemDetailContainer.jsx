import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/data.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        getProducts()
            .then((data) => {
                const filteredProduct = data.find((dataProduct) => dataProduct.id === idProduct);
                setProduct(filteredProduct);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [idProduct]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.name} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
                        <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{product.name}</h2>
                        <p className="mt-2 text-gray-500">{product.description}</p>
                        <p className="mt-2 text-gray-500">Stock: {product.stock}</p>
                        <p className="mt-2 text-gray-500">Precio: {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;


