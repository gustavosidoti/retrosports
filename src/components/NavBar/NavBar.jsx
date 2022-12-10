import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  let activeStyle = {
    color: "#FF5733",
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          RetroSports
        </NavLink>

        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/category/Argentina"
                aria-current="page"
              >
                Argentina
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/category/Argentina_Clubes"
                aria-current="page"
              >
                Argentina clubes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/category/Inglaterra"
                aria-current="page"
              >
                Inglaterra
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cartWidgetList">
            <CartWidget />
          </NavLink> 
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
