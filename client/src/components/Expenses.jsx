import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './InputForm'; 

const initialFormData = {
    category :"",
    amount:"",
    date:"",
  }
  

const Expenses = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [formData, setFormData] = useState(initialFormData);


    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3000/auth/verify')
            .then(res => {
                if (res.data.status) {
                    setIsAuthenticated(true);
                } else {
                    navigate('/');
                }
            })
            .catch(err => {
                console.error("Verification failed", err);
                navigate('/');
            });
    }, [navigate]);

    
    const handleSubmit = (event) => {
        event.preventDefault(); 
        axios.post('http://localhost:3000/expenses/add', formData, { withCredentials: true })
            .then(response => {
                setExpenses(prevExpenses => [...prevExpenses, response.data]);
                setFormData(initialFormData)
            })
            .catch(error => {
                console.error("Error submitting expense:", error);
            });
    };

    const onChange= (e)=>{
        setFormData((prev)=>{
          let temp = {...prev};
          temp[`${e.target.id}`] = e.target.value;
          return temp
        });
      }

    
    return (
        <div>
            {isAuthenticated ? (
                <>
                    <InputForm formData = {formData} handleSubmit = {handleSubmit} onSelect ={onChange}/>
                    
                </>
            ) : (
                <div>Verifying...</div>
            )}
        </div>
    );
};

export default Expenses;
