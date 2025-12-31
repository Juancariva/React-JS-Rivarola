import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Item from "../Item/Index";
import ItemList from "../ItemList/index";
import { getProducts, getProductsByCategory } from "../../../data/products";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const promise = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    promise
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error?.message || error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <main className="item-list-container">
      {greeting && !categoryId && <h1 className="hero-title">{greeting}</h1>}
      {categoryId && <h2 className="hero-title">Categoría: {categoryId}</h2>}
      {loading ? (
        <p className="loading-text">Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </main>
  );
}

export default ItemListContainer;
