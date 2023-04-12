import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/design.css";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Design = () => {
  return (
    <div className="design-parent" id="design">
      <div className="designs-container">
        <h3>Our Designs Comes With...</h3>
        <ul className="designs-list-container">
          <li>
            <p>
              <FontAwesomeIcon icon={faDisplay} bounce size="2xl" />
            </p>
            <p>Responsive Design</p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faDisplay} bounce size="2xl" />
            </p>
            <p>Modern and Clean Design</p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faDisplay} bounce size="2xl" />
            </p>
            <p>Clean Code</p>
          </li>
          <li>
            <p>
              <FontAwesomeIcon icon={faDisplay} bounce size="2xl" />
            </p>
            <p>Browser Friendly</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Design;
