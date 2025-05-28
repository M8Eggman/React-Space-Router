import "./Nav.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav>
        <div className="navLogo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink to="/React-Space-Router" end>
              00 HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/React-Space-Router/destination">01 DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to="/React-Space-Router/crew">02 CREW</NavLink>
          </li>
          <li>
            <NavLink to="/React-Space-Router/technology">03 TECHNOLOGY</NavLink>
          </li>
        </ul>
        <button onClick={() => setNav(!nav)}>
          <img src={hamburger} alt="" />
        </button>
        {nav && (
          <div className="navResponsive">
            <NavLink to="/React-Space-Router" end>
              00 HOME
            </NavLink>
            <NavLink to="/React-Space-Router/destination">01 DESTINATION</NavLink>
            <NavLink to="/React-Space-Router/crew">02 CREW</NavLink>
            <NavLink to="/React-Space-Router/technology">03 TECHNOLOGY</NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
