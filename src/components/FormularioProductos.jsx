import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const FormularioProductos = ({ setProductos }) => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === '' || isNaN(precio)) {
      setError('Por favor ingrese un nombre válido y un precio numérico.');
      return;
    }
    setProductos((prevProductos) => [
      ...prevProductos,
      { nombre, categoria, precio },
    ]);
    setNombre('');
    setCategoria('');
    setPrecio('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre del Producto</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Introduce el nombre del producto"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <input
          type="text"
          className="form-control"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Introduce la categoría del producto"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="text"
          className="form-control"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Introduce el precio del producto"
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary">
        <FaPlus /> Agregar Producto
      </button>
    </form>
  );
};

export default FormularioProductos;

