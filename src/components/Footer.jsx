import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h1 className='text-2xl font-bold'>Vekar</h1>
            <p className='mt-4 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div>
            <h4 className='text-lg font-semibold'>Top Categories</h4>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link to='#' className='text-gray-400 hover:text-white'>
                  Branding
                </Link>
              </li>
              <li>
                <Link to='#' className='text-gray-400 hover:text-white'>
                  Market Search
                </Link>
              </li>
              <li>
                <Link to='#' className='text-gray-400 hover:text-white'>
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link to='#' className='text-gray-400 hover:text-white'>
                  Brand Psychology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold'>Useful Links</h4>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link
                  to='/contactus'
                  className='text-gray-400 hover:text-white'
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link to='#' className='text-gray-400 hover:text-white'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold'>Contact</h4>
            <ul className='mt-4 space-y-2'>
              <li className='flex items-center space-x-2'>
                <i className='ri-map-pin-line'></i>
                <span className='text-gray-400'>
                  48, Sitnyakovo Blv., Sofia, Bulgaria
                </span>
              </li>
              <li className='flex items-center space-x-2'>
                <i className='ri-phone-line'></i>
                <span className='text-gray-400'>+359878346***</span>
              </li>
              <li className='flex items-center space-x-2'>
                <i className='ri-mail-line'></i>
                <span className='text-gray-400'>admin@vekar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center text-gray-500 text-sm mt-4'>
          &copy; {year} Vekar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
