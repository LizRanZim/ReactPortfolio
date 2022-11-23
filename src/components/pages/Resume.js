import React from 'react';
import '../../styles/Mystyles.css';
import pdf from '../../img/Resume.pdf'


function Resume() {
  return (
    <div className='m-3'>
      <h1 className='pageTitle m-4'>Resume & Skills</h1>
      <h3> Download my resume: <a href={pdf} download>LizRZ</a> </h3>
      <p></p>
      <h5> Front End Skills:  </h5>
      <li>HTML, CSS, JavaScript</li>
      <li>Handlebars</li>
      <li>Bootstrap</li>
      <li>Bulma</li>
<p></p>
      <h5> Back End Skills:  </h5>
      <li>React</li>
      <li>Node.js</li>
      <li>NPM Packages</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>Webpack</li>
      <li>MVC Framework</li>
      <li>MERN</li>
    </div>
  )
}

export default Resume;