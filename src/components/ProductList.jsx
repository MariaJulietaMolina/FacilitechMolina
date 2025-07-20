import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("https://mockapi.io/clone/6830f5966205ab0d6c3ae2ba")
      .then(res => res.json())
      .then(data => {
        setProductos(data);  
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
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

