// I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and Stack Overflow

import React from 'react';
// import header styles
import '../../styles/Mystyles.css';


function Footer() {
    return (
        <ul className="nav footer">
      <li className="nav-item m-1">
       
           <h3><a href="https://github.com/LizRanZim/">GitHub</a></h3>
        
        </li>
        <li className="nav-item m-1">
       
            <h3><a href ="https://www.linkedin.com/in/melindagates/">LinkedIn</a></h3>
        
        </li>
        <li className="nav-item m-1">
       
        <h3><a href ="https://stackoverflow.com/users/19275801/lizranzim">Stack Overflow</a></h3>
        
        </li>
        </ul>
    );
}


export default Footer;