import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ProcessStepsCard = ({ experience, isActive, position, isLast }) => {
  const navigate = useNavigate();

  const getPath = (companyName) => {
    if (companyName === "Create") return "/create";
    if (companyName === "Sustain") return "/sustain";
    return "/";
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        marginTop: isLast ? "100px" : "inherit",
        ...(isLast
          ? {
              margin: "100px auto 0 auto",
              width: "80%",
              textAlign: "center",
            }
          : {
              marginLeft: position === "right" ? "-20px" : "-60px",
              marginRight: position === "left" ? "-20px" : "-60px",
            }),
      }}
      contentArrowStyle={{
        ...(isLast
          ? { display: "none" }
          : { borderRight: "7px solid #232631" }),
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: isLast ? "none" : isActive ? "flex" : "none", // Hide for last item
      }}
      icon={
        isLast
          ? null // No icon for the last item
          : isActive && (
              <div
                className='flex justify-center items-center w-full h-full'
                onClick={() => navigate(getPath(experience.company_name))}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
              </div>
            )
      }
      position={isLast ? "0" : position}
    >
      <div>
        <h3
          className='text-white text-[24px] font-bold'
          onClick={() => navigate(getPath(experience.company_name))}
          style={{ cursor: "pointer" }}
        >
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ProcessStepsStackedCard = ({ experience }) => {
  const navigate = useNavigate();

  const getPath = (companyName) => {
    if (companyName === "Create") return "/create";
    if (companyName === "Sustain") return "/sustain";
    return "/";
  };

  return (
    <div className='bg-[#1d1836] text-white p-6 mb-6 rounded-lg shadow-lg'>
      <h3
        className='text-[20px] sm:text-[24px] font-bold cursor-pointer'
        onClick={() => navigate(getPath(experience.company_name))}
      >
        {experience.title}
      </h3>
      <p className='text-secondary text-[14px] sm:text-[16px] font-semibold mt-2'>
        {experience.company_name}
      </p>
      <p className='text-[14px] mt-4'>{experience.date}</p>

      <ul className='mt-5 list-disc pl-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProcessSteps = () => {
  const [isMobile, setIsMobile] = useState(false);
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
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 1750);
    updateIsMobile();

    window.addEventListener("resize", updateIsMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The Whole Process
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Step by Step
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {isMobile ? (
          // Render simple stacked layout for mobile/tablet
          experiences.map((experience, index) => (
            <ProcessStepsStackedCard
              key={`experience-mobile-${index}`}
              experience={experience}
            />
          ))
        ) : (
          // Render original timeline layout for desktop
          <VerticalTimeline lineColor='transparent'>
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
                  isLast={index === experiences.length - 1} // Pass if it's the last element
                />
              </div>
            ))}
          </VerticalTimeline>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(ProcessSteps, "process");
