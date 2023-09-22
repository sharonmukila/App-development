import React, { useState } from 'react';
import './Signupcss.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation (you can use a more robust library or regex)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit it or perform other actions here
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form__input"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <div className="error-message">{errors.lastName}</div>
          )}
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form__input"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="error-message">{errors.email}</div>
          )}
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <div className="error-message">{errors.confirmPassword}</div>
          )}
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;