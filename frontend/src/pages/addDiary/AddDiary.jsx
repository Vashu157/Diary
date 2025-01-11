import React, { useState } from 'react';
import axios from 'axios';
import './addDiary.css';

const AddDiary = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Diary Added");
    const res = await axios.post("http://localhost:3000/api/diary/add", { title, content });
    console.log(res);
    alert("Diary Added!");
  }

  return (
    <>
      <div className='addDiaryContainer'>
        <div className="addHeading">Add Today's Diary</div>
        <hr />
        <div className="addTitle">Title</div>
        <input 
          type="text" 
          className="addTitleInput" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <div className="addContent">Content</div>
        <textarea 
          className="addContentInput" 
          rows="4" 
          cols="50" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <div className="addBtn">
          <button className="addDiary" type="submit" onClick={onSubmit}>Add Diary</button>
        </div>
      </div>
    </>
  );
}

export default AddDiary;