import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        
        <ul className="nav">
  <li className="nav-item">
    <Link className='nav-link' to="home">Home</Link>
  
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="register">Registration</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="login">Login</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="hotel">Hotel-List</Link>      
  </li>
  <li className="nav-item">
  <Link className='nav-link' to="rshow">Show-Rating</Link>      
  </li>
  
</ul>
    </div>
  )
}
