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

      <div class="form-group m-3">
        <label for="Name">Name</label>
        <input
          type="text"
          class="form-control"
          id="Name"
          placeholder="Your Name Here"
        >
        </input></div>

      <div class="form-group m-3">
        <label for="email">Email address</label>
        <input
          value={email}
          class="form-control"
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email address here"
        >



        </input></div>



      <div class="form-group m-3">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>


      <button type="button" class="btn btn-primary m-3 myButton" onClick={handleFormSubmit}>
        Submit
      </button>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}


    </form>
  );
}



export default Contact;


