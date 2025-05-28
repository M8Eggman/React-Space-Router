import "./Nav.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

export default function Nav() {
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
        <button><img src={hamburger} alt="" /></button>
      </nav>
    </>
  );
}
