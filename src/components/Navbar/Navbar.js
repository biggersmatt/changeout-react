import { Link } from 'react-router-dom';
require('./Navbar.css');

const Navbar = (props) => {

  // const logout = () => {
  //     fetch(`http://localhost:4000/api/users/logout`, {
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     })
  //       .then((res) => res.json)
  //       .then((jsonData) => console.log(jsonData))
  // }

  return (
    <nav>
      <h1 className="navbar-greeting">Welcome Username</h1>
      <Link to='/'><span className="navbar-link">Home</span></Link>{' '}
      <Link to='/login'><span onClick={() => props.logout()} className="navbar-link">Log Out</span></Link>{' '}
    </nav>
  )
}

export default Navbar;