import React from 'react'
import './addDiary.css'
const AddDiary = () => {
  return (
    <>
      <div className='addDiaryContainer'>
        <div className="addHeading">Add Today's Diary</div>
        <hr></hr>
        <div className="addTitle">Title</div>
        <input type="text" className="addTitleInput"></input>
        <div className="addContent">SPIT ON IT HAWK THUAHH</div>
        <textarea className="addTitleInput" rows="4" cols="50"></textarea>
        <div className="addBtn"><button className="addDiary">Add Diary</button></div>
      </div>
    </>

  )
}

export default AddDiary
