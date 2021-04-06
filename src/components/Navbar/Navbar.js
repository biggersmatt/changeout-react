import { Link } from 'react-router-dom';
require('./Navbar.css');

const Navbar = (props) => {
  return (
    <nav>
      <h1 className="navbar-greeting">Welcome Username</h1>
      <div className="navbar-links">
        <Link to='/' className="navbar-link">Home</Link>
        <Link 
          to='/login' 
          onClick={() => props.logout()} 
          className="navbar-link"
        >
        Sign out
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;