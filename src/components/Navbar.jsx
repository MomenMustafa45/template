import "../styles/navbar.css";
import logo from "../assests/logo.png";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ queryLinksOpened }) => {
  return (
    <div className="nav-parent">
      <div className="logo-container">
        <img src={logo} alt="Hi" />
      </div>
      <div className="links-parent">
        <div className="icon-list" onClick={queryLinksOpened}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="links-container">
          <li>
            <HashLink to="#home" smooth>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="#services" smooth>
              Services
            </HashLink>
          </li>
          <li>
            <HashLink to="#portfolio" smooth>
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink to="#about" smooth>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#pricing" smooth>
              Pricing
            </HashLink>
          </li>
          <li>
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </li>
        </ul>
        <div className="search-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
