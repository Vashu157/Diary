import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        setError("Please fill out both fields");
        return;
      }
      const response = await axios.post("http://localhost:3000/api/user/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      setError("");
      alert("Login successful!");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (name === "" || email === "" || password === "") {
        setError("All fields are required for registration");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        { name, email, password }
      );
      console.log("Registration successful:", response.data);
      setError("");
      alert("Registration successful!");
      navigate("/"); // Redirect to the home page after successful registration
    } catch (error) {
      console.error(error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleSubmit = (e) => {
    if (isRegister) {
      handleRegister(e);
    } else {
      handleLogin(e);
    }
  };

  return (
    <div className="login-container">
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
        )}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submitBtn">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <button
        className="toggleBtn"
        onClick={() => {
          setIsRegister(!isRegister);
          setError("");
        }}
      >
        Switch to {isRegister ? "Login" : "Register"}
      </button>
    </div>
  );
};

export default Register;
