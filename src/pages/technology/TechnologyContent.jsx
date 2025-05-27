import { useParams } from "react-router-dom";
import "./TechnologyContent.css";
import dataTechnology from "../../data/dataTechnology.json";

export default function TechnologyContent() {
  const { destination } = useParams();
  // si destination existe cle = dest sinon moon (valeur par défaut)
  const cle = destination ? destination : "douglas";
  const data = dataTechnology[cle];
  return <></>;
}
