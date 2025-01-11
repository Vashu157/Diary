import React, { useEffect, useState } from "react";
import "./home.css";
import DayDiary from "../../components/dayDiary/DayDiary";

const Home = () => {
  const [email, setEmail] = useState(null);

  const getEmail = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken.email;
  };

  useEffect(() => {
    const userEmail = getEmail();
    setEmail(userEmail);
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const dayBeforeYesterday = new Date(Date.now() - 2 * 86400000).toISOString().split("T")[0];

  return (
    <>
      <div className="home">
        <div className="left-bar">
          <ul>
            <li>Home</li>
            <li>Your diary</li>
            <li>Enter your thoughts</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="right">
          {email ? (
            <>
              <div className="day-diary">
                <DayDiary email={email} date={today} />
              </div>
              <div className="day-diary">
                <DayDiary email={email} date={yesterday} />
              </div>
              <div className="day-diary">
                <DayDiary email={email} date={dayBeforeYesterday} />
              </div>
            </>
          ) : (
            <p>Please log in to view your diary entries.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
