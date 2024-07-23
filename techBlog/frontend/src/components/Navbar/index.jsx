import { FiLogIn } from "react-icons/fi";
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { UserContext } from "../../context/userContext";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { decode, logOut } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div><a href="/">TechBlog</a></div>
        <div> <button className="navbar-toggler" onClick={toggleMenu}>
          ☰
        </button></div>

        <div>

        </div>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        {decode ? (
          <>
            <a href="/">Home</a>
            <a href="/addBlog">Add Blog</a>
            <a href="/myBlog">My Blog</a>
            <div onClick={logOut}><FiLogIn /> </div>
          </>
        ) : (
          <>
            <a href="/">Home</a>
            <a href="/addBlog">Add Blog</a>
            <a href="/myBlog">My Blog</a>
            <a href="/login">Log In</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
