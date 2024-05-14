import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
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
  console.info(useLoaderData());
  const cupcakes = useLoaderData();

  // Step 3: get all accessories

  const [dataAccessories, setDataAccessories] = useState();

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setDataAccessories(data));
  }, []);

  useEffect(() => {
    console.info(dataAccessories);
  }, [dataAccessories]);

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
            onChange={(e) => setFilterChoice(e.target.value)}
          >
            <option value="">---</option>
            <option value="cherry">Cherry</option>
            <option value="donut">Donut</option>
            <option value="chocolate">Chocolate</option>
            <option value="wild">Wild</option>
            <option value="christmas-candy">Christmas Candy</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {cupcakes.map((cupcake) => (
          <div key={cupcake.id}>
            <Cupcake data={cupcake} />
          </div>
        ))}

        {/* Step 5: filter cupcakes before repeating */}
        { cupcakes.filter((cupcake) => cupcake.accessory_id === filterChoice || !filterChoice )
         .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
