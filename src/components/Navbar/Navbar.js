import { Link } from 'react-router-dom';
require('./Navbar.css');

const Navbar = () => {
  return (
    <nav>
      <img src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Logo"/>
      <h1>Welcome username</h1>
      <ul className="nav-items">
        <li>
          <Link to='/'>Home</Link>{' '}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;