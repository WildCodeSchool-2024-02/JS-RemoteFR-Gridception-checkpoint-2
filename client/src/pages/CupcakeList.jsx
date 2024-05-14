import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const someCupcakes = [];
someCupcakes.push(
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  }
);

/* you can use someCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  const allCupcakes = useLoaderData();
  console.info(useLoaderData());

  // Step 3: get all accessories

  const [dataAccessories, setDataAccessories] = useState();

  fetch("http://localhost:3310/api/accessories")
    .then((response) => response.json())
    .then((data) => setDataAccessories(data));

  console.info(dataAccessories);

  // Step 5: create filter state

  const [filterChoice, setFilterChoice] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            id="cupcake-select"
            onChange={(event) => setFilterChoice(event.target.value)}
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            <option value="1">Cherry</option>
            <option value="2">Donut</option>
            <option value="3">Chocolate</option>
            <option value="4">Wild</option>
            <option value="5">Christmas Candy</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {/* Step 5: filter cupcakes before repeating */}
        {allCupcakes
          .filter(
            (cupcake) => cupcake.accessory_id === filterChoice || !filterChoice
          )
          .map((cupcake) => (
            <div key={cupcake.id}>
              <Link to={`/cupcakes/${cupcake.id}`} state={{data: cupcake}}>
              <Cupcake
                cream1={cupcake.color1}
                cream2={cupcake.color2}
                cream3={cupcake.color3}
                accessory={cupcake.accessory}
                name={cupcake.name}
              />
              </Link>
            </div>
          ))}

        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
