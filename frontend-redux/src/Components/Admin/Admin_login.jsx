// Adminlogin.jsx
import './Adminlogin.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminLogin } from '../../redux/actions/adminauthActions';
import { Link, useNavigate } from 'react-router-dom'; 

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(username, password, navigate)); 
  };

  return (
    <div className='AdminlogContainer'>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <br />
        <br />
        <Link to="/login/">User Login</Link>
      </form>
    </div>
  );
};

export default Adminlogin;
