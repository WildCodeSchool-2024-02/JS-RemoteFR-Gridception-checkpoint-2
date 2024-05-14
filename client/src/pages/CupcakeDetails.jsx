import { useParams, useLoaderData } from "react-router-dom";

function CupcakeDetails() {
  const data = useLoaderData();

  const { id } = useParams();
  const ChosenProject = data.filter(
    (cupcake) => cupcake.id === parseInt(id, 10)
  );

  return (
    <section className="cupcakes-pagecomponent">
      <h1>Cupcake choisi {id} </h1>
      <h2> Pays : {ChosenProject[0].name}</h2>
      <p>Couleur 1 : {ChosenProject[0].color1}</p>
      <p>Couleur 2 : {ChosenProject[0].color2}</p>
      <p>Couleur 3 : {ChosenProject[0].color3}</p>
      <p>Accessoire : {ChosenProject[0].accessory}</p>
      <p> Numéro accessoire : {ChosenProject[0].accessory_id}</p>
    </section>
  );
}

export default CupcakeDetails;
