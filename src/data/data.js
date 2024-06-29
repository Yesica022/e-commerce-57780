const products = [
  {
    id: "0001",
    name: "Producto 1",
    description: "descripción 1",
    stock: 5,
    category: "Accesorios",
    price: 200
  },
  {
    id: "0002",
    name: "Producto 2",
    description: "descripción 2",
    stock: 10,
    category: "Libros",
    price: 300
  },
  {
    id: "0003",
    name: "Producto 3",
    description: "descripción 3",
    stock: 2,
    category: "Kits de relajación",
    price: 400
  },
  {
    id: "0004",
    name: "Producto 4",
    description: "descripción 4",
    stock: 8,
    category: "Alimentación Sana",
    price: 250
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export { getProducts };
