import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo_kasa.png";

const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "A propos" },
];

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoImage} alt="Logo Kasa" className="logo" />
      </Link>
      <nav>
        <ul>
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <li>{link.label}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
