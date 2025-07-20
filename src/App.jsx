import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "./context/AuthContext";


import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import FormularioProducto from "./components/FormularioProducto"; 

function App() {
  const [carrito, setCarrito] = useState([]);
  const { user } = useAuthContext();

 
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  
  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch("https://687c5fc4b4bc7cfbda88de39.mockapi.io/api/v1/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto");
      }

      const data = await respuesta.json();
      alert("✅ Producto agregado correctamente");
      console.log("Producto agregado:", data);
    } catch (error) {
      alert("❌ Hubo un error al agregar el producto");
      console.error(error);
    }
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
            <Cart
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
            />
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

      
        <Route
          path="/admin/nuevo-producto"
          element={
            <ProtectedRoute>
              <FormularioProducto onAgregar={agregarProducto} />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

