import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom"
// import { useForm } from "react-hook-form";
require("./SignupPage.css")


function SignupPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [redirect, setRedirect] = useState(null);
  // const { register, handleSubmit, watch, errors } = useForm();
  // const password = useRef({});
  // password.current = watch("password", "");
  // const history = useHistory()  

  const handleChange = (event) => {
    if(event.target.id === "username") {
      setUsername(username = event.target.value);
    }
    if(event.target.id === "password") {
      setPassword(password = event.target.value);
    }
    if(event.target.id === "confirmPassword") {
      setConfirmPassword(confirmPassword = event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(username.length === 0 || password === 0) {
      alert("Please fill out username & password fields");
    } else if(username.length === 0) {
      alert("Please fill out username field");
    } else if(password.length === 0) {
      alert("Please fill out password field");
    } else if(password !== confirmPassword) {
      alert("Passwords do not match");
    } else if(password === confirmPassword) {
      const newUser = {
        username: username,
        password: password,
      }
      fetch("http://localhost:5000/users/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
      .then(() => alert("New User Created"))
      .then(() => setRedirect(redirect = "/"))
      .catch(err => console.log(err));
    }
  }

  // const handleSubmit = () => {
    // const { confPassword, ...rest } = data;
    // props.signup(rest)
    // history.push("/login")
  // }

  if(redirect) {
    return <Redirect to={redirect} />
  }

  console.log('SignUp Page');
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
            // ref={register({ required: true })} 
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
          //   ref={register({
          //   required: "You must create a password",
          //   minLength: {
          //     value: 2,
          //     message: "Password must have at least 6 characters",
          //   },
          // })} 
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
          //   ref={register({
          //   validate: (value) =>
          //     value === password.current || "The passwords do not match",
          // })}
          />
        {/* {errors.confPassword && <p>{errors.confPassword.message}</p>} */}
        </div>
        <h4 className="login-signup-prompt">Already have an account? <a href="/"><span>Login.</span></a></h4>
        <button className="login-submit-btn shadow" type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignupPage;