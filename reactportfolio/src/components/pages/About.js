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

// Try this for styling: https://react-bootstrap.github.io/getting-started/introduction/


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function About () {
//   return (
//       <div>
//     <h1 className='pageTitle'>About Page</h1>
    
//     <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//       <Button variant="primary">Go somewhere</Button>
//     </Card.Body>
//   </Card>
//   </div>
// );
// }

// export default About;