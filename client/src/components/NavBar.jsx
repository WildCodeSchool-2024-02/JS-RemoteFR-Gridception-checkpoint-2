import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <NavLink className="primary-btn btn" to="/">
          Home
        </NavLink>
        <NavLink className="primary-btn btn" to="/cupcakes">
          🧁 My cupcakes
        </NavLink>
        <NavLink className="secondary-btn btn" to="/instructions">
          Instructions
        </NavLink>
        <NavLink className="third-btn btn" to="/cupcakes/:id">Cupcakes Details</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
