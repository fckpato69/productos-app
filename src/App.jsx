import React, { useState, useEffect } from 'react';
import FormularioProductos from './components/FormularioProductos';
import Lista from './components/Lista';
import Busqueda from './components/Busqueda';
import './App.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('productos');
    if (data) {
      const productosGuardados = JSON.parse(data);
      setProductos(productosGuardados);
      setProductosFiltrados(productosGuardados);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
    setProductosFiltrados(productos);
  }, [productos]);

  return (
    <div className="container">
      <h1>📦Catálogo de Productos📦</h1>
      <Busqueda productos={productos} setProductosFiltrados={setProductosFiltrados} />
      <FormularioProductos setProductos={setProductos} />
      <Lista productos={productosFiltrados} setProductos={setProductos} />
    </div>
  );
};

export default App;
