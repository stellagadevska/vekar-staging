import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact, Navbar } from "../components";
import Footer from "../components/Footer";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Map from "../components/Map/Map";
import yinYang from "../../public/yin-yang-landing.png";

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
    <div className='bg-[#050b14] min-h-screen text-white'>
      <div className='bg-cover bg-no-repeat bg-center mb-[100px]'>
        <Navbar />
      </div>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 px-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* Additional content can go here */}
        </div>
        <div>
          <h2 className={`${styles.heroHeadText}`}>
            <span className='text-[#9153ff]'>Contact</span> Us
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Tell us your <span className='text-[#9153ff]'>idea</span> <br />
            And we will bring it to <span className='text-[#9153ff]'>life</span>
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center mb-10 px-5'>
        <img src={yinYang} className='w-1/2 md:w-1/4 h-auto' alt='Yin Yang' />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-[500px] mb-10 z-10 px-5'>
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

      <div className='relative pb-20 px-5'>
        <motion.div
          variants={textVariant()}
          className='text-center mt-20 pt-20'
        >
          <p className={`${styles.sectionHeadText} text-center`}>
            More about us and Where we are based
          </p>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[15px] md:text-[17px] max-w-3xl mx-auto leading-[25px] md:leading-[30px] text-center pb-20'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <Map location={"Your Location Here"} zoomLevel={17} />

        <div className='text-center mt-20 px-5'>
          <h2 className={`${styles.sectionTitleText} text-center`}>
            How You Contact Us
          </h2>
          <div className='flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 mt-10'>
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
    </div>
  );
};

export default ContactUs;
