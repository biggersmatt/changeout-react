import React, { useState } from "react";
import { Redirect } from "react-router-dom";
require("./SignupPage.css")

function SignupPage() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  let [redirect, setRedirect] = useState(null);

  const handleChange = (event) => {
    if(event.target.id === "username") {
      setNewUser(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          username: event.target.value,
        }
      })
    }
    if(event.target.id === "password") {
      setNewUser(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          password: event.target.value,
        }
      })
    }
    if(event.target.id === "confirmPassword") {
      setNewUser(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          confirmPassword: event.target.value,
        }
      })
    }
  }

  const handleCreateUser = () => {
    const newUserCreated = {
      username: newUser.username,
      password: newUser.password,
    }
    fetch("https://gentle-savannah-74717.herokuapp.com/users/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserCreated),
    })
    .then(() => alert("New User Created"))
    .then(() => setRedirect(redirect = "/"))
    .catch(err => console.log(err));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(newUser.username.length === 0 || newUser.password === 0) {
      alert("Please fill out username & password fields");
    } else if(newUser.username.length === 0) {
      alert("Please fill out username field");
    } else if(newUser.password.length === 0) {
      alert("Please fill out password field");
    } else if(newUser.password !== newUser.confirmPassword) {
      alert("Passwords do not match");
    } else if(newUser.password === newUser.confirmPassword) {
      fetch("https://gentle-savannah-74717.herokuapp.com/users")
      .then((response) => response.json())
      .then((jsonData) => {
        const users = jsonData.allUsers;
        for(let i = 0; i < users.length; i++) {
          if(users[i].username === newUser.username) {
            return alert("That username is already taken")
          }
        }
        handleCreateUser();
      })
      .catch((err) => console.log(err));
    }
  }

  if(redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h1 className="login-header">Change Out</h1>
        <h2 className="login-form-signup">Sign Up</h2>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="username">Username</label>
          <input 
            className="login-form-input"
            placeholder="Your username"
            type="text" 
            name="username" 
            id="username" 
            onChange={handleChange}
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="password">Password</label>
          <input 
            className="login-form-input"
            placeholder="Create Password"
            type="password" 
            name="password" 
            id="password" 
            onChange={handleChange}
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="password">Confirm Password</label>
          <input 
            className="login-form-input"
            placeholder="Confirm Password"
            type="password" 
            name="confirmPassword" 
            id="confirmPassword" 
            onChange={handleChange}
          />
        </div>
        <h4 className="login-signup-prompt">Already have an account? <a href="/"><span>Login.</span></a></h4>
        <button className="login-submit-btn shadow" type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignupPage;