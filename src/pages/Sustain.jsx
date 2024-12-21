import React, { useState } from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


import { sustainItems } from "../assets/data/items";
import InfoCard from "../components/InfoCard";

const Sustain = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
          <p className={`${styles.sectionHeadText} text-center`}>Sustain</p>
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
            {sustainItems.map((item, index) => (
              <InfoCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                moreInfo={item.moreInfo}
                isExpanded={expandedIndex === index}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sustain;
