import React, { useState } from 'react';
const Busqueda = ({ productos, setProductosFiltrados }) => {
  const [criterio, setCriterio] = useState('');

  const handleBusqueda = (e) => {
    setCriterio(e.target.value);
    setProductosFiltrados(
      productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Buscar productos..."
      value={criterio}
      onChange={handleBusqueda}
    />
  );
};

export default Busqueda;
