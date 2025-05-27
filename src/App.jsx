import "./App.css";
import { Route, Routes } from "react-router-dom";
// import layout
import TechnologyLayout from "./pages/technology/TechnologyLayout";
import CrewLayout from "./pages/crew/CrewLayout";
import DestinationLayout from "./pages/destination/DestinationLayout";
// import page
import DestinationContent from "./pages/destination/DestinationContent";
import CrewContent from "./pages/crew/CrewContent";
import TechnologyContent from "./pages/technology/TechnologyContent";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Space-Router/" element={<Home />} />
        {/* Destination */}
        <Route path="/React-Space-Router/destination" element={<DestinationLayout />}>
          <Route path=":destination" element={<DestinationContent />} />
        </Route>
        {/* Crew */}
        <Route path="/React-Space-Router/crew" element={<CrewLayout />}>
          <Route path=":name" element={<CrewContent />} />
        </Route>
        {/* Technology */}
        <Route path="/React-Space-Router/technology" element={<TechnologyLayout />}>
          <Route path=":technology" element={<TechnologyContent />} />
        </Route>
      </Routes>
    </>
  );
}
