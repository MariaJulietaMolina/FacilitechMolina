import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Pagination } from "react-bootstrap";

const ProductList = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 9;

  useEffect(() => {
    fetch("https://687c5fc4b4bc7cfbda88de39.mockapi.io/api/v1/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, []);

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const indexUltimo = paginaActual * productosPorPagina;
  const indexPrimero = indexUltimo - productosPorPagina;
  const productosPagina = productos.slice(indexPrimero, indexUltimo);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <p className="text-center">Cargando productos...</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {productosPagina.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {[...Array(totalPaginas)].map((_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === paginaActual}
              onClick={() => cambiarPagina(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
