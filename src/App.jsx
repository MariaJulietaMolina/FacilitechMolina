import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute"; 
import { useState } from "react";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const [carrito, setCarrito] = useState([]);
  const { user } = useAuthContext(); 

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <Routes>
     
      <Route path="/" element={<Layout />}>
       
        <Route
          index
          element={
            <Home agregarAlCarrito={(item) => setCarrito([...carrito, item])} />
          }
        />

        
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              agregarAlCarrito={(item) => setCarrito([...carrito, item])}
            />
          }
        />

        
        <Route
          path="/cart"
          element={
            <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
          }
        />

        
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
