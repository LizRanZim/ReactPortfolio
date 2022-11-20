// code from 20-24

import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import Header from './structure/Header';
import Project from './structure/Project';

import Footer from './structure/Footer';
import image from '../img/jpegpia23403.jpg';



export default function PortfolioContainer() {


  const [currentPage, setCurrentPage] = useState('About');

 // Below renders page structure components like Header Navbar and Footer

const renderHeader = () =>
{
return (
  <div style={{ 
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"contain",
        }}
        >
        <Header />
        
        
      </div>
)} ;

 // Below renders content for the page you are on, so if you are Portfolio, it renders page for Portfolio, if its not any of the first 3 pages, render the default page which is About
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return (
      <div>
      <Portfolio />
      <Project/>
      </div>
      );
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
      }

    //   About is the default page
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

const renderFooter = () =>
{
return (
        <Footer />
    )} ;

  return (
    <div>
      {renderHeader()}
      {/* the status of the current page and handle page change function */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* runs the render page function */}
      
      {renderPage()}
      {renderFooter()}

    </div>
  );
}
