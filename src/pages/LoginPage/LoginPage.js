import { Redirect, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";


const LoginPage = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const history = useHistory()
  
  const onSubmit = (data) => {
    console.log(data)
    fetch(`http://localhost:4000/api/users/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(() => props.setIsLoggedIn())
    .then(() => history.push('/'))
    .catch((err) => console.log(err))
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