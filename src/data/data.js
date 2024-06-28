const products = [
  {
    id: "PL-0001",
    name: "Producto 1",
    description: "descripción 1",
    stock: 5,
    category: "Plantas",
    price: 200
  },
  {
    id: "LB-0002",
    name: "Producto 2",
    description: "descripción 2",
    stock: 10,
    category: "Libros",
    price: 300
  },
  {
    id: "VL-0003",
    name: "Producto 3",
    description: "descripción 3",
    stock: 2,
    category: "Velas",
    price: 400
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
};

export { products, getProducts };

// Ejemplo de uso con async/await
const fetchProducts = async () => {
  try {
    const productList = await getProducts();
    console.log(productList);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

fetchProducts();
