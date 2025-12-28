import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

const obtenberProductos = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const productos = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return productos;
};

const crearProducto = async (producto) => {
  const docRef = await addDoc(collection(db, "productos"), producto);
  return docRef.id;
};

export { obtenberProductos, crearProducto };
