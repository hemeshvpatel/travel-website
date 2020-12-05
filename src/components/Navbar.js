import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//Icons
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    //console.log("Handle click = ", click)
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            TRAVEL <i className="fas fa-plane-departure" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {/*set hamburger menu  */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* nav menu click and dissapear */}
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/'" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services'"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products'"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
