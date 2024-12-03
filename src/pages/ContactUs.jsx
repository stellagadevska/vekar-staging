import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact, Navbar } from "../components";
import Footer from "../components/Footer";
import { styles } from "../styles";
import { YinYangCanvas } from "../components/canvas";
import { fadeIn, textVariant } from "../utils/motion";
import Map from "../components/Map/Map";

const ContactUs = () => {
  const [isFoundationModalOpen, setFoundationModalOpen] = useState(false);
  const [isFlareModalOpen, setFlareModalOpen] = useState(false);

  const openFoundationModal = () => setFoundationModalOpen(true);
  const closeFoundationModal = () => setFoundationModalOpen(false);

  const openFlareModal = () => setFlareModalOpen(true);
  const closeFlareModal = () => setFlareModalOpen(false);

  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-[200px]'>
        <Navbar />
      </div>

      <div className='flex justify-center space-x-[500px] mb-10 z-10'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-[#9153ff] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#7a3ee8] transition-colors duration-300'
          onClick={openFoundationModal}
        >
          Contact Foundation
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-[#9153ff] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#7a3ee8] transition-colors duration-300'
          onClick={openFlareModal}
        >
          Contact Flare
        </motion.button>
      </div>

      <div style={{ zIndex: 10000 }}>
        {isFoundationModalOpen && (
          <div className='modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center w-full z-[9999]'>
            <Contact title='foundation' onClose={closeFoundationModal} />
          </div>
        )}

        {isFlareModalOpen && (
          <div className='modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[9999]'>
            <Contact title='flare' onClose={closeFlareModal} />
          </div>
        )}
      </div>

      {/* More About Us Section */}
      <div className='relative bg-[#050b14] pb-20 '>
        <motion.div
          variants={textVariant()}
          className='text-center mt-20 pt-20'
        >
          <h2 className={`${styles.sectionSubText} text-center`}>
            More about us and Where we are based
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
          aliquip ex ea commodo consequat.
        </motion.p>
        <Map location={"Your Location Here"} zoomLevel={17} />
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
