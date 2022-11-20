import React from 'react';
import '../../styles/Mystyles.css';
import pdf from '../../img/Resume.pdf'


function Resume() {
  return (
    <div className='m-3'>
      <h1 className='pageTitle'>Resume & Skills</h1>
      <h3> Download my resume: <a href={pdf} download>LizRZ</a> </h3>
      <h5> Front End Skills:  </h5>
      <li>HTML, CSS, JavaScript</li>
      <li>Handlebars</li>
      <h5> Back End Skills:  </h5>
      <li>Webpack</li>
      <li>React</li>
    </div>
  )
}

export default Resume;