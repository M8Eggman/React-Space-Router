import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../../components/nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="sectionHome">
        <div className="home">
          <div className="homeText">
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because
              we’ll give you a truly out of this world experience!
            </p>
          </div>
          <Link>
            <div className="homeButton">
              <p>EXPLORE</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
