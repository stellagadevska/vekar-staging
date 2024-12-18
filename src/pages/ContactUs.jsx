import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact, Navbar } from "../components";
import Footer from "../components/Footer";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Map from "../components/Map/Map";

import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  const [modalState, setModalState] = useState({
    sustain: false,
    create: false,
  });

  const toggleModal = (modalType, state) => {
    setModalState((prev) => ({ ...prev, [modalType]: state }));
  };

  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-[200px]'>
        <Navbar />
      </div>

      <div className='flex justify-center space-x-[500px] mb-10 z-10'>
        {["sustain", "create"].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#9153ff] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#7a3ee8] transition-colors duration-300'
            onClick={() => toggleModal(type, true)}
          >
            Contact {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <div style={{ zIndex: 10000 }}>
        {modalState.sustain && (
          <div className='modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-full z-[9999]'>
            <Contact
              title='sustain'
              onClose={() => toggleModal("sustain", false)}
            />
          </div>
        )}
        {modalState.create && (
          <div className='modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[9999]'>
            <Contact
              title='create'
              onClose={() => toggleModal("create", false)}
            />
          </div>
        )}
      </div>

      <div className='relative bg-[#050b14] pb-20'>
        <motion.div
          variants={textVariant()}
          className='text-center mt-20 pt-20'
        >
          <h2 className={`${styles.sectionSubText} text-center`}>
            More about us and Where we are based
          </h2>
          <p className={`${styles.sectionHeadText} text-center`}>Create</p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px] text-center pb-20'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <Map location={"Your Location Here"} zoomLevel={17} />

        <div className='text-center mt-20'>
          <h2 className={`${styles.sectionTitleText} text-center`}>
            How You Contact Us
          </h2>
          <div className='flex justify-center space-x-10 mt-10'>
            <a
              href='tel:+1234567890'
              className='flex flex-row items-center text-white hover:text-[#9153ff] transition-colors duration-300'
            >
              <FaPhoneAlt className='text-[#9153ff] mr-5' />
              <h1 className={`${styles.sectionMediumText}`}> Phone Number</h1>
            </a>
            <a
              href='mailto:contact@create.com'
              className='flex flex-row items-center text-white hover:text-[#9153ff] transition-colors duration-300'
            >
              <FaEnvelope className='text-[#9153ff] mr-5' />
              <h1 className={`${styles.sectionMediumText}`}>Email</h1>
            </a>
            <a
              href='https://www.instagram.com/create'
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row items-center text-white hover:text-[#9153ff] transition-colors duration-300 '
            >
              <FaInstagram className='text-[#9153ff] mr-5' />
              <h1 className={`${styles.sectionMediumText}`}>Instagram</h1>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
