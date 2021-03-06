import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import "./styles/nav.scss";

const Nav = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="tel:+44 7404 403711">
            <CallIcon></CallIcon>
            +44 7404 403711
          </a>
          <a href="mailto:tianamatawe@yahoo.fr">
            <EmailIcon></EmailIcon>
            tianamatawe@yahoo.fr
          </a>
        </div>
        <ul>
          <NavLink exact activeStyle={{ color: "#D5753B" }} to="/">
            <img src={`${logo}`} alt="logo" className="logo" />
          </NavLink>
          <NavLink exact activeStyle={{ color: "#D5753B" }} to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#D5753B" }} to="/about">
            <li>About</li>
          </NavLink>

          <NavLink exact activeStyle={{ color: "#D5753B" }} to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink exact activeStyle={{ color: "#D5753B" }} to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
