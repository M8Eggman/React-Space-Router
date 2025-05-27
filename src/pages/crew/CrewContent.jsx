import { useParams } from "react-router-dom";
import "./CrewContent.css";
import dataCrew from "../../data/dataCrew.json";

export default function CrewContent() {
  const { destination } = useParams();
  const data = dataCrew.find((item) => item.link === destination);
  return (
    <>
      <section className="sectionCrew">
        <div className="crew"></div>
      </section>
    </>
  );
}
