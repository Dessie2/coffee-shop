import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

   const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src={assets.logo} alt="Logo" className="logo-img" />
        </div>

        <div className="navbar-title">Café Aroma</div>

        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Basket" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
      </div>
      <ul className="navbar-menu">
        <li onClick = {()=>setMenu("home")} className={menu==="home"?"active":" "}>Home</li>
        <li onClick = {()=>setMenu("menu")} className={menu==="menu"?"active":" "}>Menu</li>
        <li onClick = {()=>setMenu("contac")} className={menu==="contac"?"active":" "}>Contact</li>
        <li onClick = {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":" "}>Mobile App</li>
      </ul>
    </div>
  )
}

export default Navbar
