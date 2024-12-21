import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles";
import yinYang from "../../public/yin-yang-landing.png";
import {
  FaBullhorn,
  FaChartLine,
  FaBuilding,
  FaSearch,
  FaCogs,
  FaBrush,
  FaFileInvoiceDollar,
  FaBrain,
  FaPalette,
} from "react-icons/fa";
import ListMenu from "./ListMenu"; 

const Hero = () => {
  const navigate = useNavigate();
  const [isRotated, setIsRotated] = useState(false);

  const handleRotation = () => {
    setIsRotated((prev) => !prev);
  };

  const handleNavigationCreate = () => {
    navigate("/create");
  };

  const handleNavigationSustain = () => {
    navigate("/sustain");
  };

  const listSustainItems = [
    { icon: FaChartLine, label: "Business Consulting and Strategy" },
    { icon: FaBuilding, label: "Company Registration" },
    { icon: FaSearch, label: "Market Search" },
    { icon: FaBullhorn, label: "Advertising and Media Present" },
    { icon: FaCogs, label: "Software Development and Business Automations" },
  ];

  const listCreateItems = [
    { icon: FaBrush, label: "Branding" },
    { icon: FaFileInvoiceDollar, label: "Accounting and Taxation" },
    { icon: FaBrain, label: "Brand Psychology" },
    { icon: FaPalette, label: "Graphic Design and UGC Content Creation" },
    { icon: FaCogs, label: "Software Development and Business Automations" },
  ];

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute top-1/4 left-[230px] transform -translate-y-1/2 z-10 '>
        <div className='bg-gray-800 bg-opacity-50 p-4 rounded-tl-[50px] rounded-br-[50px] shadow-lg border border-gray-700 hover:border-[#9153ff] hover:shadow-xl hover:scale-105 transition-transform duration-300'>
          {isRotated ? (
            <ListMenu
              items={listCreateItems}
              onClick={handleNavigationCreate}
            />
          ) : (
            <ListMenu
              items={listSustainItems}
              onClick={handleNavigationSustain}
            />
          )}
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
            We are <span className='text-[#9153ff]'>360Syng</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='text-[#9153ff]'>360Syng:</span> Where{" "}
            <br className='sm:block hidden' />
            Structures meets Momentum
          </p>
        </div>
      </div>

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
