import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mars from "./pages/destination/Mars";
import Moon from "./pages/destination/Moon";
import Europa from "./pages/destination/Europa";
import Titan from "./pages/destination/Titan";
import Douglas from "./pages/crew/Douglas";
import Anousheh from "./pages/crew/Anousheh";
import Mark from "./pages/crew/Mark";
import Victor from "./pages/crew/Victor";
import Vehicle from "./pages/technology/Vehicle";
import Spaceport from "./pages/technology/Spaceport";
import Capsule from "./pages/technology/Capsule";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Space-Router/" element={<Home />} />
        {/* Destination */}
        <Route path="/React-Space-Router/destination" element={<DestinationLayout />}>
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>
        {/* Crew */}
        <Route path="/React-Space-Router/crew" element={<CrewLayout />}>
          <Route path="douglas" element={<Douglas />} />
          <Route path="anousheh" element={<Anousheh />} />
          <Route path="mark" element={<Mark />} />
          <Route path="victor" element={<Victor />} />
        </Route>
        {/* Technology */}
        <Route path="/React-Space-Router/technology" element={<TechnologyLayout />}>
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="spaceport" element={<Spaceport />} />
          <Route path="capsule" element={<Capsule />} />
        </Route>
      </Routes>
    </>
  );
}
