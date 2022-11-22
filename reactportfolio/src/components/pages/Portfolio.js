import React from 'react';
import '../../styles/Mystyles.css';
import Project from '../structure/Project'
import image from '../../img/logo192.png';
import image2 from '../../img/logo192.png';


function Portfolio() {
  const projects = 
  [ 
    {
      name: 'bacon',
      description: 'bacon is good',
      img: image
    },
    {
      name: 'bacon2',
      description: 'bacon is gooder',
      img: image2
    }
  ]


  return (
    <div>
      <h1 className='pageTitle'>Portfolio Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>

      {projects.map(project => { return <Project key={project.name} name={project.name} description={project.description} img={project.img}></Project>})}
      
      {/* map over array, create array */}
    </div>
  )
}

export default Portfolio;