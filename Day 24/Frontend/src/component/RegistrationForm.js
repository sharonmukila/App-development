import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import { userregister } from '../component/Service/api';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role:'customer'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add registration logic here
    console.log(formData);
    const res=await userregister(formData);
    console.log(res.data);
    navigate('/Login')
  };


  return (
  <div className='regg'>
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            <i className="fas fa-user"></i> Username
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
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
        
        {/* <div className="form-group">
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
        </div> */}
       

       {/* <Link to="/fileuploadpage"> */}

        <button type="submit" className="register-button">
          <i className="fas fa-user-plus"></i> Register
        </button>
       {/* </Link> */}
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
        
      </p>
    </div>
    </div>
  );
}

export default RegistrationForm;