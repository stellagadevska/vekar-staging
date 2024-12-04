import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
// import { YinYangCanvas } from "./canvas";

import yinYang from "../../public/yin-yang-landing.png";

import {
  FaBullhorn,
  FaChartLine,
  FaBuilding,
  FaSearch,
  FaCogs,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  const [isRotated, setIsRotated] = useState(false);

  const handleRotation = () => {
    setIsRotated((prev) => !prev);
  };

  const handleNavigation = () => {
    navigate("/flare");
  };

  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className='absolute top-1/4 left-[230px] transform -translate-y-1/2 z-10 '>
        <div className='bg-gray-800 bg-opacity-50 p-4 rounded-tl-[50px] rounded-br-[50px] shadow-lg border border-gray-700 hover:border-[#9153ff] hover:shadow-xl hover:scale-105 transition-transform duration-300'>
          <ul className='space-y-4 text-white text-base'>
            <li
              className='flex items-center gap-3 p-3 hover:bg-gray-700 hover:bg-opacity-60 rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
              onClick={handleNavigation}
            >
              <FaChartLine className='text-[#9153ff]' />
              Business Consulting and Strategy
            </li>
            <li
              className='flex items-center gap-3 p-3 hover:bg-black hover:bg-opacity-60 rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
              onClick={handleNavigation}
            >
              <FaBuilding className='text-[#9153ff]' />
              Company Registration
            </li>
            <li
              className='flex items-center gap-3 p-3 hover:bg-gray-700 hover:bg-opacity-60 rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
              onClick={handleNavigation}
            >
              <FaSearch className='text-[#9153ff]' />
              Market Search
            </li>
            <li
              className='flex items-center gap-3 p-3 hover:bg-[#2b2b2b] rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
              onClick={handleNavigation}
            >
              <FaBullhorn className='text-[#9153ff]' />
              Advertising and Media Present
            </li>
            <li
              className='flex items-center gap-3 p-3 hover:bg-[#2b2b2b] rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
              onClick={handleNavigation}
            >
              <FaCogs className='text-[#9153ff]' />
              Software Development and Business Automations
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`absolute inset-0 top-[50px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row-reverse items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 rounded-full bg-[#9153ff]' />
          <div className='w-1 sm:h-64 h-32 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            We are <span className='text-[#9153ff]'>Vekar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='text-[#9153ff]'>360Syng:</span> Where{" "}
            <br className='sm:block hidden' />
            Structures meets Momentum
          </p>
        </div>
      </div>

      {/* <YinYangCanvas /> */}

      <div className='absolute inset-0 flex justify-center items-center mt-[170px]'>
      <div
          className={`w-[500px] transition duration-300 hover:scale-105 ${
            isRotated ? "rotate-180" : ""
          }`}
          onClick={handleRotation}
        >
          <img src={yinYang} className='w-full h-auto cursor-pointer' />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#process'>
          <div className='w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
