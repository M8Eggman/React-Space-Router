import "./App.css";
import { Route, Routes } from "react-router-dom";
// import layout
import TechnologyLayout from "./pages/technology/TechnologyLayout";
import CrewLayout from "./pages/crew/CrewLayout";
import DestinationLayout from "./pages/destination/DestinationLayout";
// import page
import Home from "./pages/home/Home";
import DestinationContent from "./pages/destination/DestinationContent";
import CrewContent from "./pages/crew/CrewContent";
import TechnologyContent from "./pages/technology/TechnologyContent";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Space-Router" element={<Home />} />
        {/* Destination */}
        <Route path="/React-Space-Router/destination" element={<DestinationLayout />}>
          <Route index element={<DestinationContent defaultValue="moon" />} />
          <Route path=":destination" element={<DestinationContent  />} />
        </Route>
        {/* Crew */}
        <Route path="/React-Space-Router/crew" element={<CrewLayout />}>
          <Route index element={<CrewContent defaultValue="douglas" />} />
          <Route path=":name" element={<CrewContent />} />
        </Route>
        {/* Technology */}
        <Route path="/React-Space-Router/technology" element={<TechnologyLayout />}>
          <Route index element={<TechnologyContent defaultValue="vehicle" />} />
          <Route path=":technology" element={<TechnologyContent />} />
        </Route>
      </Routes>
    </>
  );
}
