import "./DestinationContent.css";
import { NavLink, useParams } from "react-router";
import dataDestination from "../../data/dataDestination.json";

export default function DestinationContent() {
  const { destination } = useParams();
  // si destination existe cle = dest sinon moon (valeur par défaut)
  const cle = destination ? destination : "moon";
  const data = dataDestination[cle];
  return (
    <>
      <section className="sectionDestination">
        <div className="destination">
          <div className="destinationImg">
            <img src={data.image} alt="" />
          </div>
          <div className="destinationContent">
            <nav>
              <ul>
                <li>
                  <NavLink>MOON</NavLink>
                </li>
                <li>
                  <NavLink>MARS</NavLink>
                </li>
                <li>
                  <NavLink>EUROPA</NavLink>
                </li>
                <li>
                  <NavLink>TITAN</NavLink>
                </li>
              </ul>
            </nav>
            <div className="destinationContentDescription">
              <h2>{data.name.toUpperCase()}</h2>
              <p>{data.description}</p>
            </div>
            <div className="destinationContentInfo">
              <div className="destinationContentInfoDistance">
                <p>AVG. DISTANCE</p>
                <p>{data.distance}</p>
              </div>
              <div className="destinationContentInfoTime">
                <p>EST. TRAVEL TIME</p>
                <p>{data.travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
