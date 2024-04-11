import React from 'react';

const ExpenseCard = ({ expense }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h4>{expense.category}</h4>
      <p>Amount: ${expense.amount}</p>
      <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
    </div>
  );
};

export default ExpenseCard;
