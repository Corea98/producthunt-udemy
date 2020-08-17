import React, { useEffect, useState, useContext } from 'react';
import Layout from '../components/layout/Layout';

import { FirebaseContext } from '../firebase';

import DetallesProducto from '../components/layout/DetallesProducto';

export default function Home() {

  const [ productos, setProductos ] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection("productos").orderBy('creado', 'desc').onSnapshot(manejarSnapshopt);
    }
    obtenerProductos();
  }, []);

  function manejarSnapshopt(snapshot) {
    const productos = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    });
    
    setProductos(productos);
  }

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
