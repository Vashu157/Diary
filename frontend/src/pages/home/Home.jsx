import React from 'react'
import "./home.css"
import DayDiary from '../../components/dayDiary/DayDiary'
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
        <div className='day-diary'><DayDiary/></div>
        <div className='day-diary'><DayDiary/></div>
        <div className='day-diary'><DayDiary/></div>
      </div>
    </div>
    </>
  )
}

export default Home
