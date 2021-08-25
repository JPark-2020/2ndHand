import "./Topbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/">2ND HAND</Link>
        </span>
      </div>

      <div className="topbarCenter">
        <div className="searchbarMain">
          <div className="searchbarInner">
            <Search className="searchIcon" />
            <input placeholder="Search" className="searchInput" />
            <button className="searchButton" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">SHOP</span>
          <span className="topbarLink">SELL</span>

          <span className="topbarLink loginLink">
            <Link to="/login">LOGIN</Link>
          </span>

          <span className="topbarLink signupLink">
            <Link to="/register">SIGN UP</Link>
          </span>

          <span className="topbarLink">
            <Link to="/profile">
              <img src="" alt="profilepic" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
