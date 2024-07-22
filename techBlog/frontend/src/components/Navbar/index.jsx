import { FiLogIn } from "react-icons/fi";
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">TechBlog</a>
        <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <a href="/">Home</a>
        <a href="/addBlog">Add Blog</a>
        <a href="/myBlog">My Blog</a>
        <a href="/login"><FiLogIn /></a>

      </div>
    </nav>
  );
};

export default Navbar;
