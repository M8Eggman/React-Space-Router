import "./App.css";
import { Route, Routes } from "react-router-dom";
// import page
import Home from "./pages/home/Home";
import DestinationContent from "./pages/destination/DestinationContent";
import CrewContent from "./pages/crew/CrewContent";
import TechnologyContent from "./pages/technology/TechnologyContent";
import Nav from "./components/nav/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/React-Space-Router" element={<Home />} />
        {/* Destination */}
        <Route path="/React-Space-Router/destination">
          <Route index element={<DestinationContent />} />
          <Route path=":destination" element={<DestinationContent />} />
        </Route>
        {/* Crew */}
        <Route path="/React-Space-Router/crew">
          <Route index element={<CrewContent />} />
          <Route path=":name" element={<CrewContent />} />
        </Route>
        {/* Technology */}
        <Route path="/React-Space-Router/technology">
          <Route index element={<TechnologyContent />} />
          <Route path=":technology" element={<TechnologyContent />} />
        </Route>
      </Routes>
    </>
  );
}
