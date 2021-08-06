import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="row">
      <NavLink to="/">
        <h3>
          Food<span style={{ color: "brown" }}>Bag</span>
        </h3>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>Login</li>
        <li style={{ color: "brown", border: "1px solid brown", padding: "10px", borderRadius: "3px"}}>Signup</li>
      </ul>
    </nav>
  );
};

export default Header;
