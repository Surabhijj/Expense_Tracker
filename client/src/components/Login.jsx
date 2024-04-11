import React, { useState } from 'react'
import '../App.css'
import Axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import '../components/Login.jsx'
import '../components/Home.jsx'
import '../components/ForgotPassword.jsx'
import { useAuth } from '../components/AuthContext.jsx';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages

    const { recheckAuthentication } = useAuth();
    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault();
        setError('');
        Axios.post("http://localhost:3000/auth/login",{
            email,password,
        }).then(response => {
            if(response.data.status){
                recheckAuthentication().then(() => navigate('/dashboard'));
            } 
            else{
                setError(response.data.message || 'Login failed. Please try again.');
            }
            
        }).catch(err => {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'An error occurred. Please try again.');
            } else {
                setError('The server is not responding. Please try again later.');
            }
        })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <div className="error-message">{error}</div>}
                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}></input>

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}></input>

                <button type='submit'>Login</button><br></br>
                <Link to="/forgotPassword" style={{ textDecoration: 'underline' }}>Forgot Password</Link><br></br>
                <p className='paragragh'>New User create Account?<Link to='/signup' style={{ textDecoration: 'underline' }}>Signup</Link></p>
            </form>
        </div>
    )
}

export default Login