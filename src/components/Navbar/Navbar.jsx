import React, { useState } from "react";

import { Link } from 'react-router-dom';

import { GiPalmTree } from 'react-icons/gi';
import {FaHome,  FaUserFriends } from 'react-icons/fa';
// import {RiFileInfoFill} from 'react-icons/ri';
 import { BsFillFileEarmarkTextFill} from 'react-icons/bs';

import {ImBook, ImOffice} from 'react-icons/im'

// FaUserSecret,

import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="Home" className="nav__brand">
      Fuerteventura Startups <GiPalmTree/>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link className='link' to="/"></Link>
          <a href="Home" className="nav__link">
            <FaHome/> Home
          </a>
        </li>
        
        <li className="nav__item">
          <Link className='link' to="/About" ></Link>
          <a href="About" className="nav__link">
          <FaUserFriends/> About Us
          </a>
        </li>

        <li className="nav__item">
          <Link className='link' to="/CaseStudies" ></Link>
          <a href="CaseStudies" className="nav__link">
           <ImBook/> Case Studies
          </a>
        </li>
        
        <li className="nav__item">
        <Link className='link' to="/Cowork" ></Link>
          <a href="Cowork" className="nav__link">
           <ImOffice/> Co-work
          </a>
        </li>

        <li className="nav__item">
        <Link className='link' to="/Courses" ></Link>
          <a href="Courses" className="nav__link">
           <BsFillFileEarmarkTextFill/> Courses
          </a>
        </li>


      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;