import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
// import page
import Home from "./pages/home/Home";
import DestinationContent from "./pages/destination/DestinationContent";
import DestinationLayout from "./pages/destination/DestinationLayout";
import CrewContent from "./pages/crew/CrewContent";
import CrewLayout from "./pages/crew/CrewLayout";
import TechnologyContent from "./pages/technology/TechnologyContent";
import TechnologyLayout from "./pages/technology/TechnologyLayout";
import dataTechnology from "./data/dataTechnology.json";
import dataCrew from "./data/dataCrew.json";
import dataDestination from "./data/dataDestination.json";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Destination */}
        <Route path="/destination/" element={<DestinationLayout />}>
          <Route index element={<Navigate to="moon" />} /> {/* navigate attribu une route par défaut dans ce cas-ci "moon"  */}
          <Route path=":destination" element={<DestinationContent data={dataDestination} />} />
        </Route>
        {/* Crew */}
        <Route path="/crew/" element={<CrewLayout />}>
          <Route index element={<Navigate to="douglas" />} />
          <Route path=":name" element={<CrewContent data={dataCrew} />} />
        </Route>
        {/* Technology */}
        <Route path="/technology/" element={<TechnologyLayout />}>
          <Route index element={<Navigate to="vehicle" />} />
          <Route path=":technology" element={<TechnologyContent data={dataTechnology} />} />
        </Route>
      </Routes>
    </>
  );
}
