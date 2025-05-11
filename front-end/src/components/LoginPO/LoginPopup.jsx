import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = mode === 'login' ? '/api/user/login' : '/api/user/register';
      const response = await axios.post(url + endpoint, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{mode === 'login' ? 'Log in' : 'Sign up'}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="close" />
        </div>
        <div className="login-popup-inputs">
          {mode === 'signup' && (
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={data.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {mode === 'login' ? 'Log in' : 'Create account'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p>
          {mode === 'login' ? (
            <>Don’t have an account? <span onClick={() => setMode('signup')}>Sign up</span></>
          ) : (
            <>Already have an account? <span onClick={() => setMode('login')}>Log in</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
