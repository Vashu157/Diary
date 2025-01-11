import React, { useEffect, useState } from "react";
import "./dayDiary.css";
const DayDiary = ({ email, date }) => {
  const [diary, setDiary] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/diary/getDiary"
        );
        setDiary(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDiary();
  }, [email, date]);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/removeDiary", { email, date });
      console.log(response);
      alert("Diary Removed!");
    } catch (error) {
      console.error("Error removing diary:", error);
    }
  };
  return (
    <>
      <div className="diaryContainer">
        <div className="date">{date}</div>
        <hr></hr>
        <div className="title">{diary.title}</div>
        <div className="content">
          <p>{diary.content}</p>
        </div>
        <div className="removeBtn">
          <button className="removeDiary" type="submit" onClick={onSubmit}>
            remove Diary
          </button>
        </div>
      </div>
    </>
  );
};

export default DayDiary;
