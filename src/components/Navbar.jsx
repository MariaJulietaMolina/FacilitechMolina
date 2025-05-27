import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login simulado ✅");

    const modalEl = document.getElementById("loginModal");
    let modalInstance = window.bootstrap.Modal.getInstance(modalEl);

    if (!modalInstance) {
      modalInstance = new window.bootstrap.Modal(modalEl);
    }

    modalInstance.hide();

    document.querySelector(".modal-backdrop")?.remove();
    document.body.classList.remove("modal-open");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <Link className="navbar-brand" to="/">FaciliTec</Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </nav>


      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Iniciar sesión</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
