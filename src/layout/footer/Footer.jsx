import {Link} from "react-router-dom";
import "./Footer.css";
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-section">
          <h4>Quiénes Somos</h4>
          <p>
            somos un centro naturista hubicado en el municipio de Yopal. Buscamos brindar los mejores productos naturistas y farmacológicos al mejor precio.
          </p>
        </div>

         <div className="footer-section">
          <h4>Categorías</h4>
          <p> Belleza </p>
          <p> Alimentación </p>
          <p> Vitaminas </p>
          <p> Suplementos </p>
        </div>

         <div className="footer-section">
          <h4>Nuestras marcas</h4>
          <p>
            
          </p>
        </div>

        <div className="footer-section">
          <h4>Contactos</h4>
          <p> <FaEnvelope/> VidaSaludableYopal@gmail.com</p>
          <p> <FaPhoneAlt/> +57 123 456 7890</p>
          <p> <FaHome/> Cra. 20 #9 - 74, Yopal, Casanare</p>
        </div>

    </footer>
  );
};

export default Footer;