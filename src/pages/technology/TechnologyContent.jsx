import { NavLink, useParams } from "react-router-dom";
import "./TechnologyContent.css";


export default function TechnologyContent(props) {
  const { technology } = useParams();
  const data = props.data.find((item) => item.link.toLowerCase() === technology.toLowerCase());
  return (
    <>
      <section className="sectionTechnology">
        <div className="technology">
          <nav>
            <ul>
              {props.data.map((item, index) => (
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
