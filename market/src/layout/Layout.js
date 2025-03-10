import React from "react";
 import "./layout.scss";
 import { Link, Outlet } from "react-router-dom";
 
 const Layout = () => {
   return (
     <>
       <div className="nav">
             <div className="nav-item">
                 <Link to="/" className="nav-link"> Home </Link>
             </div>
             <div className="nav-item">
                 <Link to="/about" className="nav-link"> About </Link>
             </div>
 
             <div className="nav-item">
                 <Link to="/products" className="nav-link"> Products </Link>
             </div>
 
             <div className="nav-item">
                 <Link to="/contact" className="nav-link"> Contact </Link>
             </div>
 
       </div>
       <Outlet />
     </>
   );
 };
 
 export default Layout;