import React from 'react';
import './Marcas.css';

// --- 1. Importar imágenes ---

import imgProd1 from '../../assets/marcas/4CousinsFoods.png';
import imgProd2 from '../../assets/marcas/4Life.png';
import imgProd3 from '../../assets/marcas/ABeck.png';
import imgProd4 from '../../assets/marcas/AlimentosInteligentes.png';
import imgProd5 from '../../assets/marcas/Alos.png';
import imgProd6 from '../../assets/marcas/Alves.png';
import imgProd7 from '../../assets/marcas/AndeanValley.png';
import imgProd8 from '../../assets/marcas/ApiariosLaPrimavera.png';
import imgProd9 from '../../assets/marcas/Arawak.png';
import imgProd10 from '../../assets/marcas/AsiaSaludSAS.png';
import imgProd11 from '../../assets/marcas/Biocare.png';
import imgProd12 from '../../assets/marcas/BotánicaFace.png';

const Marcas = () => {

  
  const productos = [
    {id: 1, imagenUrl: imgProd1},
    {id: 2, imagenUrl: imgProd2},
    {id: 3, imagenUrl: imgProd3},
    {id: 4, imagenUrl: imgProd4},
    {id: 5, imagenUrl: imgProd5},
    {id: 6, imagenUrl: imgProd6},
    {id: 7, imagenUrl: imgProd7},
    {id: 8, imagenUrl: imgProd8},
    {id: 9, imagenUrl: imgProd9},
    {id: 10, imagenUrl: imgProd10},
    {id: 11, imagenUrl: imgProd11},
    {id: 12,  imagenUrl: imgProd12} 
  ];

 
  return (
    <div className="home-container">
      <h1>Marcas asociadas</h1>
      
      <div className="lista-productos">
        
        {productos.map(producto => (
          
          <div className="producto-card" key={producto.id}>
            
            <img 
              src={producto.imagenUrl} 
              alt={producto.nombre} 
              className="producto-imagen"
            />
            
           
            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <span className="producto-brand">{producto.brand}</span>
              <p className="producto-precio">{producto.precio}</p>
            </div>
            
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Marcas;