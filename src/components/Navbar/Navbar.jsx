import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';	

const Navbar = () => {
  const allPages = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Events',
      path: '/events',
    },
    {
      title: 'Accomodation',
      path: '/accomodation',
    },
    {
      title: 'Pronites',
      path: '/pronites',
    },
    {
      title: 'Login/Register',
      path: '/login',
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      title: 'LogOut',
      path: '/logout',
    },
    {
      title: 'Sponsors',
      path: '/sponsors',
    },
    {
      title: 'Contact Us',
      path: '/contact',
    },
    {
      title: 'Schedule',
      path: '/schedule',
    },
    {
      title: 'FAQs',
      path: '/faq',
    },
  ];
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <button
        className = {isNavOpen ? "burger open" : "burger"}
        onClick={toggleNav}
        type="button"
        aria-label="open menu"
      />
      <nav className = {isNavOpen ? "nav open" : "nav"}>
        <ul className="nav_ul">
          {allPages.map(page => (
            <li className="nav_li" key={page.path}>
              <NavLink to={page.path} onClick={toggleNav} className="nav_link">
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
    </>

  );
};

export default Navbar;
