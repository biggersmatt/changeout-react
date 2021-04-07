import { Link } from 'react-router-dom';
require('./Navbar.css');

const Navbar = (props) => {
  return (
    <nav>
      <h1 className="navbar-greeting">Welcome {props.user.company}</h1>
      <div className="navbar-links">
        {props.isLoggedIn && <Link to='/' className="navbar-link">Home</Link>}
        {props.isLoggedIn && <Link to='/login' onClick={() => props.logout()} className="navbar-link">Sign out</Link>}
        {!props.isLoggedIn && <Link to='/signup'  className="navbar-link">Signup</Link>}
        {!props.isLoggedIn && <Link to='/login'  className="navbar-link">Login</Link>}
      </div>
    </nav>
  )
}

export default Navbar;