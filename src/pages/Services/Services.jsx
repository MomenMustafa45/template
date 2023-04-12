import "../../styles/services.css";
import HeaderPageText from "../../UI/header-page-text/HeaderPageText";
import ServicesCard from "../../UI/services-card/ServicesCard";
import {
  faDisplay,
  faGear,
  faPenRuler,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <div className="services-parent" id="services">
      <HeaderPageText
        header="Services"
        text="Curabitur arcu erat,
             accumsan id imperdiet et,
             porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
      />

      <div className="cards-container">
        <ServicesCard icon={<FontAwesomeIcon icon={faDisplay} size="2xl" />} />
        <ServicesCard icon={<FontAwesomeIcon icon={faGear} size="2xl" />} />
      </div>
      <div className="cards-container">
        <ServicesCard icon={<FontAwesomeIcon icon={faPenRuler} size="2xl" />} />
        <ServicesCard icon={<FontAwesomeIcon icon={faCamera} size="2xl" />} />
      </div>
    </div>
  );
};

export default Services;
