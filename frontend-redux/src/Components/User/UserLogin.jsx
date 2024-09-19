import './User_login.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/loginActions';
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {    
    try {
        const success = await dispatch(loginUser(username, password));
        if (success) {
            navigate('/');
        } else {           
            console.log("Login failed");
        }
    } catch (error) {
        
        console.error("Error:", error);
    }
};


  return (
    <div className="UserLoginContainer">
      <h2>User Login</h2>
      <label>Email:</label>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <br />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br/>
      <Link to="/adminlogin/">Admin Login  ,</Link>{'  '}
      <Link to="/register/">User Register</Link>
      
    </div>
  );
};

export default Login;
