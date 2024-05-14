import { Link, useLoaderData } from "react-router-dom";
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

  const [FilterAccessories, setFilterAccessories] = useState ("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            onChange={(e) => setFilterAccessories(e.target.value)}
            id="cupcake-select"
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.slug}
              </option>
            )
            )}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {allCupcakes
        .filter((cupcake) => cupcake.accessory === FilterAccessories || !FilterAccessories)
        .map((cupcake) => (
        <li key={cupcake.id} className="cupcake-item">
        <Link to={`/cupcakes/${cupcake.id}`} state={{data: cupcake}}>
              <Cupcake data={cupcake} />
            </Link>
        </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
