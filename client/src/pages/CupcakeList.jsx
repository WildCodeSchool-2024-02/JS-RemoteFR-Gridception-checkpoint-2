import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
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
  const data = useLoaderData();

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3310/api/accessories").then((res) => {
      const dataEnvoyer = res.data;
      setAccessories(dataEnvoyer);
    });
  }, []);
  console.info(accessories);

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
            id="cupcake-select"
          >
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessorie) => (
              <option key={accessories.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {data
          .filter(
            (cupcake) => cupcake.accessory_id === filterChoice || !filterChoice
          )
          .map((cupcake) => (
            <Link key={cupcake.id} to={`/cupcakes/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
