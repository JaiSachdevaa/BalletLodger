import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('authToken', 'dummy-token');
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to BalletLodger</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-image">
        <div className="image-placeholder">
          <div className="overlay"></div>
          Election System
        </div>
      </div>
    </div>
  );
}
