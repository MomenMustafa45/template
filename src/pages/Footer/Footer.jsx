import "../../styles/footer.css";
import image from "../../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-parent">
      <div className="footer-img">
        <img src={image} alt="Hello" />
      </div>
      <div className="footer-social">
        <p>We are social</p>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/momen.kara"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="xl" />
          </a>
          <a
            href="https://www.instagram.com/momenmustafa65/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/momen-mustafa-917280234/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://github.com/MomenMustafa45"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </div>
      </div>
      <div className="copy-right">
        <span>
          <FontAwesomeIcon icon={faCopyright} size="xl" />
        </span>{" "}
        2021 <span>Kasper</span> All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
