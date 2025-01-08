import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className="navLeft">
          <h2 className='navHead'>नाम </h2>
        </div>
        <div className="navRight">
          <Link to='/addDiary'>
            <button className="addDiary">Add today's diary</button>
          </Link>
          <button className="register">register</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;