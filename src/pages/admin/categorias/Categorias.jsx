import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Categorias.css";
import { useCategorias } from "../context/CategoriasContext";

const Categorias = () => {
  const { categorias, agregarCategoria, editarCategoria, eliminarCategoria, categoriasDisponibles } = useCategorias();

  const [showModal, setShowModal] = useState(false);
  const [modoEditar, setModoEditar] = useState(false);
  const [categoriaActual, setCategoriaActual] = useState(null);
  const [nombre, setNombre] = useState("");

  const abrirAgregar = () => {
    setModoEditar(false);
    setNombre("");
    setShowModal(true);
  };

  const abrirEditar = (cat) => {
    setModoEditar(true);
    setCategoriaActual(cat);
    setNombre(cat.nombre);
    setShowModal(true);
  };

  const guardarCategoria = () => {
    if (!nombre) return alert("Debes seleccionar una categoría.");

    // Validar duplicados
    if (!modoEditar && categorias.some(c => c.nombre === nombre)) {
      return alert("Esta categoría ya existe.");
    }

    if (modoEditar) {
      editarCategoria(categoriaActual.id, { nombre });
    } else {
      agregarCategoria(nombre);
    }

    setShowModal(false);
  };

  return (
    <div className="productos-container">
      <div className="productos-header">
        <h1>Categorías</h1>
        <button className="btn-add" onClick={abrirAgregar}>+ Agregar Categoría</button>
      </div>

      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th style={{ width: "160px" }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(cat => (
            <tr key={cat.id}>
              <td>{cat.nombre}</td>
              <td>
                <div className="acciones">
                  <button className="btn-edit" onClick={() => abrirEditar(cat)}>Editar</button>
                  <button className="btn-delete" onClick={() => eliminarCategoria(cat.id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal-bg">
          <div className="modal-card">
            <h2 className="modal-title">{modoEditar ? "Editar Categoría" : "Agregar Categoría"}</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Selecciona una categoría</label>
                <select
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="form-input"
                >
                  <option value="">-- Seleccione una categoría --</option>
                  {categoriasDisponibles.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-buttons">
              <button className="btn-save" onClick={guardarCategoria}>
                {modoEditar ? "Guardar cambios" : "Agregar"}
              </button>
              <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorias;
