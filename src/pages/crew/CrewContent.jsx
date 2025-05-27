import { useParams } from "react-router-dom";
import "./CrewContent.css";
import dataCrew from "../../data/dataCrew.json";

export default function CrewContent() {
  const { destination } = useParams();
  // si destination existe cle = dest sinon moon (valeur par défaut)
  const cle = destination ? destination : "vehicle";
  const data = dataCrew[cle];
  return <></>;
}
