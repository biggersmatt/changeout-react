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
        <div className="login-form-section">
          <label className="login-form-label" htmlFor="company">Company</label>
          <input 
            className="login-form-input" 
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
            type="password" 
            name="password" 
            id="password" 
            ref={register({ required: true })} 
          />
        </div>
        <button className="login-submit-btn" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;