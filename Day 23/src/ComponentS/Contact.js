import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    // You can add your logic here to send the email or perform other actions
    // For this example, we'll simply set a message to indicate that it has been sent.
    setMessageSent(true);
    setMessage("Message has been sent!");
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have a Question in Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="secondary-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {isMessageSent && <p>{message}</p>}
      <p>Phone: +123 456 789</p>
    </div>
  );
};

export default Contact;