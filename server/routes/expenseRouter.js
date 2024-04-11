import express from 'express';
import { Expense }  from '../models/expense.js';
import { verifyUser } from './userRouter.js'; 
const router = express.Router();


router.post('/add', verifyUser, async (req, res) => {
  const { category, amount, date } = req.body;
  const userId = req.user.id; 
  console.log(userId);
  try {
    const newExpense = new Expense({ category, amount, date, user: userId });
    console.log(newExpense)
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ error: 'Could not save expense' });
  }
});

router.get('/fetch',verifyUser, async(req, res) => {
    const userId = req.user.id;
  console.log("Fetching expenses for user ID:", userId);
  try {
    const expenses = await Expense.find({ user: userId });
    console.log(`Found ${expenses.length} expenses for user ID: ${userId}`);
    res.json(expenses);
  } catch (err) {
    console.error("Error fetching expenses:", err);
    res.status(500).json({ message: "Error fetching expenses" });
  }
});



export { router as ExpenseRouter };
