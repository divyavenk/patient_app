import React, { useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement login logic here. Example:
      const response = await fetch('http://localhost:5000/api/user/login', { method: 'POST', body: JSON.stringify({ username, password }), headers: { 'Content-Type': 'application/json' } });
      console.log(response);
     const data = await response.json();
     validateTokenAndRedirect(data);
     console.log(response);
  };

  const validateTokenAndRedirect = (token) => {
    debugger;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp > currentTime) {
      // Token is not expired; redirect to home
      window.location.href = '/';
    } else {
      // Token is expired; handle error
      console.error('Token is expired');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;