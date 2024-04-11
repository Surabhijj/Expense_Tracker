import React, { useState } from 'react'
import '../App.css'
import Axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import '../components/Login.jsx'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/signup",{
            username,email,password,
        }).then(response => {
            if(response.data.status){
                navigate('/login')
            } 
            
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)}></input>

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}></input>

                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}></input>

                <button type='submit'>Sign up</button>
                <p className='paragragh'>Have an Account?<Link to='/login' style={{ textDecoration: 'underline' }}>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup