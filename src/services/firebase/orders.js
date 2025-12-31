import { db } from "../../utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const createOrderFS = (order) => {
  const ordersCol = collection(db, "orders");
  return addDoc(ordersCol, { ...order, createdAt: serverTimestamp() });
};
