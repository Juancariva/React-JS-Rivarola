// src/data/products.js
import { db } from "../utils/firebase";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

export const productosCol = collection(db, "productos");

// Lista completa
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      getDocs(productosCol)
        .then((snapshot) => {
          const products = snapshot.docs.map((d) => ({
            docId: d.id,
            ...d.data(),
          }));
          resolve(products);
        })
        .catch(reject);
    }, 800);
  });
};

// Lista filtrada por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const q = query(productosCol, where("category", "==", categoryId));

      getDocs(q)
        .then((snapshot) => {
          const products = snapshot.docs.map((d) => ({
            docId: d.id,
            ...d.data(),
          }));
          resolve(products);
        })
        .catch(reject);
    }, 800);
  });
};

// Detalle por id del documento
export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ref = doc(db, "productos", id);

      getDoc(ref)
        .then((snap) => {
          if (!snap.exists()) {
            resolve(null);
            return;
          }
          resolve({ id: snap.id, ...snap.data() });
        })
        .catch(reject);
    }, 800);
  });
};
