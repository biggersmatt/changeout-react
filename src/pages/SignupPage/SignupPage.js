import React, { useRef } from "react";

import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
require('./SignupPage.css')


const SignupPage = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const history = useHistory()  

  const onSubmit = (data) => {
    const { confPassword, ...rest } = data;
    props.signup(data)
    history.push('/')
  }



  return (
    <div className="login-container">
      <form className="login-form shadow" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-header">Change Out</h1>
        <h2 className="login-form-signup">Sign Up</h2>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="company">Company</label>
          <input 
            className="login-form-input"
            placeholder="Your company"
            type="text" 
            name="company" 
            id="company" 
            ref={register({ required: true })} 
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="storeNumber">Store Number</label>
          <input 
            className="login-form-input"
            placeholder="Your storeNumber"
            type="text" 
            name="storeNumber" 
            id="storeNumber" 
            ref={register({ required: true })} 
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="password">Password</label>
          <input 
            className="login-form-input"
            placeholder="Your password"
            type="password" 
            name="password" 
            id="password" 
            ref={register({
            required: "You must create a password",
          })} 
          />
        </div>
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="password">Confirm Password</label>
          <input 
            className="login-form-input"
            placeholder="Confirm Password"
            type="password" 
            name="confPassword" 
            id="confPassword" 
            ref={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
          />
        {errors.confPassword && <p>{errors.confPassword.message}</p>}

        </div>
        {/* <h4 className="login-signup-prompt">Already have an account? <a href="/login"><span>Login.</span></a></h4> */}
        <button className="login-submit-btn shadow" type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignupPage;