import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="../assets/Logo_kasa.png" alt="Logo Kasa" />
      </Link>
    </div>
  );
};

export default Logo;
