import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [name,setName]= useState()
    const [email,setEmail] =useState()
    const [password, setPassword]= useState()
    const [address, setAddress]= useState()
    const [phoneNumber, setPhoneNumber]= useState()
    const [pincode, setPincode]= useState()
    const navigate =useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!name || !email || !password || !address || !phoneNumber || !pincode) {
    alert("Please fill in all fields before submitting.");
    return;
  }
        axios.post('http://localhost:4000/register', { name, email, password,address ,phoneNumber,pincode})

        .then(result => {console.log(result)
              navigate('/login')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="d-flex justify-content-center align-items-center  w-100 "style={{ backgroundColor: '#f1f8e9', border: '1px solid #c5e1a5',
    boxShadow: '0 4px 20px rgba(0, 0, 10, 0.8)' }}>
        <div className="bg-white p-4 rounded w-50 "style={{ margin: '20px'}}>
            <h2 style={{ margin: '20px',textAlign:'center'}}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input type="text" placeholder="Enter Name" autoComplete='off' name="name" className='form-control rounded-0'
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email" placeholder="Enter Email" autoComplete='off' name="email" className='form-control rounded-0'
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" placeholder="Enter Password" autoComplete='off' name="password" className='form-control rounded-0'
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address">
                        <strong>Address</strong>
                    </label>
                    <input type="address" placeholder="Enter address" autoComplete='off' name="address" className='form-control rounded-0'
                    onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phonenumber">
                        <strong>Phone</strong>
                    </label>
                    <input type="Number" placeholder="Enter Phone number" autoComplete='off' name="number" className='form-control rounded-0'
                    onChange={(e)=>setPhoneNumber(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode">
                        <strong>Pincode</strong>
                    </label>
                    <input type="Number" placeholder="Enter Pincode" autoComplete='off' name="number" className='form-control rounded-0'
                    onChange={(e)=>setPincode(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
            </form>
            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 mt-3">Login</Link>
        </div>
    </div>
  )
}

export default Signup