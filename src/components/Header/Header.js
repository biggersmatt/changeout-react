import { Link } from 'react-router-dom';
require('./Header.css');

const Header = () => {
  return (
    <header>
    <div className="endcap-btn-wrapper">
      <Link to="/new">
        <button className="endcap-btn">+</button>
      </Link>
      <h3>New Endcap</h3>
    </div>
    <h1 className="homepage-title">Change Out</h1>
  </header>
  )
}

export default Header;