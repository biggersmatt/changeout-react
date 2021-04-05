import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
require('./LoginPage.css');

const LoginPage = (props) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory()

  const onSubmit = (data) => {
    props.login(data)
    history.push('/')
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-header">Change Out</h1>
        <h2 className="login-form-signup">Sign In</h2>
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
          <label className="login-form-label" htmlFor="password">Password</label>
          <input 
            className="login-form-input"
            placeholder="Your password"
            type="password" 
            name="password" 
            id="password" 
            ref={register({ required: true })} 
          />
        </div>
        <h4>Don't have an account? <a href="www.google.com"><span>Sign up.</span></a></h4>
        <button className="login-submit-btn" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;