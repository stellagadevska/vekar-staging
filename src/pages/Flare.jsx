import React, { useState } from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FaInfoCircle } from "react-icons/fa";

const flareItems = [
  {
    title: "Branding",
    description: "Providing expert advice to help businesses grow and succeed.",
    icon: "path/to/consulting-icon.svg",
    moreInfo:
      "Our consulting services are tailored to each client's specific needs, helping identify opportunities for growth and create strategies that work.",
  },
  {
    title: "Accounting and Taxation",
    description:
      "Assisting with the legal processes of registering a new company.",
    icon: "path/to/registration-icon.svg",
    moreInfo:
      "We handle all the paperwork and legal requirements, ensuring your company is set up smoothly and in compliance with regulations.",
  },
  {
    title: "Brand Psychology",
    description:
      "Conducting thorough market analysis to inform business decisions.",
    icon: "path/to/market-research-icon.svg",
    moreInfo:
      "Our market research services provide valuable insights into customer behavior, industry trends, and competitor analysis.",
  },
  {
    title: "Graphic Design and UGC Content Creation",
    description:
      "Enhancing brand visibility through strategic advertising and media engagement.",
    icon: "path/to/advertising-icon.svg",
    moreInfo:
      "We develop comprehensive advertising strategies that effectively increase your brand's presence across different media channels.",
  },
  {
    title: "Software Development and Business Automation",
    description:
      "Developing custom software solutions to streamline business operations.",
    icon: "path/to/software-development-icon.svg",
    moreInfo:
      "Our software solutions are designed to automate and optimize business processes, reducing costs and improving efficiency.",
  },
  {
    title: "Financial Planning and Analysis",
    description:
      "Providing in-depth financial analysis to help plan and forecast your business's financial future.",
    icon: "path/to/financial-planning-icon.svg",
    moreInfo:
      "Our financial planning services help you understand your current financial position and plan for growth, ensuring sustainable success.",
  },
  {
    title: "Industry Compliance and Certifications",
    description:
      "Ensuring that your business meets all industry standards and regulatory requirements.",
    icon: "path/to/compliance-icon.svg",
    moreInfo:
      "We assist in navigating the complex regulatory environment, helping your business achieve necessary certifications and maintain compliance.",
  },
  {
    title: "Risk Management and Insurance",
    description:
      "Identifying, assessing, and mitigating risks to protect your business.",
    icon: "path/to/risk-management-icon.svg",
    moreInfo:
      "We provide risk management strategies and insurance solutions to safeguard your business against potential threats.",
  },
  {
    title: "Legal Advisory Services",
    description:
      "Offering legal advice to help your business operate within the law.",
    icon: "path/to/legal-advisory-icon.svg",
    moreInfo:
      "Our legal advisory services ensure that your business complies with all relevant laws and regulations, mitigating legal risks.",
  },
];

const FlareCard = ({ title, description, icon, moreInfo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative p-[2px] rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 ${
        isExpanded ? "ring-4 ring-pink-500" : ""
      }`}
    >
      <div
        className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-start space-y-4 transform transition-transform duration-300 ${
          isExpanded
            ? "scale-105 shadow-2xl"
            : "hover:scale-105 hover:shadow-xl"
        } cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* <img src={icon} alt={title} className="w-16 h-16" /> */}
        <div>
          <h3 className='text-white text-xl font-semibold'>{title}</h3>
          <p className='text-gray-400'>{description}</p>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='text-gray-300 mt-4 bg-gray-700 p-4 rounded-lg flex items-center space-x-2'
            >
              <FaInfoCircle className='text-pink-500' />
              <p>{moreInfo}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Flare = () => {
  return (
    <>
      <div className='relative z-0 bg-[#050b14] pb-20'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>

        <motion.div
          variants={textVariant()}
          className='text-center mt-20 pt-20'
        >
          <h2 className={`${styles.sectionSubText} text-center`}>
            What we do in
          </h2>
          <p className={`${styles.sectionHeadText} text-center`}>Flare</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px] text-center pb-20'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col space-y-8'>
            {flareItems.map((item, index) => (
              <FlareCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                moreInfo={item.moreInfo}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Flare;
