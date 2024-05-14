import { useLocation } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import "./CupcakeDetails.css";

function CupcakeDetails() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <section className="CupcakeDetailsComponent">
      <h1 className="detailsTitle">Cupcake Details</h1>
      <div className="CupcakeDetails">
        <Cupcake data={data} />
        <p className="detailPara">
          Hello there, i'm master{" "}
          <span className="detailSpan">{data.accessory} </span>from{" "}
          <span className="detailSpan">{data.name}</span>
        </p>
      </div>
    </section>
  );
}

export default CupcakeDetails;
