import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import "./Header.css";
import {FaUser} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/Logo.svg";
import Register from "../../pages/register/Register";
import Profile from "../../pages/profile/Profile";
import Login from "../../pages/login/Login";
import ShoppingCart from "../../pages/profile/shopping/Shopping";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleChange}
        size={50} 
      />
      <button type="submit"> <FaSearch/> </button>
    </form>
  );
}

const Header = () => {

  const navigate = useNavigate();

  const UserNavigate = () => {
    navigate('/Login');
  }

  const NotiNavigate = () => {
    navigate('/Notificaciones');
  }

  const ShoppingNavigate = () => {
    navigate('/ShoppingCart');
  }

  return (
    <header className="header">

      <img src = {Logo} className = "logo"/>
      <SearchBar/>
        <header className = "icons">
          <button type = "submit" onClick = {UserNavigate}> <FaUser/> </button>
          <button type = "submit" onClick = {NotiNavigate}> <FaBell/> </button>
          <button type = "submit" onClick = {ShoppingNavigate}> <FaShoppingCart/> </button>
      
        </header> 

    </header>
  );
};

export default Header;