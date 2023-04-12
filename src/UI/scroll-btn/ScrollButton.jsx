import "./scroll-button.css";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollButton = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setShowScrollBtn(true) : setShowScrollBtn(false);
    });
  }, [showScrollBtn]);

  return (
    <>
      {showScrollBtn && (
        <HashLink className="scroll-btn-container" to="#home">
          <FontAwesomeIcon icon={faArrowUp} />
        </HashLink>
      )}
    </>
  );
};

export default ScrollButton;
