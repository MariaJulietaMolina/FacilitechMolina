import { useState } from "react";

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!producto.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }
    if (!producto.precio || producto.precio <= 0) {
      nuevosErrores.precio = "El precio debe ser mayor a 0.";
    }
    if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
      nuevosErrores.descripcion = "La descripción debe tener al menos 10 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      const respuesta = await fetch("https://mockapi.io/api/v1/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) throw new Error("Error al agregar el producto");

      const data = await respuesta.json();
      alert("✅ Producto agregado correctamente");

      
      setProducto({ nombre: "", precio: "", descripcion: "" });
      setErrores({});
    } catch (error) {
      alert("❌ Hubo un error al agregar el producto");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>

      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={producto.nombre} onChange={handleChange} />
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      </div>

      <div>
        <label>Precio:</label>
        <input type="number" name="precio" value={producto.precio} onChange={handleChange} />
        {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}
      </div>

      <div>
        <label>Descripción:</label>
        <textarea name="descripcion" value={producto.descripcion} onChange={handleChange} />
        {errores.descripcion && <p style={{ color: "red" }}>{errores.descripcion}</p>}
      </div>

      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
