import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Admin = () => {
  const { productos, loading, eliminarProducto } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleEditar = (producto) => {
    navigate("/admin/editar", { state: { producto } });
  };

  return (
    <div className="container mt-4">
      <Helmet>
        <title>Admin | Gestión de Productos</title>
        <meta
          name="description"
          content="Panel de administración para agregar, editar o eliminar productos."
        />
      </Helmet>

      <h2 className="mb-4">⚙️ Área protegida - Gestión de Productos</h2>

      <Link to="/admin/nuevo-producto" className="btn btn-success mb-4">
        <FaPlus /> Agregar nuevo producto
      </Link>

      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={producto.image}
                  alt={producto.title}
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.title}</h5>
                  <p className="card-text text-muted">{producto.description}</p>
                  <p className="card-text fw-bold">${producto.price}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleEditar(producto)}
                    >
                      <FaEdit /> Editar
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      <FaTrashAlt /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;


