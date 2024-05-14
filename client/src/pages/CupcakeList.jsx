import { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

function CupcakeList() {
  const cupcakes = useLoaderData();
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3310/api/accessories");
      const data = await response.json();
      setAccessories(data);
    };
    fetchData();
  }, []);

  const [filter, setFilter] = useState("");

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            onChange={(e) => setFilter(e.target.value)}
            id="cupcake-select"
          >
            <option value="">---</option>

            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.slug}
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
      </ul>
    </>
  );
}

export default CupcakeList;
