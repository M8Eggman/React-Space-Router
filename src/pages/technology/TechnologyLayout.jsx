import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import "./TechnologyLayout.css";


export default function TechnologyLayout() {
  return (
    <>
      <Nav />
      <h2 className="technologyTitle">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <Outlet />
    </>
  );
}
