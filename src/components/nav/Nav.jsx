import "./Nav.css";
import logo from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="navLogo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/React-Space-Router">00 HOME</Link>
          </li>
          <li>
            <Link to="/React-Space-Router/destination">01 DESTINATION</Link>
          </li>
          <li>
            <Link to="/React-Space-Router/crew">02 CREW</Link>
          </li>
          <li>
            <Link to="/React-Space-Router/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
