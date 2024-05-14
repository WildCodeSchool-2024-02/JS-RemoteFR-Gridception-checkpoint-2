import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
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
  const cupcakes = useLoaderData();
  console.info(cupcakes);

  // Step 3: get all accessories
  const [allAccessory, setAllAccessory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((res) => setAllAccessory(res.data));
  }, []);

  console.info(allAccessory);
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
            onChange={(e) => setFilterChoice(e.target.value)}
          >
            <option value="">All</option>
            {/* Step 4: add an option for each accessory */}
            <option value="cherry">Cherry</option>
            <option value="donut">Donut</option>
            <option value="chocolate">Chocolate</option>
            <option value="wcs">WCS</option>
            <option value="christmas-candy">Christmas Candy</option>
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {cupcakes
          .filter(
            (cupcake) => cupcake.accessory === filterChoice || !filterChoice
          )
          .map((cupcake) => (
            <div key={cupcake.id}>
              <Cupcake
                cream1={cupcake.color1}
                cream2={cupcake.color2}
                cream3={cupcake.color3}
                accessory={cupcake.accessory}
                name={cupcake.name}
              />
            </div>
          ))}

        {/* Step 5: filter cupcakes before repeating */}
        <li className="cupcake-item">
          <Cupcake />
        </li>
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
