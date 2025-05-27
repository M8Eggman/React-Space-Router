import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import "./TechnologyLayout.css";


export default function TechnologyLayout() {
  return (
    <>
      <Nav />
      <h2 className="technologyTitle">
        <span>03</span> SPACE LAUNCH 101
      </h2>
      <Outlet />
    </>
  );
}
