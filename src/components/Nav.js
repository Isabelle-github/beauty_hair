import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <a>(435)346-1098</a>
          <a>My@Email.com</a>
        </div>
        <ul>
          <NavLink exact activeStyle={{ color: "#7854f7" }} to="/about">
            <li>About</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#7854f7" }} to="/">
            <li>Home</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
