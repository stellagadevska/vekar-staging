import { useState, useEffect } from "react";
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
  FaUser,
} from "react-icons/fa";
import ListMenu from "./ListMenu";

const Hero = () => {
  const navigate = useNavigate();
  const [isRotated, setIsRotated] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Track if the image has been clicked
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const updateIsMobileOrTablet = () =>
      setIsMobileOrTablet(window.innerWidth <= 1750);
    updateIsMobileOrTablet();
    window.addEventListener("resize", updateIsMobileOrTablet);
    return () => window.removeEventListener("resize", updateIsMobileOrTablet);
  }, []);

  const handleRotation = () => {
    if (!isClicked) setIsClicked(true); // Stop zoom effect and show menus after the first click
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
    {
      icon: FaUser,
      label: "Contact Us",
      onClick: () => navigate("/contactus"), // Add navigation for Contact Us
    },
  ];

  const listCreateItems = [
    { icon: FaBrush, label: "Branding" },
    { icon: FaFileInvoiceDollar, label: "Accounting and Taxation" },
    { icon: FaBrain, label: "Brand Psychology" },
    { icon: FaPalette, label: "Graphic Design and UGC Content Creation" },
    { icon: FaCogs, label: "Software Development and Business Automations" },
    {
      icon: FaUser,
      label: "Contact Us",
      onClick: () => navigate("/contactus"), // Add navigation for Contact Us
    },
  ];

  // Framer Motion variants for zoom and rotation
  const yinYangVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity },
    },
    rotated: {
      rotate: 180,
      transition: { duration: 0.5 }, // Smooth rotation animation
    },
    static: { scale: 1 }, // Static state after the first click
  };

  return (
    <section
      className={`relative w-full h-screen mx-auto ${
        isMobileOrTablet ? "pb-40" : ""
      }`}
    >
      {/* Desktop Layout */}
      {!isMobileOrTablet && (
        <>
          {isClicked && (
            <div className='absolute top-1/4 left-[150px] transform -translate-y-1/2 z-10'>
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
          )}

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
            <motion.img
              src={yinYang}
              className='w-[500px] h-auto cursor-pointer'
              onClick={handleRotation}
              variants={yinYangVariants}
              initial='initial'
              animate={
                isClicked ? (isRotated ? "rotated" : "static") : "animate"
              } // Control animation state
            />
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
        </>
      )}

      {/* Mobile and Tablet Layout */}
      {isMobileOrTablet && (
        <div className='flex flex-col items-center gap-10 px-4 mt-10 relative'>
          <div className='text-center'>
            <h1 className={`${styles.heroHeadText}`}>
              We are <span className='text-[#9153ff]'>360Syng</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <span className='text-[#9153ff]'>360Syng:</span> Where <br />
              Structure meets Momentum
            </p>
          </div>

          <motion.img
            src={yinYang}
            className='w-[300px] h-auto cursor-pointer'
            onClick={handleRotation}
            variants={yinYangVariants}
            initial='initial'
            animate={
              isClicked ? (isRotated ? "rotated" : "static") : "animate"
            }
          />

          <div className='bg-gray-800 bg-opacity-50 p-4 rounded-tl-[50px] rounded-br-[50px] shadow-lg border border-gray-700 hover:border-[#9153ff] hover:shadow-xl hover:scale-105 transition-transform duration-300 mb-[50px]'>
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
      )}
    </section>
  );
};

export default Hero;
