import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css'; // Importing main styles

const Home = () => {
  return (
    <>
      <div className='home'>
        <section className='hero'>
          <h1>Welcome to Expense Tracker</h1>
          <p>Manage your expenses seamlessly and efficiently.</p>
          <Link to="/login" className="btn-primary">Get Started</Link>
        </section>
        <section className='about'>
          <h2>About Us</h2>
          <p>Learn how Expense Tracker can help you keep your finances in check with our easy-to-use tools.</p>
        </section>
        <section className='features'>
          <h2>Features</h2>
          <div className='feature-list'>
            <div className='feature'>Real-Time Tracking</div>
            <div className='feature'>Monthly Reports</div>
            <div className='feature'>Budget Planning</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
