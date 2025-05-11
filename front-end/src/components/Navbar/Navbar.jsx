import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

   const navigate = useNavigate();

   const logout = () => {
    localStorage.removeItem("token"); 
    setToken("");
    navigate("/");

  }

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <Link to="/"><img src="/logo.png" alt="Logo" className="logo-img" /></Link>
        </div>

        <div className="navbar-title">Brew & Bloom</div>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="Basket" /></Link>
            <div className={getTotalCartAmount() ? "dot" : ""}></div>
          </div> 
          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          ) : (
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="Profile" />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate('/myorders')} >
                  <img src={assets.bag_icon} alt="Orders" />
                  <p>Orders</p>
                  </li>

                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
              </ul>
            </div>
          )}
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
