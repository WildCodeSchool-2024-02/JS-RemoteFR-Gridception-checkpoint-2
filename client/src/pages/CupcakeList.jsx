import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";


function CupcakeList() {
  const allCupcakes = useLoaderData();
  console.info(allCupcakes);
  // Step 3: get all accessories

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
