import React from 'react'
import '../linkpages/thanks.css'
import thanks from '../assets/images/thank-you.png'
import { Link } from 'react-router-dom'
const Thanks = () => {
  return (
    <div className='thanks'>
        <img src={thanks}/>
        <div>Thanks for shopping</div>
        <Link to='/' variant="success" className='button-thanks'>
            Go Back To Home Page
          </Link>
    </div>
    
  )
}

export default Thanks