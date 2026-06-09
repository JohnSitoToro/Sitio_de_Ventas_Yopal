import { useState } from "react";
import "../productos/Productos.css";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { useCategorias } from "../context/CategoriasContext";


const Catalogos = () => {
  const { categorias, agregarCategoria, editarCategoria, eliminarCategoria } = useCategorias();
  const [formOpen, setFormOpen] = useState(false);
  const [categoriaActual, setCategoriaActual] = useState(null);

  const abrirNuevo = () => {
    setCategoriaActual(null);
    setFormOpen(true);
  };

  const abrirEditar = (cat) => {
    setCategoriaActual(cat);
    setFormOpen(true);
  };

  const guardarCategoria = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const nombre = form.get("nombre");

    if (categoriaActual) {
      editarCategoria(categoriaActual.id, nombre);
    } else {
      agregarCategoria(nombre);
    }

    setFormOpen(false);
  };

  return (
    <div className="productos-container">
      <div className="productos-header">
        <button className="btn-add" onClick={abrirNuevo}>
          <FaPlus /> Agregar categoría
        </button>
      </div>

      <table className="tabla-productos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {categorias.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td className="acciones">
                <button className="btn-edit" onClick={() => abrirEditar(c)}>
                  <FaEdit />
                </button>
                <button className="btn-delete" onClick={() => eliminarCategoria(c.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formOpen && (
        <div className="modal-bg">
          <div className="modal-card">
            <h2 className="modal-title">
              {categoriaActual ? "Actualizar categoría" : "Agregar categoría"}
            </h2>

            <form onSubmit={guardarCategoria} className="form-grid">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  defaultValue={categoriaActual?.nombre}
                  required
                />
              </div>

              <div className="modal-buttons">
                <button type="submit" className="btn-save">
                  {categoriaActual ? "Actualizar" : "Guardar"}
                </button>

                <button className="btn-cancel" type="button" onClick={() => setFormOpen(false)}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogos;
