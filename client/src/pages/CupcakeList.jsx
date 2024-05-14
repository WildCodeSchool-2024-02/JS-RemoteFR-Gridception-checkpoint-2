/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  // Step 1: get all cupcakes
  const cupcake = useLoaderData();
  console.info(cupcake);

  const [datas, setDatas] = useState({});

  // Step 3: get all accessories
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/accessories")
      .then((results) => {
        setDatas(results.data);
      })
      .catch((err) => console.info(err));
  }, []);
  console.info(datas);

  const [filterChoise, setFilterChoise] = useState("");
  // Step 5: create filter state

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select
            onChange={(e) => setFilterChoise(e.target.value)}
            id="cupcake-select"
          >
            <option value="">---</option>
            {datas.map((accessorie) => (
              <option key={accessorie.id} value={accessorie.id}>
                {accessorie.name}
              </option>
            ))}

            {/* Step 4: add an option for each accessory */}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {cupcake
          .filter(
            (cupcake) => cupcake.accessory_id === filterChoise || !filterChoise
          )
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}
        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
