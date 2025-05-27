import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Temporal, luego usás tu propia API
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Cargando productos...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
         {productos.map(producto => (
          <ProductCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
