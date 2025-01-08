import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="left-bar">
        <ul>
            <li>Home</li>
            <li>your diary</li>
            <li>enter your thoughts</li>
            <li>login</li>
            {/* <li></li> */}
        </ul>
      </div>
      <div className="right">
        <div className='day-diary'></div>
        <div className='day-diary'></div>
        <div className='day-diary'></div>
      </div>
    </div>
    </>
  )
}

export default Home
