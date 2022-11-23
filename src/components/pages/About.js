import React from 'react';
import '../../styles/Mystyles.css';
import image from '../../img/106918045.jpg';


function About () {
    return (
        <div>
      <h1 className='pageTitle'>About Me</h1>
      <div className='myContent'>
        <img src={image} alt="Logo" width ="10%"/>
        </div>
      <p>
        I am an ecommerce professional who loves to code and wanted to have a greater understanding of full stack web development technologies. This project is part of a full stack web developer bootcamp. I love to travel.
      </p>
      
    </div>
    )
}

export default About;

