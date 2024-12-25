import React from "react";

const ListMenu = ({ items, onClick }) => {
  return (
    <ul className='space-y-2 text-white text-base'> {/* Reduced vertical spacing */}
      {items.map((item, index) => (
        <li
          key={index}
          className='flex items-center gap-3 p-3 hover:bg-gray-700 hover:bg-opacity-60 rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
          onClick={item.onClick || onClick} // Prioritize item's onClick over default
        >
          <item.icon className='text-[#9153ff]' />
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ListMenu;