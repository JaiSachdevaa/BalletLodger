import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/login') return null;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">BalletLodger</div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/bulletin" className={location.pathname === '/bulletin' ? 'active' : ''}>
          Bulletin
        </Link>
        <Link to="/submit-application" className={location.pathname === '/submit-application' ? 'active' : ''}>
          Apply
        </Link>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}