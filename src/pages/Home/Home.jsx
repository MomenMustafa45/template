import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { HashLink } from "react-router-hash-link";
import "../../styles/home.css";

const Home = () => {
  const [linksOpened, setLinksOpened] = useState(false);
  const [imgNum, setImgNum] = useState("1");
  const bulletsNum = [1, 2, 3];

  const linksHandler = () => {
    setLinksOpened(!linksOpened);
  };

  useEffect(() => {
    const intervalImg = setInterval(() => {
      imgNum === 3 ? setImgNum(1) : setImgNum((prev) => +prev + 1);
    }, 4000);
    return () => {
      clearInterval(intervalImg);
    };
  }, [imgNum]);

  const changeImageHandler = (direction) => {
    switch (direction) {
      case "right":
        imgNum === 3 ? setImgNum(1) : setImgNum((prev) => +prev + 1);
        break;
      case "left":
        imgNum === 1 ? setImgNum(3) : setImgNum((prev) => +prev - 1);
        break;
      default:
    }
  };

  return (
    <header className={`home-parent home-parent-bg${imgNum}`} id="home">
      <Navbar queryLinksOpened={linksHandler} />
      <div
        className="right-arrow"
        onClick={() => changeImageHandler("right")}
      ></div>
      <div
        className="left-arrow"
        onClick={() => changeImageHandler("left")}
      ></div>
      <div className="bullets">
        {bulletsNum.map((e) => {
          return (
            <span className={e === +imgNum ? "active" : ""} key={e}></span>
          );
        })}
      </div>
      <div className={`query-list ${linksOpened ? "" : "query-list-close"}`}>
        <ul>
          <li>
            <HashLink href="">Home</HashLink>
          </li>
          <li>
            <HashLink href="">Services</HashLink>
          </li>
          <li>
            <HashLink href="">Portfolio</HashLink>
          </li>
          <li>
            <HashLink href="">About</HashLink>
          </li>
          <li>
            <HashLink href="">Pricing</HashLink>
          </li>
          <li>
            <HashLink href="">Contact</HashLink>
          </li>
        </ul>
      </div>
      <div className="landing-container">
        <div className="landing-text">
          <h2>
            Hello World! <br /> We Are Kasper We Make Art.
          </h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem.
            Mauris blandit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Home;
