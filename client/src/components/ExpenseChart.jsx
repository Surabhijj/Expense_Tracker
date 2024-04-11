import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const prepareChartData = (expenses) => {
  // Organizing expenses by month and category
  const data = {}; // Format: { 'Jan': { 'Food': 100, 'Transport': 200 }, 'Feb': { ... } }
  expenses.forEach(expense => {
    const month = new Date(expense.date).toLocaleString('default', { month: 'short' });
    const category = expense.category;
    const amount = parseFloat(expense.amount);
    
    if (!data[month]) {
      data[month] = {};
    }
    if (!data[month][category]) {
      data[month][category] = 0;
    }
    data[month][category] += amount;
  });

  // Converting data to Chart.js format
  const categories = [...new Set(expenses.map(expense => expense.category))];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#ff6348', '#36a2b5']; // Example colors
  const datasets = categories.map((category, index) => ({
    label: category,
    data: Object.keys(data).map(month => data[month][category] || 0),
    backgroundColor: colors[index % colors.length],
  }));

  return {
    labels: Object.keys(data),
    datasets: datasets,
  };
};

const ExpenseChart = ({ expenses }) => {
  const chartData = prepareChartData(expenses);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            return '$' + value;
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <div style={{ height: '400px', width: '100%' }}>
    <Bar data={chartData} options={options} />
  </div>;
};

export default ExpenseChart;
