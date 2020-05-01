import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" exact={true} activeStyle={{ fontWeight: "bold" }}>
        Home
      </NavLink>
      <NavLink to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover Movies
      </NavLink>
      <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
        About Us
      </NavLink>
    </div>
  );
}
