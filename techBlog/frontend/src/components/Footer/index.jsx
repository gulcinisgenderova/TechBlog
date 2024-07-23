import React from 'react';
import './style.css';
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className='titles'>About Us</h3>
          <p>We are a leading company in our industry, dedicated to providing high-quality services and products.</p>
        </div>
        <div className="footer-column">
          <h3 className='titles'>Services</h3>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className='titles'>Contact Us</h3>
          <p>Email: gulcinis77@icloud.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-column">
          <h3 className='titles'>Follow Us</h3>
          <ul className="social-links">
            <li><FaFacebookF /></li>
            <li><FaTwitter /></li>
            <li><GrInstagram /></li>
            <li><FaLinkedinIn /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
