import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Lista = ({ productos, setProductos }) => {
  const [eliminando, setEliminando] = useState([]);

  const eliminarProducto = (index) => {
    setEliminando([...eliminando, index]);
    setTimeout(() => {
      setProductos(productos.filter((_, i) => i !== index));
      setEliminando(eliminando.filter((i) => i !== index));
    }, 500); // Espera a que la animación termine antes de eliminar
  };

  return (
    <div className="row mt-4">
      {productos.map((producto, index) => (
        <div
          className={`col-sm-6 col-md-4 col-lg-3 mb-3 ${
            eliminando.includes(index) ? 'producto-eliminando' : ''
          }`}
          key={index}
        >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Categoría: {producto.categoria}</p>
              <p className="card-text">Precio: {producto.precio}$</p>
              <button
                className="btn btn-danger"
                onClick={() => eliminarProducto(index)}
              >
                <FaTrash /> Eliminar❌
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lista;
