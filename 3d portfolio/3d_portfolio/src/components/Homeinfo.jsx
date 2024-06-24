import React from "react";
import RenderContext from "three/examples/jsm/renderers/common/RenderContext.js";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center"> {text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"></img>
    </Link>
  </div>
);

const RenderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Harsh Bhatt</span>👋
      <br />A wdinwfnwfn from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Transforming data into intelligence, one algorithm at a time."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Transforming data into intelligence, one algorithm at a time."
      link="/Projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Transforming data into intelligence, one algorithm at a time."
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return RenderContent[currentStage] || null;
};

export default Homeinfo;
