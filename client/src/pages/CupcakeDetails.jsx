import { useLocation, Link } from "react-router-dom";
import "./CupcakeDetails.css";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <section className="CupcakeDetailsComponent">
      <Cupcake data={data} />
      <Link className="return" to="/cupcakes">
        {" "}
        Retour à la liste
      </Link>
    </section>
  );
}

export default CupcakeDetails;
