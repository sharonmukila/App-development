import React from "react";
// import ProfilePic from "../Assets/john-doe-image.png";
// import { AiFillStar } from "react-icons/ai";
import img from"../Assets/video.mp4";

const PublicAwareness = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Public Awareness</p>
      
        <p className="primary-text">
        Promoting public awareness about crime is a multifaceted endeavor aimed at fostering safer communities and empowering individuals with the knowledge and tools to protect themselves and their neighbors. To achieve this, a comprehensive strategy encompassing ,campaigns, community workshops, and neighborhood watch programs is vital. 
        </p>
      </div>
      <div className="public-section-bottom">
    
        <video className="video1" src={img} autoPlay loop muted/>

      
      </div>
    </div>
  );
};

export default PublicAwareness;
