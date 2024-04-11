import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseCard from './ExpenseCard';
import ExpenseChart from './ExpenseChart';

const Dashboard = () => {
    const navigate = useNavigate();
    const [expenses, setExpenses] = useState([]); // State to store expenses data

    useEffect(() => {
        // Verify user authentication
        axios.get('http://localhost:3000/auth/verify', { withCredentials: true })
            .then(res => {
                if (!res.data.status) {
                    navigate('/');
                } else {
                    // Fetch expenses data if user is authenticated
                    fetchExpenses();
                }
            })
            .catch(error => {
                console.error("Verification failed", error);
                navigate('/');
            });
    }, [navigate]);

    const fetchExpenses = () => {
      console.log("before get");
        axios.get('http://localhost:3000/expenses/fetch', { withCredentials: true })
            .then(response => {
              console.log("after get");

              console.log(response.data)
                setExpenses(response.data); // Assuming the backend sends the expenses data as an array
            })
            .catch(error => {
              console.log("catch");

                console.error("Failed to fetch expenses:", error);
            });
    };

    return (
      <div>
      <h2>Dashboard</h2>
      <ExpenseChart expenses={expenses} />
      <div>
          {expenses.map(expense => <ExpenseCard key={expense._id} expense={expense} />)}
      </div>
  </div>
    );
};

export default Dashboard;
