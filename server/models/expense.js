
import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  date: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to User
});

 const ExpenseModel = mongoose.model('Expense', expenseSchema);

export {ExpenseModel as Expense}