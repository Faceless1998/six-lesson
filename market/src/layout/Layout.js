import React from "react";
 import "./layout.css";
 import { Link } from "react-router-dom"

 const Layout = () => {
   return (
     <>
      <div className="nav">
        <div className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/products">products</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
     </>
   );
 };
 
 export default Layout;