import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import "./CrewLayout.css";

export default function CrewLayout() {
  return (
    <>
      <Nav />
      <h2 className="crewTitle">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <Outlet />
    </>
  );
}
