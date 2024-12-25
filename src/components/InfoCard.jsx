import React from "react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

// Reusable component for displaying additional information items
const InfoItem = ({ text }) => (
  <div className='text-gray-300 bg-gray-700 p-4 rounded-lg flex items-center space-x-2'>
    <FaInfoCircle className='text-pink-500' />
    <p>{text}</p>
  </div>
);

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
        className={`bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${
          isExpanded
            ? "scale-105 shadow-2xl"
            : "hover:scale-105 hover:shadow-xl"
        } cursor-pointer flex flex-col lg:flex-row`}
        onClick={onClick}
      >
        {/* Title and Description */}
        <div className='flex flex-col space-y-2 lg:w-1/2'>
          <h3 className='text-white text-xl font-semibold'>{title}</h3>
          <p className='text-gray-400'>{description}</p>
        </div>

        {/* Additional Information */}
        {isExpanded && moreInfo && (
          <div className='flex flex-col space-y-4 mt-4 lg:mt-0 lg:w-1/2'>
            <InfoItem text={moreInfo} />
            <InfoItem text={moreInfo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
