import { Link } from 'react-router-dom';
require('./Header.css');

const Header = (props) => {
  return (
    <header>
      <h1 className="header-title">ChangeOut</h1>
      {props.isLoggedIn && <div className="add-endcap-wrapper">
        <Link to="/new">
          <i className="far fa-plus-square add-endcap-btn"></i>
        </Link>
        <h3 className="add-endcap-title">New Endcap</h3>
      </div>}
      {!props.isLoggedIn && 
      <div className="login-error-container">
        <div className="login-error-message">
          <h3>Trouble Logging In.</h3>
          <h3>Please Login or Sign Up with ChangeOut.</h3>
        </div>
        <div className="login-error-links">
          <Link to="/login">Login</Link> | {' '}
          <Link to="/signup">Sign up</Link>
        </div>
      </div>}
    </header>
  )
}

export default Header