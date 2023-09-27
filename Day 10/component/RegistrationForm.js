import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log(formData);
  };

  return (
<div className='regg'>
      <h2 className='regi' >Registration</h2>
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <i className="fas fa-user"></i> Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <i className="fas fa-lock"></i> Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            <i className="fas fa-lock"></i> Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
       

       <Link to="/Dashboard">

        <button type="submit" className="register-button">
          <i className="fas fa-user-plus"></i> Register
        </button>
       </Link>
      <p>
        Already have an account? <Link to="/login">Login</Link>
        
      </p>
      </form>
    </div>

    </div>
  );
}

export default RegistrationForm;
