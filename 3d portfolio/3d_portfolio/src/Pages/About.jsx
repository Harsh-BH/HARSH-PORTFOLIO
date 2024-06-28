import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles"; // Importing styles from your styles.js file
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "../components/Navbar";
import ComputersCanvas from "../components/Canvas/Computers";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import StarsCanvas from "../components/Canvas/Stars";
import CTA from "../components/CTA";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div>
        <StarsCanvas />

        <Hero />

        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Experienced tech professional with a diverse background in machine
          learning, artificial intelligence, frontend development, blockchain,
          and quantitative analysis. Proficient in designing and implementing AI
          algorithms to drive insightful data analysis and predictive modeling.
          Skilled in creating dynamic and user-friendly web interfaces using
          modern frontend frameworks. Adept at developing decentralized
          applications on blockchain platforms, ensuring security and
          transparency. Possesses strong quantitative skills to analyze and
          interpret complex financial data, delivering robust solutions for
          various tech-driven projects.
        </motion.p>

        <div>
          <Experience />
          <Tech />
          <br className="sm:block hidden" />
          <br className="sm:block hidden" />

          <br className="sm:block hidden" />

          <CTA />
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
