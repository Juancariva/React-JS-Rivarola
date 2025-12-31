import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../../data/products";
import ItemDetail from "../ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error("Error obteniendo producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="item-detail-container">
        <p className="loading-text">Cargando producto...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="item-detail-container">
        <p>No se encontró el producto.</p>
      </main>
    );
  }

  return (
    <main className="item-detail-container">
      <ItemDetail product={product} />
    </main>
  );
}

export default ItemDetailContainer;
