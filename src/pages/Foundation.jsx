import React from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc/SectionWrapper";

const Foundation = () => {
  return (
    <>
      <div className='relative z-0 bg-[#050b14]'>
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
          <p className={`${styles.sectionHeadText} text-center`}>Foundation</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px] text-center pb-20'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </div>
      <Footer />
    </>
  );
};

export default Foundation;
