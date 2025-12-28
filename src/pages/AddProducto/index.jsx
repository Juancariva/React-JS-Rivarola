import { useEffect } from "react";
import { crearProducto } from "../../services/firebase/productos";

const productos = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 110,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "hombre",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    stock: 2,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "hombre",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    stock: 3,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 56,
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
    category: "hombre",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    stock: 1,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 16,
    description:
      "The color could be slightly different between on the screen and in practice.",
    category: "hombre",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    stock: 4,
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon.",
    category: "joyeria",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    stock: 2,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "joyeria",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    stock: 3,
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 10,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
    category: "joyeria",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    stock: 1,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 12,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.",
    category: "joyeria",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    stock: 2,
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance",
    category: "electronica",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    stock: 4,
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 110,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response.",
    category: "electronica",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    stock: 3,
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 110,
    description: "3D NAND flash are applied to deliver high transfer speeds.",
    category: "electronica",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    stock: 1,
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy.",
    category: "electronica",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    stock: 2,
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 600,
    description: "21.5 inches Full HD widescreen IPS display.",
    category: "electronica",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    stock: 4,
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    price: 1000,
    description: "49 inch super ultrawide curved gaming monitor.",
    category: "electronica",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    stock: 3,
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56,
    description: "Detachable liner fabric, warm fleece.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    stock: 2,
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 30,
    description: "Faux leather material for style and comfort.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    stock: 1,
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 40,
    description: "Lightweight perfect for trip or casual wear.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    stock: 3,
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9,
    description: "Lightweight fabric with great stretch for comfort.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    stock: 2,
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 8,
    description: "Moisture wicking fabric which helps keep moisture away.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    stock: 4,
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 13,
    description: "Casual cotton short sleeve t-shirt.",
    category: "mujer",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    stock: 1,
  },
];

export default function AddProducto() {
  const handleUpload = () => {
    Promise.all(productos.map((p) => crearProducto(p)))
      .then(() => console.log("Productos cargados"))
      .catch(console.error);
  };

  return (
    <main style={{ padding: 20 }}>
      <button onClick={handleUpload}>Subir productos a Firestore</button>
    </main>
  );
}
