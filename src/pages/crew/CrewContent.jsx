import { NavLink, useParams } from "react-router-dom";
import "./CrewContent.css";
import dataCrew from "../../data/dataCrew.json";

export default function CrewContent() {
  const { name } = useParams();
  const data = dataCrew.find((item) => item.link.toLowerCase() === name.toLowerCase());
  return (
    <>
      <section className="sectionCrew">
        <div className="crew">
          <div className="crewContent">
            <div className="crewContentDescription">
              <p>{data.role.toUpperCase()}</p>
              <h3>{data.name.toUpperCase()}</h3>
              <p>{data.bio}</p>
            </div>
            <nav>
              <ul>
                {dataCrew.map((item) => (
                  <li>
                    <NavLink to={`/React-Space-Router/crew/${item.link}`}></NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="crewImg">
            <img src={data.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
