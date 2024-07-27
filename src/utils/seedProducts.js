import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    id: "0001",
    name: "Atrapasueños",
    description: "Agrega un toque de tranquilidad con nuestro atrapasueños.",
    image: "/src/img/tools/atrapasueños.svg",
    stock: 5,
    category: "accesorios",
    price: 40000, // Precio en COP
  },
  {
    id: "0002",
    name: "Rota se camina igual",
    description: "Lorena Pronsky",
    image: "/src/img/books/rota.svg",
    stock: 10,
    category: "libros",
    price: 75000,
  },
  {
    id: "0003",
    name: "En agosto nos vemos",
    description: "Gabriel García Marquez",
    image: "/src/img/books/agosto.svg",
    stock: 8,
    category: "libros",
    price: 35000, // Precio en COP
  },
  {
    id: "0004",
    name: "Biblioteca de media noche",
    description: "Matt Haig",
    image: "/src/img/books/biblioteca.svg",
    stock: 15,
    category: "libros",
    price: 25000, // Precio en COP
  },
  {
    id: "0005",
    name: "Emociónate - Juego de cartas",
    description:
      "Diviértete y conéctate con tus emociones con nuestro juego de cartas",
    image: "/src/img/tools/juego.svg",
    stock: 12,
    category: "accesorios",
    price: 150000, // Precio en COP
  },
  {
    id: "0006",
    name: "Kim ji young",
    description: "Cho Nam-Joo",
    image: "/src/img/books/Kim.svg",
    stock: 7,
    category: "libros",
    price: 35000, // Precio en COP
  },
  {
    id: "0007",
    name: "El libro del té",
    description: "Okakura Kakuzo",
    image: "/src/img/books/té.svg",
    stock: 10,
    category: "libros",
    price: 38000, // Precio en COP
  },
  {
    id: "0008",
    name: "Hojas de hierba",
    description: "Walt Whitman",
    image: "/src/img/books/hojas.svg",
    stock: 20,
    category: "libros",
    price: 32000, // Precio en COP
  },
  {
    id: "0009",
    name: "Hamburguesa vegetariana",
    description: "Productos para una alimentación saludable.",
    image: "/src/img/food/burger.svg",
    stock: 8,
    category: "alimentacion",
    price: 25000, // Precio en COP
  },
  {
    id: "0010",
    name: "Velas aromáticas",
    description:
      "Disfruta de aromas naturales y relajantes con nuestras velas aromáticas",
    image: "/src/img/kits/velas.svg",
    stock: 20,
    category: "kits",
    price: 25000,
  },
  {
    id: "0011",
    name: "Cuidado facial",
    description:
      "Transforma y disfruta tu rutina diaria con nuestro kit de cuidado facial",
    image: "/src/img/kits/facial.svg",
    stock: 20,
    category: "kits",
    price: 45000,
  },
  {
    id: "0012",
    name: "Cuidado capilar",
    description:
      "Nuestro kit de cuidado capilar ofrece lo que necesitas para un cabello saludable.",
    image: "/src/img/kits/shampo.svg",
    stock: 10,
    category: "kits",
    price: 65000,
  },
  {
    id: "0013",
    name: "Aceites esenciales",
    description:
      "Descubre el poder de la aromaterapia con nuestro kit de aceites esenciales.",
    image: "/src/img/kits/aceites.svg",
    stock: 10,
    category: "kits",
    price: 25000,
  },
  {
    id: "0014",
    name: "Alfombra Yoga",
    description:
      "Mejora tu práctica de yoga con nuestra alfombra de alta calidad",
    image: "/src/img/tools/alfombra.svg",
    stock: 12,
    category: "accesorios",
    price: 80000, // Precio en COP
  },
  {
    id: "0020",
    name: "Empanadas vegetariana",
    description:
      "Mejora tu práctica de yoga con nuestra alfombra de alta calidad",
    image: "/src/img/food/empanada.svg",
    stock: 12,
    category: "alimentacion",
    price: 10000, // Precio en COP
  },
];

// Función para sembrar los productos en la base de datos
const seedProducts = () => {
  products.map(({ id, ...rest }) => {
    const productsRef = collection(db, "products");
    addDoc(productsRef, rest);
  });
  return;
};
seedProducts();
