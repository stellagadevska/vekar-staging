import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const categories = [
    { name: "Company Registration", link: "/sustain" },
    { name: "Market Search", link: "/create" },
    { name: "Graphic Design", link: "/create" },
    { name: "Brand Psychology", link: "/create" },
  ];

  const usefulLinks = [
    { name: "Contact Form", link: "/contactus" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const contactInfo = [
    { icon: "ri-map-pin-line", text: "48, Sitnyakovo Blv., Sofia, Bulgaria" },
    { icon: "ri-phone-line", text: "+359878346***" },
    { icon: "ri-mail-line", text: "admin@360syng.com" },
  ];

  return (
    <footer className='bg-gray-900 text-white py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-8 mb-8'>
          {/* About Section */}
          <div>
            <h1 className='text-2xl font-bold'>360Syng</h1>
            <p className='mt-4 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className='text-lg font-semibold'>Top Categories</h4>
            <ul className='mt-4 space-y-2'>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.link}
                    className='text-gray-400 hover:text-white'
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className='text-lg font-semibold'>Useful Links</h4>
            <ul className='mt-4 space-y-2'>
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className='text-gray-400 hover:text-white'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className='text-lg font-semibold'>Contact</h4>
            <ul className='mt-4 space-y-2'>
              {contactInfo.map((item, index) => (
                <li key={index} className='flex items-center space-x-2'>
                  <i className={item.icon}></i>
                  <span className='text-gray-400'>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='text-center text-gray-500 text-sm mt-4'>
          &copy; {year} 360Syng. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
