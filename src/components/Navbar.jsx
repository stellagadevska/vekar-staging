import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full py-5 fixed top-0 z-20 bg-[#FFFFFF]`}
    >
      <div className='w-full flex flex-col items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 mb-4'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-10 h-10 object-contain' />
          <p className='text-black text-[18px] font-bold cursor-pointer'>
            360synergy
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
