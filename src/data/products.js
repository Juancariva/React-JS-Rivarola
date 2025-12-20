const URL_API = "https://fakestoreapi.com/products";

// mapa de slugs -> categorías reales de la API
const CATEGORY_MAP = {
  hombre: "men's clothing",
  mujer: "women's clothing",
  electronica: "electronics",
  joyeria: "jewelery",
};

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(URL_API)
        .then((res) => {
          if (!res.ok) throw new Error("Error al obtener productos");
          return res.json();
        })
        .then(resolve)
        .catch(reject);
    }, 800);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    const apiCategory = CATEGORY_MAP[categoryId] ?? categoryId;

    getProducts()
      .then((products) => {
        const filtered = products.filter(
          (product) => product.category === apiCategory
        );
        resolve(filtered);
      })
      .catch(reject);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${URL_API}/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Error al obtener producto");
          return res.json();
        })
        .then(resolve)
        .catch(reject);
    }, 800);
  });
};
