// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css'; // Ensure your CSS is set up to style these new sections

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
          <p>Learn how Expense Tracker can help you keep your finances in check.</p>
        </section>
        <section className='features'>
          <h2>Features</h2>
          <div className='feature-list'>
            <div className='feature'>Feature 1</div>
            <div className='feature'>Feature 2</div>
            <div className='feature'>Feature 3</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
