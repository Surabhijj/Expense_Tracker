import React, { useState } from 'react'
import '../App.css'
import Axios from "axios";
import {useNavigate, Link} from "react-router-dom";
import '../components/Login.jsx'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3000/auth/forgot-password",{
            email
        }).then(response => {
            if(response.data.status){
                alert("check your email for reset password")
                navigate('/login')
            } 
            console.log(response.data)
            
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            <h2>Confirm Email</h2>
            
               

                <label htmlFor="email">Email:</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}></input>


                <button type='submit'>Submit</button>
                <p className='paragragh'>Know Password: <Link to='/login' style={{ textDecoration: 'underline' }}>Login</Link></p>
            </form>
        </div>
  )
}

export default ForgotPassword