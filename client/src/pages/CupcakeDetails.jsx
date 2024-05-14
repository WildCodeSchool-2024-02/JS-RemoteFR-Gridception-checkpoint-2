import { useLocation } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const location = useLocation();
  const { data } = location.state;

  return (
    <section className="CupcakeDetailsComponent">
      <Cupcake data={data} />
    </section>
  );
}

export default CupcakeDetails;