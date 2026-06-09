import { useState } from "react";
import "./Productos.css";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { useCategorias } from "../context/CategoriasContext";
import { useProductos } from "../context/ProductosContext";

const Productos = () => {
  const { categorias } = useCategorias();
  const { productos, agregarProducto, actualizarProducto, eliminarProducto } = useProductos();

  const [formOpen, setFormOpen] = useState(false);
  const [productoActual, setProductoActual] = useState(null);
  const [imagenPreview, setImagenPreview] = useState(null);

  const abrirFormularioNuevo = () => {
    setProductoActual(null);
    setImagenPreview(null);
    if (categorias.length === 0) return alert("Debes crear categorías antes de agregar productos.");
    setFormOpen(true);
  };

  const abrirFormularioEditar = (producto) => {
    setProductoActual(producto);
    setImagenPreview(producto.imagen);
    setFormOpen(true);
  };

  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImagenPreview(URL.createObjectURL(file));
  };

  const guardarProducto = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const categoriaNombre = form.get("categoria");
    const categoriaObj = categorias.find(c => c.nombre === categoriaNombre);

    const nuevo = {
      id: productoActual ? productoActual.id : Date.now(),
      nombre: form.get("nombre"),
      precio: Number(form.get("precio")),
      stock: Number(form.get("stock")),
      categoriaId: categoriaObj ? categoriaObj.id : null,
      categoriaNombre: categoriaObj ? categoriaObj.nombre : "Sin categoría",
      imagen: imagenPreview,
    };

    productoActual ? actualizarProducto(nuevo) : agregarProducto(nuevo);
    setFormOpen(false);
  };

  return (
    <div className="productos-container">
      <div className="productos-header">
        <button className="btn-add" onClick={abrirFormularioNuevo}><FaPlus /> Agregar producto</button>
      </div>

      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.imagen ? <img src={p.imagen} className="img-tabla" /> : "Sin imagen"}</td>
              <td>{p.nombre}</td>
              <td>{p.categoriaNombre}</td>
              <td>${p.precio.toLocaleString()}</td>
              <td>{p.stock}</td>
              <td className="acciones">
                <button className="btn-edit" onClick={() => abrirFormularioEditar(p)}><FaEdit /></button>
                <button className="btn-delete" onClick={() => eliminarProducto(p.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formOpen && (
        <div className="modal-bg">
          <div className="modal-card">
            <h2 className="modal-title">{productoActual ? "Editar Producto" : "Agregar Producto"}</h2>
            <form onSubmit={guardarProducto} className="form-grid">
              <div className="form-group">
                <label>Imagen</label>
                <input type="file" accept="image/*" onChange={handleImagen} />
              </div>
              {imagenPreview && <img src={imagenPreview} className="preview-img" />}
              <div className="form-group">
                <label>Nombre</label>
                <input name="nombre" defaultValue={productoActual?.nombre} required />
              </div>
              <div className="form-group">
                <label>Categoría</label>
                <select name="categoria" defaultValue={productoActual?.categoriaNombre || ""} required>
                  <option value="">Seleccione una categoría</option>
                  {categorias.map(c => <option key={c.id} value={c.nombre}>{c.nombre}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input type="number" name="precio" min="0" defaultValue={productoActual?.precio} required />
              </div>
              <div className="form-group">
                <label>Stock</label>
                <input type="number" name="stock" min="0" defaultValue={productoActual?.stock} required />
              </div>
              <div className="modal-buttons">
                <button className="btn-save" type="submit">{productoActual ? "Actualizar" : "Guardar"}</button>
                <button className="btn-cancel" type="button" onClick={() => setFormOpen(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productos;
