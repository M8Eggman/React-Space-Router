import "./DestinationLayout.css";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";

export default function DestinationLayout() {
  return (
    <>
      <Nav />
      <h2 className="destinationTitle">
        <span>01</span> PICK YOUR DESTINATION
      </h2>
      <Outlet />
    </>
  );
}
