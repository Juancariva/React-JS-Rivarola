import { useEffect } from "react";
import { obtenberProductos } from "../../services/firebase/productos";

const productos = () => {
  useEffect(() => {
    obtenberProductos().then((prod) => console.log(prod));
  }, []);
};
