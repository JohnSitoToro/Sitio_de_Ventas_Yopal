import React from 'react';
import './Home.css';
import ChatbotBubble from "../../layout/footer/Chatbot";

// --- 1. Importar imágenes de productos fijos ---
import imgProd1 from '../../assets/images/producto1.JPG';
import imgProd2 from '../../assets/images/producto2.JPG';
import imgProd3 from '../../assets/images/producto3.JPG';
import imgProd4 from '../../assets/images/producto4.JPG';
import imgProd5 from '../../assets/images/producto5.JPG';
import imgProd6 from '../../assets/images/producto6.JPG';
import imgProd7 from '../../assets/images/producto7.JPG';
import imgProd8 from '../../assets/images/producto8.JPG';
import imgProd9 from '../../assets/images/producto9.JPG';
import imgProd10 from '../../assets/images/producto10.JPG';
import imgProd11 from '../../assets/images/producto11.JPG';
import imgProd12 from '../../assets/images/producto12.JPG';

// --- 2. Importar contexto de productos ---
import { useProductos } from '../admin/context/ProductosContext';

const Home = () => {

  const { productos: productosAdmin } = useProductos(); // productos creados en Admin

  const productosFijos = [
    { id: 1, brand: 'Melena De León En Polvo 60g', nombre: 'Melena De León', precio: '$112.800', imagenUrl: imgProd1 },
    { id: 2, brand: 'Gummy Vinagre de Manzana Gomas 3Q', nombre: 'Gummy Vinagre', precio: '$80.000', imagenUrl: imgProd2 },
    { id: 3, brand: 'Biotics x 30 cápsulas Fito Medic´s', nombre: 'Biotic', precio: '$150.000', imagenUrl: imgProd3 },
    { id: 4, brand: 'Colageno Hidrolizado + Vitamina E', nombre: 'Colageno Hidrolizado', precio: '$200.500', imagenUrl: imgProd4 },
    { id: 5, brand: 'Vitamina C 1000 mg', nombre: 'Vitamina C', precio: '$99.900', imagenUrl: imgProd5 },
    { id: 6, brand: 'Gomitas Con Biotina y Colágeno Funat', nombre: 'Gomitas con Biotina', precio: '$110.000', imagenUrl: imgProd6 },
    { id: 7, brand: 'NAD Resveratrol', nombre: 'NAD Resveratrol Disnature Products', precio: '$50.000', imagenUrl: imgProd7 },
    { id: 8, brand: 'Probal Fuxion', nombre: 'Probal Fuxion Caja 28 sobres', precio: '$300.000', imagenUrl: imgProd8 },
    { id: 9, brand: 'Clorofixa Plus Funat', nombre: 'Clorofixa Plus Funat Liquido 500ml.', precio: '$250.000', imagenUrl: imgProd9 },
    { id: 10, brand: 'Serum de Vitamina', nombre: 'Serum de Vitamina C Kosmaderm 30ml.', precio: '$120.000', imagenUrl: imgProd10 },
    { id: 11, brand: 'Zarzaparrilla', nombre: 'Zarzaparrilla Solución Naturcol', precio: '$450.000', imagenUrl: imgProd11 },
    { id: 12, brand: 'Moringa', nombre: 'Moringa 60 Cápsulas Botanitas', precio: '$135.000', imagenUrl: imgProd12 }
  ];

  // --- 3. Combinar productos fijos con los del Admin ---
  const productos = [
    ...productosFijos,
    ...productosAdmin.map(p => ({
      id: p.id,
      nombre: p.nombre,
      brand: p.categoriaNombre || 'Producto Admin',
      precio: `$${p.precio.toLocaleString()}`,
      imagenUrl: p.imagen || imgProd1 // si no tiene imagen, se puede usar una por defecto
    }))
  ];

  return (
    <div className="home-container">
      <h1>Nuestros Productos Destacados</h1>

      <div className="lista-productos">
        {productos.map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagenUrl} alt={producto.nombre} className="producto-imagen" />
            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <span className="producto-brand">{producto.brand}</span>
              <p className="producto-precio">{producto.precio}</p>
            </div>
          </div>
        ))}

        <div className="app-container">
          <ChatbotBubble />
        </div>
      </div>
    </div>
  );
};

export default Home;
