import { Link } from "react-router-dom";
require("./Navbar.css");

const Navbar = (props) => {
  console.log("Navbar");
  return (
    <nav>
      <h1 className="navbar-greeting">Welcome 
      {/* {props.user.username} */}
      </h1>
      <div className="navbar-links">
        {/* {props.isLoggedIn &&  */}
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/" className="navbar-link">Login</Link>
        {/* } */}
        {/* {props.isLoggedIn && <Link to="/login" onClick={() => props.logout()} className="navbar-link">Sign out</Link>} */}
        {/* {!props.isLoggedIn && <Link to="/login"  className="navbar-link">Login</Link>} */}
        {/* {!props.isLoggedIn && <Link to="/signup"  className="navbar-link">Sign up</Link>} */}
      </div>
    </nav>
  )
}

export default Navbar;