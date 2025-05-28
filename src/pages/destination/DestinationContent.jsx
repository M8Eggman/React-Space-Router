import "./DestinationContent.css";
import { NavLink, useParams } from "react-router";
import dataDestination from "../../data/dataDestination.json";

export default function DestinationContent() {
  const { destination } = useParams();
  const data = dataDestination.find((item) => item.link.toLowerCase() === destination.toLowerCase());

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
                {dataDestination.map((item) => (
                  <li key={item.link}>
                    <NavLink to={`/destination/${item.link}`}>{item.name.toUpperCase()}</NavLink>
                  </li>
                ))}
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
