import "./Topbar.css";
import { Search } from "@material-ui/icons";
import {fire} from '../../../util/firebase';


const Topbar = () => {
    const logoutHandler = () => {
        fire.auth().signOut();
    }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <a href="/">2ND HAND</a>
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
          <span className="topbarLink shopLink"><a href="/shop">SHOP</a></span>
          <span className="topbarLink sellLink"><a href="/sell">SELL</a></span>
          <span className="topbarLink shopLink"><a href="/profile">Profile</a></span>
          <span className="topbarLink sellLink" onClick={logoutHandler}>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
