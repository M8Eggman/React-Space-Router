import { NavLink, useParams } from "react-router-dom";
import "./TechnologyContent.css";
import dataTechnology from "../../data/dataTechnology.json";

export default function TechnologyContent() {
  const { technology } = useParams();
  const data = dataTechnology.find((item) => item.link.toLowerCase() === technology.toLowerCase());
  return (
    <>
      <section className="sectionTechnology">
        <div className="technology">
          <nav>
            <ul>
              {dataTechnology.map((item, index) => (
                <li key={item.link}>
                  <NavLink to={`/technology/${item.link}`}>{index + 1}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="technologyContent">
            <p>THE TERMINOLOGY...</p>
            <h3>{data.name.toUpperCase()}</h3>
            <p>{data.description}</p>
          </div>
          <div className="technologyImg">
            <img src={data.imagePortrait} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
