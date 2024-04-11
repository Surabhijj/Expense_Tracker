import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {UserRouter} from './routes/userRouter.js'
import {ExpenseRouter} from './routes/expenseRouter.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use(cookieParser())


app.use('/auth', UserRouter);
app.use('/expenses', ExpenseRouter);

mongoose.connect('mongodb://127.0.0.1:27017/expenseTracker')

app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})