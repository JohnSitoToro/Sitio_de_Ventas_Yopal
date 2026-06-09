import { useParams } from "react-router-dom";
import { useProductos } from "../../admin/context/ProductosContext";
import "./Productos.css"; // usa tu CSS

const ProductosPorCategoria = () => {
  const { nombre } = useParams(); // categoría desde la URL
  const { productos } = useProductos();

  // Filtramos productos por categoría
  const productosFiltrados = productos.filter(
    (p) => p.categoriaNombre.toLowerCase() === nombre.toLowerCase()
  );

  return (
    <div className="productos-container">
      <h1>Productos en: {nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h1>

      {productosFiltrados.length === 0 ? (
        <p>No hay productos en esta categoría.</p>
      ) : (
        <div className="productos-grid">
          {productosFiltrados.map((p) => (
            <div key={p.id} className="producto-card">
              {p.imagen && (
                <img src={p.imagen} alt={p.nombre} className="producto-img" />
              )}
              <div className="producto-info">
                <p className="producto-nombre">{p.nombre}</p>
                <p className="producto-precio">${p.precio}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductosPorCategoria;
