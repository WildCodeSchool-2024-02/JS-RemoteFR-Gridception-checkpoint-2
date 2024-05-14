import { useParams, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const ChosenCupcake = data.filter(
    (cupcake) => cupcake.id === parseInt(id, 10)
  );
  return (
    <section className="CupcakeDetailsComponent">
      <h1>Cupcake Details {id} </h1>
      <h2>Name:{ChosenCupcake[0].name}</h2>
      <p>{ChosenCupcake[0].id}</p>
      <p>{ChosenCupcake[0].accessory_id}</p>
      <p>{ChosenCupcake[0].accessory}</p>
      <p>{ChosenCupcake[0].color1}</p>
      <p>{ChosenCupcake[0].color2}</p>
      <p>{ChosenCupcake[0].color3}</p>
      <Cupcake key={ChosenCupcake.id} data={ChosenCupcake} />
    </section>
  );
}

export default CupcakeDetails;
