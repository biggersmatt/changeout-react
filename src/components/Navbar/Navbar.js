import { Link } from "react-router-dom";
require("./Navbar.css");

const Navbar = (props) => {
  return (
    <nav>
      <h1 className="navbar-greeting">Welcome {props.username}</h1>
      <div className="navbar-links">
        {props.username.length >= 1 ? 
          <Link to="/home" className="navbar-link">Home</Link> 
          : null
        }
        {props.username.length >= 1 ? 
          <Link to="/" className="navbar-link" onClick={() => props.handleSignOut()}>Sign out</Link> 
          : null 
        }
        {props.username.length === 0 ? 
          <Link to="/" className="navbar-link">Login</Link> 
          : null
        }
        {props.username.length === 0 ?
          <Link to="/signup" className="navbar-link">Sign Up</Link> 
          : null
        }
      </div>
    </nav>
  )
}

export default Navbar;