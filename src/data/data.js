const products =[ 
    {
      id: "0001",
      name: "Producto 1",
      description: "descripción 1",
      stock: 5,
      category: "plantas",
      price: 200
    },
    {
      id: "0002",
      name: "Producto 2",
      description: "descripción 2",
      stock: 10,
      category: "libros",
      price: 300
    },
    {
      id: "0003",
      name: "Producto 1",
      description: "descripción 3",
      stock: 2,
      category: "velas",
      price: 400
    },
  ]
  
  
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };

  export { getProducts}