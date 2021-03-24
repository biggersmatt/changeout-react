import { Link } from 'react-router-dom';
require('./Navbar.css');

const Navbar = () => {
  return (
    <nav>
      <h1 className="navbar-greeting">Welcome Username</h1>
      <Link to='/'><span className="navbar-link">Home</span></Link>{' '}
    </nav>
  )
}

export default Navbar;