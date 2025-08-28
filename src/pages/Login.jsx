import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const[email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate =useNavigate()
 const  handleSubmit =(e)=>{
  e.preventDefault()
  axios.post('http://localhost:4000/login',{email,password})
  .then(result => {console.log(result)

   if(result.data === "Success"){
     navigate('/buynow')
   }
   
  })
  .catch(err => console.log(err))
 }

  return (
    <div
  className='d-flex justify-content-center align-items-center vh-100  mb-2'
  style={{ backgroundColor: '#f1f8e9' }} >
      <div className='bg-white p-4 rounded w-25 border border-success shadow-lg'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email' className='form-control rounded-0 border border-success shadow' onChange={(e)=>setEmail(e.target.value)}/>
            
           
          </div><div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='enter password' name='password' className='form-control rounded-0 border border-success shadow shadow' onChange={(e)=>setPassword(e.target.value)}/>

            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0 shadow'>Log in</button>
            <Link to="/signup" className='btn btn-default  w-100 bg-light rounded-0 text-decoration-none mt-3 border border-success shadow'>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login