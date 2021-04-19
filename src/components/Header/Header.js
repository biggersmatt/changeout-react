import { Link } from "react-router-dom";
require("./Header.css");

const Header = () => {
  return (
    <header>
      <h1 className="header-title">ChangeOut</h1>
      <div className="add-endcap-wrapper">
        <Link to="/new">
          <i className="far fa-plus-square add-endcap-btn"></i>
        </Link>
        <h3 className="add-endcap-title">New Endcap</h3>
      </div>
    </header>
  )
}

export default Header;