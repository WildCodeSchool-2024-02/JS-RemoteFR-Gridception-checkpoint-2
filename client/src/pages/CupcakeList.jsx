import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Cupcake from "../components/Cupcake";


function CupcakeList() {
  const allCupcakes = useLoaderData();
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    axios
    .get(`http://localhost:3310/api/accessories`)
    .then ((results) => {
      setAccessories(results.data);
    })
    .catch((err) => console.error(err));
  })
  console.info(accessories)
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select">
            <option value="">---</option>
            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {allCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
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
