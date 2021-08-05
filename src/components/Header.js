import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="row">
      <NavLink to="/">
        <h2>FoodBag</h2>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
};

export default Header;
