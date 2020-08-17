import React from 'react';
import Layout from '../components/layout/Layout';

import useProductos from '../hooks/useProductos';

import DetallesProducto from '../components/layout/DetallesProducto';

export default function Populares() {

  const { productos } = useProductos('votos');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                <DetallesProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}