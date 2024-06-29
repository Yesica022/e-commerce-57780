import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/data.js';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { idProduct } = useParams();

    useEffect(() => {
        getProducts()
            .then((data) => {
                // Encuentra el producto con el id correspondiente
                const filteredProduct = data.find((dataProduct) => dataProduct.id === idProduct);
                setProduct(filteredProduct); // Establece el producto filtrado en el estado
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [idProduct]); // Añade idProduct como dependencia para actualizar cuando cambia

    return (
        <div>
            <h2>ItemDetailContainer</h2>
            <p>ID del producto: {product?.id}</p>
            <p>Nombre del producto: {product?.name}</p>
            <p>Descripción: {product?.description}</p>
            <p>Stock: {product?.stock}</p>
            <p>Categoría: {product?.category}</p>
            <p>Precio: {product?.price}</p>
        </div>
    );
};

export default ItemDetailContainer;

