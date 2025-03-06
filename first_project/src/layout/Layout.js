import React from 'react'
import { Link } from 'react-router-dom';

//ნავბარი
const Layout = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ucnauri">Contact</Link>
    </>
  )
}
export default Layout;