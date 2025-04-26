import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // <-- IMPORTANTE

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <Link to="/"><img src="/logo_cafes.png" alt="Logo" className="logo-img" /></Link>
        </div>

        <div className="navbar-title">Brew & Bloom</div>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
            <div className={getTotalCartAmount() ? "dot" : ""}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
      </div>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#footer" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
      </ul>
    </div>
  );
};

export default Navbar;
