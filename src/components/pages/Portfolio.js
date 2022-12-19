import React from 'react';
import '../../styles/Mystyles.css';
import Project from '../structure/Project'
import image from '../../img/WeatherDashboard.gif';
import image2 from '../../img/ViewAllCategories.GIF';
import image3 from '../../img/Add_department.GIF';
import image4 from '../../img/GeneratedHTML.GIF';
import image5 from '../../img/Reactions.GIF';
import image6 from '../../img/WikiCraft.GIF';


function Portfolio() {
  const projects = 
  [ 
    {
      name: 'Weather Dashboard',
      description: 'Enter a city to see the 5 day forecast. This app uses the Open Weather API.',
      img: image,
      githubURL: 'https://github.com/LizRanZim/WeatherDashboard'
    },
    {
      name: 'Ecommerce Back End',
      description: 'This project builds the back end of an Ecommerce Website using a custom API featuring JSON objects.',
      img: image2,
      githubURL: 'https://github.com/LizRanZim/EcommBackEnd'
    },
    {
      name: 'Employee Tracker',
      description: 'The application is a an employee tracking database written using Node.js and MySQL.',
      img: image3,
      githubURL: 'https://github.com/LizRanZim/EmployeeTracker'
    },
    {
      name: 'Team HTML Generator',
      description: 'This is a Team Roster HTML file generator based on user inputs for team members including manager, engineer and intern. It is a command line application that uses Node.js',
      img: image4,
      githubURL: 'https://github.com/LizRanZim/TeamHTMLGenerator'
    },
    {
      name: 'NoSQL Social Network',
      description: 'This is the back end configuration of a social networking site with the ability to create and manage users and thoughts, add and remove friends, and add and remove reactions to thoughts. It was built using MongoDB.',
      img: image5,
      githubURL: 'https://github.com/LizRanZim/NoSQLSocialNetwork'
    },
    {
      name: 'WikiCraft',
      description: 'Welcome to WikiCraft, your new favorite crafting game helper. This project was inspired from the minds of WikiDev, a team of like minded web developers and avid gamers made up of Liz RZ, Nelson Drozd, Alex Bellamy, Graham Johnson, and Kerri Sosinski',
      img: image6,
      githubURL: 'https://github.com/NelsonD93/Game-Recipes'
    }
  ]


  return (
    <div>
      <h1 className='pageTitle'>Portfolio Page</h1>
      <p>
        Here you'll find 6 projects that I built. Click the GitHub icon next to each project to view the GitHub Repository for that project.
      </p>

      {projects.map(project => { return <Project key={project.name} name={project.name} description={project.description} img={project.img} githubURL ={project.githubURL}></Project>})}
      
      {/* map over array, create array */}
    </div>
  )
}

export default Portfolio;