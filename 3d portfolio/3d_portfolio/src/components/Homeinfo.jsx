import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import "./Homeinfo.css"; // Assuming you have a CSS file for styling

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box card">
    <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"></img>
    </Link>
  </div>
);

const RenderContent = {
  1: (
    <div className="card">
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5">
        Hi, I am <span className="font-semibold">Harsh Bhatt</span>👋
        <br /> A Full-Stack Data Scientist
      </h1>
    </div>
  ),
  2: <InfoBox text="Know About Me" link="/about" btnText="Learn more" />,
  3: (
    <InfoBox
      text="Transforming data into intelligence, one algorithm at a time."
      link="/Projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Just a Ring Away from Transforming Your Ideas into Reality!"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return (
    <div className="cards-container">{RenderContent[currentStage] || null}</div>
  );
};

export default Homeinfo;
