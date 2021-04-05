import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";


const LoginPage = (props) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory()
  
  const onSubmit = (data) => {
    props.login(data)
    history.push('/')
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" ref={register({ required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" ref={register({ required: true })} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;