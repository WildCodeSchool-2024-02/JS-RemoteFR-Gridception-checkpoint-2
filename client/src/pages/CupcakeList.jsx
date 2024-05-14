import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
  const cupcakes = useLoaderData();


  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      const data = await response.json();
      setAccessories(data);
    };
    fetchAccessories();
  }, []);

  const [filterChoice, setFilterChoice] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select id="cupcake-select"
            onChange={(e) => setFilterChoice(e.target.value)}>
            <option value="">All</option>
            {accessories.map((accessory) => (
              <option
                key={accessory.id}
                value={accessory.slug}>
                {accessory.slug}
              </option>

            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {
          cupcakes.filter((cupcake) => cupcake.accessory === filterChoice || !filterChoice)
            .map((cupcake) => (
              <li key={cupcake.id} className="cupcake-item">
                <Cupcake data={cupcake} />
              </li>
            ))
        }

      </ul>
    </>
  );
}

export default CupcakeList;
