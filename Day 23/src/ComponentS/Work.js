import React from "react";
import Incident from "../Assets/incident.jpg";
import evidence from "../Assets/evidence.jpg";
import Location from "../Assets/location.jpg";

import investigation from "../Assets/invest.jpg"
import Reviews from"../Assets/reviews.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Incident,
      title: "Reporting The Incident",
      text: "Upon receiving an incident report, our team carefully analyzes the details provided. We prioritize incidents based on severity, potential harm, and urgency.",
    },
    {
      image: evidence,
      title: "Evidence Uploads",
      text: "Trained investigators initiate the evidence collection process. This includes gathering physical evidence, conducting interviews, and leveraging technology to aid in the investigation.",
    },
    {
      image: Location,
      title: "Location Tracking",
      text: "When a user initiates an incident report, the app should allow them to include the location of the incident. The app can use GPS and mapping technologies to enable users to pinpoint the incident's exact location on a map.",
    },
    {
      image: investigation,
      title: "Investigation",
      text: "Throughout the investigation, we keep the reporting party informed of the progress. Timely updates are provided, maintaining transparency and building trust in the investigative process.",
    },
    {
      image:Reviews,
      title: "Case Review And Resolution",
      text: "Once all evidence is collected and analyzed, our team conducts a comprehensive review of the case. This may involve consulting with legal advisors to ensure due process is followed.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
   This App Works For public Who Wants to Solve There Promblem Through Some Saffest Website .They go Through The Phase of IncidentReporting,
   Evidence Uploads,LocationTracking,Investigation And  Case Reviews & Resolution..
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
