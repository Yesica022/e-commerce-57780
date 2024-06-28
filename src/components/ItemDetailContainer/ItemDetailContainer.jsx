//Archivo para la vista del detalle del producto
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../data/data.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProducts()
            .then((data) => {
                // Encuentra el producto con id "0002"
                const filteredProduct = data.find((dataProduct) => dataProduct.id === "0002");
                setProduct(filteredProduct); // Establece el producto filtrado en el estado
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>ItemDetailContainer</h2>
            <p>ID del producto: {product.id}</p>
            <p>Nombre del producto: {product.name}</p>
            <p>Descripción: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Categoría: {product.category}</p>
            <p>Precio: {product.price}</p>
        </div>
    );
};

export default ItemDetailContainer;

