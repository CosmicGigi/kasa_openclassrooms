import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink to="/" className="footer__container--logo">
          <img src={Logo} alt="Logo Kasa" />
        </NavLink>
        <p className="footer__container--title">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
