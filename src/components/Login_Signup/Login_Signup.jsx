import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'; // Ensure you have this installed
import { useNavigate } from 'react-router-dom';
import './Login_Signup.css'

const Login_Signup = () => {
  const [view, setView] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      alert('Signup successful, please login');
      setView('login');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      console.log('Attempting to log in with:', formData);
      const response = await axios.post('http://localhost:5000/login', formData);
      console.log('Login response:', response.data);
      
      const receivedToken = response.data.token;
      setToken(receivedToken);
      localStorage.setItem('token', receivedToken); // Optional: Store token for future use
  
      const decoded = jwtDecode(receivedToken);
      console.log('Decoded token:', decoded);
      alert(`Welcome! Your user ID is ${decoded.userId}`);
      navigate('/home'); // Navigate to home page
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert('An error occurred during login.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      {view === 'login' ? (
        <>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setView('signup')}>Don't have an account? Signup</p>
        </>
      ) : (
        <>
          <h2>Signup</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={handleSignup}>Signup</button>
          <p onClick={() => setView('login')}>Already have an account? Login</p>
        </>
      )}
    </div>
  );
};

export default Login_Signup;
