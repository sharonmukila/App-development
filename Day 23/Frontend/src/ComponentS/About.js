import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NavbarLand from "./NavbarLand";

const About = () => {
  return (
   
  
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
    REPORT IT: Empowering Communities for Safer Neighborhoods     </h1>
        <p className="primary-text">
        Welcome to Crime Hut ,where we are committed to
        empowering individuals 
        and communities to enhance safety, prevent crime, and contribute to a more 
        secure society.Our app is designed to assist users in reporting and managing incidents, sharing crucial information, and collaborating with law enforcement to create safer environments for everyone.Our mission is to provide a user-friendly, confidential, and secure platform for reporting and addressing crimes. We aim to bridge the gap between the public and law enforcement, fostering a sense of responsibility and collaboration in creating safer neighborhoods.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>

  );
};

export default About;
