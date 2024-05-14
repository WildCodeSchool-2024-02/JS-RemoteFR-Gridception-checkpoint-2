import PropTypes from "prop-types";

import "./Cupcake.css";
import { Link } from "react-router-dom";

function Cupcake({ name, cream1, cream2, cream3, accessory }) {
  return (
    <div className="cupcake-container">
      <div className="cupcake">
        <div className={`accessory ${accessory}`} />
        <div className="cream">
          <div
            className="cream-1"
            style={{
              backgroundColor: cream1,
            }}
          />
          <div
            className="cream-2"
            style={{
              backgroundColor: cream2,
            }}
          />
          <div
            className="cream-3"
            style={{
              backgroundColor: cream3,
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

      <div className="cupcake-name">{name}</div>
      <Link to="/cupcakes/:id">More Details</Link>
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
  cream1: PropTypes.string.isRequired,
  cream2: PropTypes.string.isRequired,
  cream3: PropTypes.string.isRequired,
  accessory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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