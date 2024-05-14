import { useLoaderData } from "react-router-dom";

function CupcakeDetails() {
  const cupcake = useLoaderData();
  return (
    <>
      <h1>Hello</h1>
      <p>Your Cupcake is : </p>
      <div>
        <p>{cupcake.name}</p>
        <p>{cupcake.accessory}</p>
        <p>{cupcake.color1}</p>
        <p> {cupcake.color2}</p>
        <p>{cupcake.color3}</p>
      </div>
    </>
  );
}

export default CupcakeDetails;
