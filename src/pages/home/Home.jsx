import Nav from "../../components/nav/Nav";
import "./Home.css";

export default function Home() {
  return (
    <>
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
          <div className="homeButton">
            <button>EXPLORE</button>
          </div>
        </div>
      </section>
    </>
  );
}
