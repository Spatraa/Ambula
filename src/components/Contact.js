// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the contact form below.</p>
      <div className='form'>
        <label>Name:</label>
        <input type='text' placeholder='enter name'></input><br/><br/>
        <label>Mobile No:</label>
        <input type='text' placeholder='enter number'></input><br/><br/>
        <label>Email:</label>
        <input type='email' placeholder='enter email'></input><br/><br/>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Contact;
