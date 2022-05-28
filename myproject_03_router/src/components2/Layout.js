import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink activeStyle={activeStyle} className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/counter"
              >
                Counter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/board"
              >
                board
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={activeStyle}
                className="nav-link"
                to="/nothing-here"
              >
                nothing-here
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
