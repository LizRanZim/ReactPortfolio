import React from 'react';
// import header styles
import '../../styles/Mystyles.css';
import image from '../../img/logo192.png';

function Header() {
    
    return (
        
        <header className='header' style={{ 
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            }}>
            <h1>Welcome to Liz RZ's Portfolio</h1>
            <h4>Built in React</h4>
        </header>
      
    );
}


export default Header;