import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const InfoCard = ({
  title,
  description,
  icon,
  moreInfo,
  isExpanded,
  onClick,
}) => {
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
        onClick={onClick}
      >
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

export default InfoCard;
