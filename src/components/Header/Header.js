import { Link } from 'react-router-dom';
require('./Header.css');

const Header = (props) => {
  return (
    <header>
      <h1 className="header-title">ChangeOut</h1>
      {props.isLoggedIn && <div className="endcap-btn-wrapper">
        <Link to="/new">
          <button className="endcap-btn">+</button>
        </Link>
        <h3>New Endcap</h3>
      </div>}
      {!props.isLoggedIn && <div>
        <Link to='/signup' >Sign up </Link> or {' '}
        <Link to="/login" >Login</Link>
      </div>}

    </header>
  )
}

export default Header