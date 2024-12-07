import React from "react";

const ListMenu = ({ items, onClick }) => {
  return (
    <ul className='space-y-4 text-white text-base'>
      {items.map((item, index) => (
        <li
          key={index}
          className='flex items-center gap-3 p-3 hover:bg-gray-700 hover:bg-opacity-60 rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:text-[#9153ff]'
          onClick={onClick}
        >
          <item.icon className='text-[#9153ff]' />
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default ListMenu;
