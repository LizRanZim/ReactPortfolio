// code base from 20-24

import React from 'react';
import '../styles/Mystyles.css';


// Destructuring the props for handle page change and current page and exporting them to Portfolio container

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav myNav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          // if current page is About then use class inuse, if not use myNav

          className={currentPage === 'About' ? 'myNav inuse' : 'myNav'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // if current page is Portfolio then use class inuse, if not use myNav

          className={currentPage === 'Portfolio' ? 'myNav inuse' : 'myNav'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"

          // if current page is Resume then use class inuse, if not use myNav
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'myNav inuse' : 'myNav'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // if current page is Contact then use class inuse, if not use myNav
          className={currentPage === 'Contact' ? 'myNav inuse' : 'myNav'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
