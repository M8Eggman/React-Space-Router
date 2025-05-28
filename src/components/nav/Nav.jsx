import "./Nav.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav>
        <div className="navLogo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <NavLink to="/" end>
              00 HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">01 DESTINATION</NavLink>
          </li>
          <li>
            <NavLink to="/crew">02 CREW</NavLink>
          </li>
          <li>
            <NavLink to="/technology">03 TECHNOLOGY</NavLink>
          </li>
        </ul>
        <button onClick={() => setNav(!nav)}>
          <img src={hamburger} alt="" />
        </button>
        {nav && (
          <div className="navResponsive">
            <NavLink to="/" end>
              00 HOME
            </NavLink>
            <NavLink to="/destination">01 DESTINATION</NavLink>
            <NavLink to="/crew">02 CREW</NavLink>
            <NavLink to="/technology">03 TECHNOLOGY</NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
