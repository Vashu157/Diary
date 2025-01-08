import React from 'react'
import "./dayDiary.css"
const DayDiary = () => {
  return (
    <>
       <div className='diaryContainer'>
        <div className="date">Date</div>
        <hr></hr>
        <div className="title">title</div>
        <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim, 
            architecto, cumque distinctio officiis harum ipsam temporibus sint qui dolore ducimus 
            saepe hic asperiores sed assumenda! Dolore consectetur magni reprehenderit?
        </div>
        <div className="removeBtn"><button className="removeDiary">remove Diary</button></div>
      </div>
    </>

  )
}

export default DayDiary
