import NavBar from "./components/containers/NavBar/index.jsx";
import ItemListContainer from "./components/containers/ItemListContainer/index.jsx";
import ItemDetailContainer from './components/containers/ItemDetailContainer/index.jsx';
import './index.css'
import { Routes, Route } from "react-router";

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        {/* Todos los productos */}
        <Route
          path="/"
          element={<ItemListContainer greeting="¡Bienvenido a Expert!" />}
        />

        {/* Productos filtrados por categoria */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* Detalle de un producto */}
        <Route 
        path="/item/:id" 
        element={<ItemDetailContainer />} />

        {/* Ruta para manejar 404 */}
        <Route
          path="*"
          element={<h2 style={{ padding: 20 }}>404 - Página no encontrada</h2>}
        />
      </Routes>
    </>
  );
}

export default App
