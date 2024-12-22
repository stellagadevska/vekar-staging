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
        className={`bg-gray-800 p-6 rounded-lg shadow-lg flex flex-row transform transition-transform duration-300 ${
          isExpanded
            ? "scale-105 shadow-2xl"
            : "hover:scale-105 hover:shadow-xl"
        } cursor-pointer`}
        onClick={onClick}
      >
        {/* Left Section: Title and description */}
        <div
          className={`flex flex-col space-y-2 w-1/2 ${
            isExpanded ? "justify-center items-center" : ""
          }`}
        >
          <h3
            className={`text-white text-xl font-semibold ${
              isExpanded ? "text-center" : ""
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-gray-400 ${
              isExpanded ? "text-center" : ""
            }`}
          >
            {description}
          </p>
        </div>

        {/* Right Section: Additional Info */}
        <div className="flex flex-col items-start space-y-4 w-1/2">
          {isExpanded && (
            <>
              {/* First Info Item */}
              <div className="text-gray-300 mt-4 bg-gray-700 p-4 rounded-lg flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FaInfoCircle className="text-pink-500" />
                  <p>{moreInfo}</p>
                </div>
              </div>
              {/* Second Info Item */}
              <div className="text-gray-300 mt-4 bg-gray-700 p-4 rounded-lg flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FaInfoCircle className="text-pink-500" />
                  <p>{moreInfo}</p>
                </div>
              </div>
              {/* Third Info Item */}
              <div className="text-gray-300 mt-4 bg-gray-700 p-4 rounded-lg flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FaInfoCircle className="text-pink-500" />
                  <p>{moreInfo}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
