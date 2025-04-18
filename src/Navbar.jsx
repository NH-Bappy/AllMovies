import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-brand">
            <Link to={"/"}>Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/Favorites"}>Fovarites</Link>
        </div>
    </nav>
  )
}

export default Navbar