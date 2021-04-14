// import { useHistory } from "react-router-dom"
// import { useForm } from "react-hook-form";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Redirect } from "react-router-dom";
import React from "react";
// import HomePage from "../Homepage/HomePage";
require("./LoginPage.css");

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    redirect: null,
  }
//   const { register, handleSubmit } = useForm();

//   const history = useHistory()

//   const onSubmit = (data) => {
//     props.login(data)
//     history.push("/")
//   }


handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value,
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  fetch("http://localhost:5000/users")
  .then(response => response.json())
  .then(jsonData => {
    const allUsers = jsonData.allUsers;
    allUsers.forEach(user => {
      const username = user.username;
      const password = user.password;
      if(username === this.state.username && password === this.state.password) {
        this.setState({ redirect: "/home" });
      } else {
        alert("Incorrect Login Information. Try Again.")
      }
    })
  })
}
  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="login-container">
        <form className="login-form shadow" onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
              // ref={register({ required: true })} 
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
              onChange={this.handleChange}
              // ref={register({ required: true })} 
            />
          </div>
          <h4 className="login-signup-prompt">Don"t have an account? <a href="/signup"><span>Sign up.</span></a></h4>
          <button className="login-submit-btn shadow" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;