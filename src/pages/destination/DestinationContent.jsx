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
        <h2>
          <span>01</span> PICK YOUR DESTINATION
        </h2>
        <div className="destination">
          <div className="destinationImg">
            <img src={data.image} alt="" />
          </div>
          <div className="destinationContent">
            <nav>
              <ul>
                <li>
                  <NavLink to="/React-Space-Router/destination/" end>
                    MOON
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/React-Space-Router/destination/mars">MARS</NavLink>
                </li>
                <li>
                  <NavLink to="/React-Space-Router/destination/europa">EUROPA</NavLink>
                </li>
                <li>
                  <NavLink to="/React-Space-Router/destination/titan">TITAN</NavLink>
                </li>
              </ul>
            </nav>
            <div className="destinationContentDescription">
              <h3>{data.name.toUpperCase()}</h3>
              <p>{data.description}</p>
            </div>
            <div className="destinationContentInfo">
              <div>
                <p>AVG. DISTANCE</p>
                <p>{data.distance.toUpperCase()}</p>
              </div>
              <div>
                <p>EST. TRAVEL TIME</p>
                <p>{data.travelTime.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
