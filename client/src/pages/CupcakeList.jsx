import { useLoaderData, Link } from "react-router-dom";
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
  const cupcakes = useLoaderData();

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      const data = await response.json();
      setAccessories(data);
    };
    fetchData();
  }, []);

  // Step 5: create filter state
  const [filter, setFilter] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            onChange={(e) => setFilter(e.target.value)}
            id="cupcake-select"
          >
            <option value="">All</option>
            {/* Step 4: add an option for each accessory */}
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {cupcakes
          .filter((cupcake) => cupcake.accessory === filter || !filter)
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Link to={`/cupcakes/${cupcake.id}`} state={{ data: cupcake }}>
                <Cupcake data={cupcake} />
              </Link>
            </li>
          ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
