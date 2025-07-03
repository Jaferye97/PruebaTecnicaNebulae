//External Components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Internal Components
import Layout from './components/layout/Layout';

//Pages
import Welcome from './pages/welcome/PaginaWelcome';
import PaginaNoEncontrada from './pages/errors/PaginaNoEncontrada';
import CrearProducto from './pages/producto/crearProducto/CrearProducto';
import EditarProducto from './pages/producto/editarProducto/EditarProducto';
import ListarProducto from './pages/producto/listarProductos/ListarProductos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route element={<Layout />}>
          <Route
            path="/Producto"
            element={<ListarProducto />}
          />
          <Route
            path="/Producto/Crear"
            element={<CrearProducto />}
          />
          <Route
            path="/Producto/:id"
            element={<EditarProducto />}
          />
          <Route
            path="*"
            element={<PaginaNoEncontrada />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
