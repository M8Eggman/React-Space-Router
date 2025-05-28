import { NavLink, useParams } from "react-router-dom";
import "./CrewContent.css";

export default function CrewContent(props) {
  const { name } = useParams();
  const data = props.data.find((item) => item.link.toLowerCase() === name.toLowerCase());
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
                {props.data.map((item) => (
                  <li key={item.link}>
                    <NavLink to={`/crew/${item.link}`}></NavLink>
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
