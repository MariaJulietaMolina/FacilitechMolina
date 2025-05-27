import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([]);
  const isLoggedIn = true;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
           element={<Home agregarAlCarrito={(item) => setCarrito([...carrito, item])} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail agregarAlCarrito={(item) => setCarrito([...carrito, item])} />}
        />
        <Route
          path="/cart"
          element={<Cart carrito={carrito} />}
        />
        <Route
          path="/admin"
          element={isLoggedIn ? <Admin /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
}

export default App;


const isLoggedIn = true; // false para probar protección

<Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/" />} />;
