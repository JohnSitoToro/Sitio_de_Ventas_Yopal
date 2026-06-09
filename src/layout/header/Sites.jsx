import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCategorias } from "../../pages/admin/context/CategoriasContext";
import "./Sites.css";

const Sites = () => {
  const { categorias } = useCategorias(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sites">
      <nav className="nav">
        <NavLink to="/" end>Inicio</NavLink>

        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>Categorías</span>
          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            {categorias.length === 0 ? (
              <p>No hay categorías</p>
            ) : (
              categorias.map((cat) => (
                <NavLink
                  key={cat.id}
                  to={`/categoria/${encodeURIComponent(cat.nombre)}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  {cat.nombre}
                </NavLink>
              ))
            )}
          </div>
        </div>

        <NavLink to="/NuestrasMarcas" end>Nuestras marcas</NavLink>
        <NavLink to="/About" end>Sobre Nosotros</NavLink>
        <NavLink to="/Admin" end>Admin</NavLink>
      </nav>
    </header>
  );
};

export default Sites;
