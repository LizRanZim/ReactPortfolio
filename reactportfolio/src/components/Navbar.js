// code from 20-24

import React from 'react';
import '../styles/Mystyles.css';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// We are defining (destructuring) the props for handle page change and current page and exporting them to Portfolio container

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav myNav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
        
        // if current page is About then use class nav-link-inuse, if not use nav-link

          className={currentPage === 'About' ? 'myNav inuse' : 'myNav'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
         // if current page is Portfolio then use class nav-link-inuse, if not use nav-link

          className={currentPage === 'Portfolio' ? 'myNav inuse' : 'myNav'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
        
          // if current page is Resume then use class nav-link-inuse, if not use nav-link
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
         // if current page is Contact then use class nav-link-inuse, if not use nav-link
          className={currentPage === 'Contact' ? 'myNav inuse' : 'myNav'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
