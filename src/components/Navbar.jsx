import { Link } from "react-router-dom";
import { useEffect } from "react";


import logo from "../assets/logo.png";
import carrito from "../assets/carrito.png";
import cuenta from "../assets/cuenta.png";

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
    <section>
      <nav className="navbar navbar-expand-lg px-3">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </form>
        
<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"> Novedades </a></li>
    <li><a className="dropdown-item" href="#"> Auriculares </a></li>
    <li><a className="dropdown-item" href="#"> Parlantes </a></li>
    <li><a className="dropdown-item" href="#"> Higiene personal </a></li>
  </ul>
</div>


        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <img className="login-img" src={carrito} alt="/carrito" />
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal">
                <img className="login-img" src={cuenta} alt="Cuenta" />
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
      </section>
    </>
  );
};

export default Navbar;
