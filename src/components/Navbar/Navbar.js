import { Link } from "react-router-dom";
require("./Navbar.css");

const Navbar = (props) => {
  console.log("Navbar");
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








        {/* {props.isLoggedIn &&  */}
        {/* <Link to="/home" className="navbar-link">Home</Link> */}
        {/* <Link to="/login" className="navbar-link">Login</Link> */}
        {/* <Link to="/login" className="navbar-link">Sign out</Link> */}
        {/* {props.username.length > 0 && <Link to="/login" className="navbar-link">Sign out</Link>} */}
        {/* } */}
        {/* {props.isLoggedIn && <Link to="/login" onClick={() => props.logout()} className="navbar-link">Sign out</Link>} */}
        {/* {!props.isLoggedIn && <Link to="/login"  className="navbar-link">Login</Link>} */}
        {/* {!props.isLoggedIn && <Link to="/signup"  className="navbar-link">Sign up</Link>} */}
      </div>
    </nav>
  )
}

export default Navbar;