import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <NavLink to="/" className="logo d-flex align-items-center">
        <h1 className="d-flex align-items-center">Astech Promotions</h1>
      </NavLink>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
         
  <li><NavLink to="/contact">Contact</NavLink></li> 
        </ul>
      </nav> 

    </div>
</header> 
</>
  )
}

export default Navigation