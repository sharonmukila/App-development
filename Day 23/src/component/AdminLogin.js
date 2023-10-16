// AdminLogin.js
import React, { useState } from 'react';
import './AdminLogin.css'; // Import your CSS file
import { Link } from 'react-router-dom';
function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    const newErrors = {};
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required.';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
    }

    if (Object.keys(newErrors).length === 0) {
      // Send login request to the server (backend validation)
      // You can use Axios, Fetch, or any other library to send the request
      // If login is successful, redirect to the admin dashboard
      // If login fails, set an error message
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="admin-login-container0">
      <div className="admin-login0">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group0">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="form-group0">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error0">{errors.password}</span>}
          </div>
          <div className="uu">

          <Link to="/Feedback">

          <button type="submit">Login</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
