import { useParams } from "react-router-dom";
import "./TechnologyContent.css";
import dataTechnology from "../../data/dataTechnology.json";

export default function TechnologyContent() {
  const { destination } = useParams();
  const data = dataTechnology.find((item) => item.link === destination);
  return (
    <>
      <section className="sectionTechnology">
        <div className="technology"></div>
      </section>
    </>
  );
}
