// import { useRef, useState } from "react";
import React, { useState } from 'react';
// import React from 'react'
import '../../styles/Mystyles.css';
import { validateEmail } from '../utils/helpers';

// ***Email address validation not working

// Bootstrap contact form from here: https://getbootstrap.com/docs/4.3/components/forms/



function Contact() {
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password

    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };

const handleBlur = (e) => {
     // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
     if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
     } else if (validateEmail(email)) {
        setErrorMessage('');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.


    }

}

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.


    }

    // If successful, we want to clear out the input after registration.


    setEmail('');
    
  };
  

  return (

    <form>

      <div className="form-group m-3">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Your Name Here"
        >
        </input></div>

      <div className="form-group m-3">
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          className="form-control"
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Your Email address here"
        >



        </input></div>
        {errorMessage && (
        <div>
          <p className="error-text text-danger">{errorMessage}</p>
        </div>
      )}



      <div className="form-group m-3">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" id="message" rows="3"></textarea>
      </div>


      <button type="button" className="btn btn-primary m-3 myButton" onClick={handleFormSubmit}>
        Submit
      </button>

      


    </form>
  );
}



export default Contact;


