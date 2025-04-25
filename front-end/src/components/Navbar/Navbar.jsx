import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {

   const [menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <img src="/logo_cafes.png" alt="Logo" className="logo-img" />
        </div>

        <div className="navbar-title">Brew & Bloom</div>

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
        <Link to='/' onClick = {()=>setMenu("home")} className={menu==="home"?"active":" "}>Home</Link>
        <a href='#explore-menu' onClick = {()=>setMenu("menu")} className={menu==="menu"?"active":" "}>Menu</a>
        <a href='#footer' onClick = {()=>setMenu("contac")} className={menu==="contac"?"active":" "}>Contact</a>
        <a href='#app-download' onClick = {()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":" "}>Mobil-App</a>
      </ul>
    </div>
  )
}

export default Navbar
