import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logementId, logementTitle, logementCover }) => {
  return (
    <div className="card">
      <NavLink to={`/housing/${logementId}`}>
        <img
          className="card-cover"
          src={logementCover}
          alt={`aperçu de ${logementTitle}`}
        />
        <div className="card-title">{logementTitle}</div>
      </NavLink>
    </div>
  );
};

export default Card;
