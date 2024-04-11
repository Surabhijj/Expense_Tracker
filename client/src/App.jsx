
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Dashboard from './components/Dashboard'
import  Expenses  from './components/Expenses'
import Navbar from './components/Navbar'
import { AuthProvider } from './components/AuthContext'
function App() {
  return(
    <>
    <BrowserRouter>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path = "/signup" element={<Signup/>}></Route>
      <Route path = "/login" element={<Login/>}></Route>
      <Route path = "/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path = "/resetPassword/:token" element={<ResetPassword/>}></Route>
      <Route path='/dashboard' element ={<Dashboard/>}></Route>
      <Route path='/expenses' element ={<Expenses/>}></Route>

    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
