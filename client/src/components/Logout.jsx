import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../components/AuthContext.jsx'; 
import '../logout.css'


const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { recheckAuthentication } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await axios.get('http://localhost:3000/auth/logout');
      if (res.data.status) {
        await recheckAuthentication(); 
        navigate('/login');
      }
    } catch (err) {
      console.log(err);

    }
  };

  return (
    < div className='logout'>
      <button  className="nav-link" onClick={() => setShowModal(true)} >Logout</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to log out?</p>
            <button className="modal-button" onClick={handleLogout}>Yes, Log Out</button>
            <button className="modal-button" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
