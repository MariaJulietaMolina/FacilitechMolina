import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container mt-4">
      <h2>⚙️ Área protegida (solo admins)</h2>
      <p>Gestión de productos (a futuro).</p>

      <Link to="/admin/nuevo-producto" className="btn btn-primary mt-3">
        ➕ Agregar nuevo producto
      </Link>
    </div>
  );
};

export default Admin;

