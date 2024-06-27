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
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div>
          <Experience />
          <Tech />
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
