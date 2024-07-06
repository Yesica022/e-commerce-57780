// src/data.js
const products = [
  {
    id: "0001",
    name: "Accesorio 1",
    description: "Accesorio útil para el día a día.",
    stock: 5,
    category: "Accesorios",
    price: 200000, // Precio en COP
  },
  {
    id: "0002",
    name: "Rota se camina igual",
    description: "Lorena Pronsky",
    image: "/src/img/books/rota.svg",
    stock: 10,
    category: "Libros",
    price: 75000,
  },

  {
    id: "0003",
    name: "En agosto nos vemos",
    description: "Gabriel García Marquez",
    image: "/src/img/books/agosto.svg",
    stock: 8,
    category: "Libros",
    price: 35000, // Precio en COP
  },
  {
    id: "0004",
    name: "Biblioteca de media noche",
    description: "Matt Haig",
    image: "/src/img/books/biblioteca.svg",
    stock: 15,
    category: "Libros",
    price: 25000, // Precio en COP
  },
  {
    id: "0005",
    name: "Accesorio 2",
    description: "Otro accesorio interesante.",
    stock: 12,
    category: "Accesorios",
    price: 150000, // Precio en COP
  },
  {
    id: "0006",
    name: "Kim ji young",
    description: "Cho Nam-Joo",
    image: "/src/img/books/Kim.svg",
    stock: 7,
    category: "Libros",
    price: 35000, // Precio en COP
  },
  {
    id: "0007",
    name: "El libro del té",
    description: "Okakura Kakuzo",
    image: "/src/img/books/té.svg",
    stock: 10,
    category: "Libros",
    price: 38000, // Precio en COP
  },
  {
    id: "0008",
    name: "Hojas de hierva",
    description: "Walt Whitman",
    image: "/src/img/books/hojas.svg",
    stock: 20,
    category: "Libros",
    price: 32000, // Precio en COP
  },
  {
    id: "0009",
    name: "Alimentación Sana",
    description: "Productos para una alimentación saludable.",
    stock: 8,
    category: "Alimentación Sana",
    price: 25000, // Precio en COP
  },
  {
    id: "0010",
    name:"Velas aromaticas", 
    description: "Disfruta de aromas naturales y relajantes con nuestras velas aromáticas", 
    image:"/src/img/kits/velas.svg",
    stock: 20,
    category: "kits",
    price: 25000,
  },
  {
    id: "0011",
    name:"Cuidado facial", 
    description: "Transforma y disfruta tu rutina diaria con nuestro kit de cuidado facial", 
    image:"/src/img/kits/facial.svg",
    stock: 20,
    category: "kits",
    price: 45000,
  },
  {
    id: "0012",
    name:"Cuidado capilar", 
    description: "Nuestro kit de cuidado capilar ofrece lo que necesitas para un cabello saludable.", 
    image:"/src/img/kits/shampo.svg",
    stock: 10,
    category: "kits",
    price: 65000,
  },
  {
    id: "0013",
    name:"Aceites esenciales", 
    description: "Descubre el poder de la aromaterapia con nuestro kit de aceites esenciales.", 
    image:"/src/img/kits/aceites.svg",
    stock: 10,
    category: "kits",
    price: 25000,
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
