import React from 'react';
import "./contact.css" // You'll need to create this CSS file for styling

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, adipisci. Impedit cumque nesciunt a eligendi soluta qui, unde, expedita velit officiis, enim quidem delectus esse ipsam dolorem voluptatibus eos cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel, unde beatae mol error libero tempore labore reprehenderit provident ea officia repellat deserunt dolores fugiat iure.
        </p>
      
      </div>
      <div className="btn">
        
      </div>
      <form className="logform">
        <div className="sform">
          <div className="form">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" placeholder="Enter a valid email address" required />
            <hr />
          </div>
          <div className="form">
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" placeholder="Enter your Name" required />
            <hr />
          </div>
          <div className="form-1">
            <label htmlFor="address">Address</label><br />
            <textarea name="address" id="address" cols="50" rows="2" placeholder="Enter your Address"></textarea>
            <hr />
          </div>
          <div className="form-1">
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="50" rows="4" placeholder="Enter your Messages" required></textarea>
            <hr />
          </div>
        </div>
        <button className="btn2">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
