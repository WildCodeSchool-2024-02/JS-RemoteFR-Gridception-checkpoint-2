import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const allCupcakes = useLoaderData();
  console.info(allCupcakes);

  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    async function fetchAccessories() {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        if (!response.ok) {
          throw new Error("Failed to fetch accessories");
        }
        const data = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    }

    fetchAccessories();
  }, []);

  const [selectedAccessory, setSelectedAccessory] = useState("");

  const filteredCupcakes = selectedAccessory
    ? allCupcakes.filter(
        (cupcake) => cupcake.accessory_id === selectedAccessory
      )
    : allCupcakes;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
