const Cart = ({ carrito, eliminarDelCarrito }) => {
  const total = carrito.reduce((acc, item) => acc + item.price, 0);

  const handleComprar = () => {
    alert("Gracias por tu compra 🎉");
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group">
            {carrito.map((item, index) => (
              <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", height: "50px", objectFit: "contain", marginRight: "1rem" }}
                  />
                  <div>
                    <strong>{item.title}</strong>
                    <p className="mb-0">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(item.id)}>
                  Borrar
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 d-flex justify-content-between align-items-center">
            <h4>Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-success" onClick={handleComprar}>
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
