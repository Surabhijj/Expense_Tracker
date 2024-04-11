import React from 'react';
import Logout from '../components/Logout';
import { Link } from 'react-router-dom';
import '../Nav.css';
import '../App.css';
import { useAuth, AuthProvider } from '../components/AuthContext.jsx';


const Navbar = () => {
     const { isAuthenticated } = useAuth();
     console.log(isAuthenticated);

    
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Expense Tracker</h1>
      </div>
      <div className="navbar-links">
        
        {isAuthenticated ?(
          <>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/expenses" className="nav-link">Add Expense</Link>
          </>
        ):
        (<Link to="/" className="nav-link">Home</Link>)
        }
        
        {isAuthenticated ? (
          <Logout/>
        ) : (
          
          <Link to="/login" className="nav-link">Login</Link>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
