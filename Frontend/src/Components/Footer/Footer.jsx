// Footer.js
import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope,FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-item">
          <FaMapMarkerAlt className="icon" />
          <span>Indira Gandhi Institute Of technology,Sarang,Dhenkanal</span>
        </div>
        <div className="footer-item">
          <FaPhone className="icon" />
          <span>+911234567890</span>
        </div>
        <div className="footer-item">
          <FaEnvelope className="icon" />
          <span>igit@gmail.com</span>
          <div className='w-[50px] h-[50px] m-6 pt-2 hover:cursor-pointer hover:bg-slate-500 flex items-center justify-center'>
          <Link to="https://github.com/Subhendu9090/college_project">
            <FaGithub className='w-[30px] h-[30px]'/>
          </Link>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <a href=""><i className="fa fa-facebook-f"></i></a>
        <a href=""><i className="fa fa-twitter"></i></a>
        <a href=""><i className="fa fa-instagram"></i></a>
        <a href=""><i className="fa fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
