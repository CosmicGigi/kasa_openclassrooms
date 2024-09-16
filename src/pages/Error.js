import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error">
        404
        <div className="error-content">
          Oups ! La page que vous demandez n'existe pas.
        </div>
      </div>
      <NavLink to="/" className="nav-error">
        Retourner sur la page d'accueil
      </NavLink>
      <Footer />
    </div>
  );
};

export default Error;
