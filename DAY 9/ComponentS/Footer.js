import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const twitterUrl = 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'; // Replace with your Twitter URL
  const linkedinUrl = 'https://www.linkedin.com/feed/'; // Replace with your LinkedIn URL
  const youtubeUrl = 'https://www.youtube.com'; // Replace with your YouTube URL
  const facebookUrl = 'https://www.facebook.com';
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <SiLinkedin />
      </a>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <BsYoutube />
      </a>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
          <span>Help</span>      
          <span>Testimonials</span>
          <span>Work</span>
        </div>

        <div className="footer-section-columns">
       

        <Link to="/Faq">
        <button className="primary-button7">FAQ</button>
         </Link>


       
        </div>
        <div className="footer-section-columns">
            <Link to="/Terms">

        <button className="primary-button7">Terms And Condition</button>
            </Link>
        </div>

        <div className="privacy">
<Link to ="/privacy">

        <button className="primary-button7">Privacy And Policy</button>
</Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;