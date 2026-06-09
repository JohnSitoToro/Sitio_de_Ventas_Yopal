import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-page">
      <h1>Funciones de Administrador</h1>

      <div className="admin-buttons">

        
        <Link to="/admin/productos" className="admin-btn">
          Productos
        </Link>

       
        <Link to="/admin/catalogos" className="admin-btn">
          Catálogos
        </Link>

        
        <Link to="/admin/categorias" className="admin-btn">
          Categorías
        </Link>

      </div>
    </div>
  );
};

export default Admin;
