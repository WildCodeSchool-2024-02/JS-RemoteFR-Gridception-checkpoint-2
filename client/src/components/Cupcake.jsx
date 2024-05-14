import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

import "./Cupcake.css";

function Cupcake() {
  console.info(useLoaderData());

  const cupcakes = useLoaderData();
  return (
    <div>
      {cupcakes.map((cupcake) => (
        <div className="cupcake-container" key={cupcake.id}>
          <div className="cupcake">
            <div className={`accessory ${cupcake.accessory}`} />
            <div className="cream">
              <div
                className="cream-1"
                style={{
                  backgroundColor: cupcake.color1,
                }}
              />
              <div
                className="cream-2"
                style={{
                  backgroundColor: cupcake.color2,
                }}
              />
              <div
                className="cream-3"
                style={{
                  backgroundColor: cupcake.color3,
                }}
              />
            </div>
            <div className="bottom">
              <div className="bottom-in">
                <div className="face">
                  <div className="eyes">
                    <div className="left-eye" />
                    <div className="right-eye" />
                  </div>
                  <div className="mouth" />
                </div>
              </div>
            </div>
          </div>

          <div className="cupcake-name">{cupcake.name}</div>
        </div>
      ))}
    </div>
  );
}

Cupcake.propTypes = {
  data: PropTypes.shape({
    accessory: PropTypes.string.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    color3: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Cupcake.defaultProps = {
  data: {
    accessory: "donut",
    color1: "var(--default-cream-color)",
    color2: "var(--default-cream-color)",
    color3: "var(--default-cream-color)",
    name: "",
  },
};

export default Cupcake;
