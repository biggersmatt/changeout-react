import { Redirect } from "react-router-dom";
import React, { useState } from "react";
require("./LoginPage.css");

function LoginPage(props) {

  const [loginUser, setLoginUser] = useState({
    username: "", 
    password: "",
  })

  let [redirect, setRedirect] = useState(null);

  const handleChange = (event) => {
    if(event.target.id === "username") {
      setLoginUser(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          username: event.target.value,
        }
      })
    }
    if(event.target.id === "password") {
      setLoginUser(prevNewEndcap => {
        return {
          ...prevNewEndcap,
          password: event.target.value,
        }
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users")
    .then(response => response.json())
    .then(jsonData => {
      const users = jsonData.allUsers;
      if(users.length > 0) {
        let loggedIn = false;
        for(let i = 0; i < users.length && !loggedIn; i++) {
          const currentUsername = users[i].username;
          const currentPassword = users[i].password;
          const userId = users[i]._id;
          loggedIn = handleUserCheck(currentUsername, currentPassword, userId);
        }
        if(!loggedIn) {
          alert("Incorrect Login Information")
        }
      }
    })
  }

  const handleUserCheck = (currentUsername, currentPassword, userId) => {
    if(currentUsername === loginUser.username && currentPassword === loginUser.password) {
      setRedirect(redirect = "/home" );
      props.handleUserId(currentUsername, userId);
      return true;
    }
  }

  if(redirect) {
    return <Redirect to={redirect} />
  }
  
  console.log("Login Page");
  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit}>
        <h1 className="login-header">Change Out</h1>
        <h2 className="login-form-signup">Sign In</h2>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Your username"
            className="login-form-input"
            onChange={handleChange} 
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Your password"
            className="login-form-input"
            onChange={handleChange}
          />
        </div>
        <h4 className="login-signup-prompt">Don"t have an account?<a href="/signup"><span>Sign up.</span></a></h4>
        <button className="login-submit-btn shadow" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;