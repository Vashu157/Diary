import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ loggedInUser }) {
  return (
    <>
      <div className="navbar">
        <div className="navLeft">
          <h2 className="navHead">नाम</h2>
        </div>
        <div className="navRight">
          <Link to="/addDiary">
            <button className="addDiary">Add today's diary</button>
          </Link>
          <Link to={loggedInUser ? "/profile" : "/register"}>
            <button className="register">
              {loggedInUser ? loggedInUser.name : "Register"}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
