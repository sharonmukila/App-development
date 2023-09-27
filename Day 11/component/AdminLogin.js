import React, { useState } from 'react';
import './AdminLogin.css'; // Import your CSS file

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with your authentication logic
    if (username === 'admin' && password === 'password') {
      // Successful login
      setLoginSuccess(true);
    } else {
      setError('Invalid username or password');
    }
  };

  const loginFormClassName = loginSuccess ? 'login-success' : 'login-failure';

  return (
    <div className={`admin-login-container ${loginFormClassName}`}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
