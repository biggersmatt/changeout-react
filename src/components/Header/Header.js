import { Link } from 'react-router-dom';
require('./Header.css');

const Header = () => {
  return (
    <header>
      <h1 className="header-title">ChangeOut</h1>
      <div className="endcap-btn-wrapper">
        <Link to="/new">
          <button className="endcap-btn">+</button>
        </Link>
        <h3>New Endcap</h3>
      </div>
    </header>
  )
}

export default Header;