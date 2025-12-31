import NavBar from "./components/containers/NavBar/index.jsx";
import ItemListContainer from "./components/containers/ItemListContainer/index.jsx";
import ItemDetailContainer from "./components/containers/ItemDetailContainer/index.jsx";
import "./index.css";
import { Routes, Route } from "react-router";
import AddProducto from "./pages/addProducto/index.jsx";
import Cart from "./components/containers/Cart/index.jsx";
import CheckoutForm from "./components/containers/CheckoutForm/index.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Inicio / Todos los productos */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a Expert!" />}
        />

        {/* Productos filtrados por categoria */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Carrito de compras */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout */}
        <Route path="/checkout" element={<CheckoutForm />} />

        {/* Detalle de un producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        {/* Agregar nuevo producto */}
        <Route path="/add-producto" element={<AddProducto />} />

        {/* Ruta para manejar 404 */}
        <Route
          path="*"
          element={<h2 style={{ padding: 20 }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}

export default App;
