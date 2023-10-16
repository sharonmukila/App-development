import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/homepage.jpg";
import NavbarLand from "./NavbarLand";
// import { FiArrowRight } from "react-icons/fi

const Home = () => {
  return (
    <div className="home-container">
      <NavbarLand />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          CRIME PREVENTION IN SOCIETY.
          </h1>
          <p className="primary-text">
          Providing law enforcement with the resources they need to investigate crimes,
          make arrests, and secure convictions.
          </p>
          {/* <button className="secondary-button">
             <FiArrowRight />{" "}
          </button> */}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
