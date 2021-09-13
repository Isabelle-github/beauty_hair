import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="tel:555-666-7777">
            <CallIcon></CallIcon>
            (435)346-1098
          </a>
          <a href="mailto:abc@example.com">
            <EmailIcon></EmailIcon>
            My@Email.com
          </a>
        </div>
        <ul>
          <NavLink exact activeStyle={{ color: "#f39a3e" }} to="/">
            <img src={`${logo}`} alt="logo" className="logo" />
          </NavLink>
          <NavLink exact activeStyle={{ color: "#f39a3e" }} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#f39a3e" }} to="/about">
            <li>About</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#f39a3e" }} to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#f39a3e" }} to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
