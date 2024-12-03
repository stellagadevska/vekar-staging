import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProcessStepsCard = ({ experience, isActive, position }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        marginLeft: position === "right" ? "-20px" : "-60px", // Adjust this value as needed to move elements away from the line
        marginRight: position === "left" ? "-20px" : "-60px", // Adjust this value as needed to move elements away from the line
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: isActive ? "flex" : "none", // Conditionally show the icon
      }}
      icon={
        isActive && ( // Conditionally render the icon
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        )
      }
      position={position}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ProcessSteps = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const elementRefs = useRef([]);

  const handleScroll = () => {
    elementRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The Whole Process
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Step by Step</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="transparent">
          {experiences.map((experience, index) => (
            <div
              key={`experience-wrapper-${index}`}
              ref={(el) => (elementRefs.current[index] = el)}
            >
              <ProcessStepsCard
                key={`experience-${index}`}
                experience={experience}
                isActive={index === activeIndex} // Pass active state
                position={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </VerticalTimeline>       
        <div className="mt-20 flex justify-center items-center ">
        <ProcessStepsCard
                experience={experiences[0]}
                className
              />
          </div> 
             
      </div>
    </>
  );
};

export default SectionWrapper(ProcessSteps, "process");
