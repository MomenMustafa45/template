import React from "react";
import "../../styles/about.css";
import HeaderPageText from "../../UI/header-page-text/HeaderPageText";
import image from "../../assests/about.png";

const About = () => {
  return (
    <div classame="about-parent" id="about">
      <HeaderPageText
        header="About"
        text="Curabitur arcu erat,
       accumsan id imperdiet et,
       porttitor at sem. Mauris blandit aliquet elit,
       eget tincidunt. "
      />
      <img src={image} alt="" />
    </div>
  );
};

export default About;
