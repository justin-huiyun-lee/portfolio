import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-2">
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href = "#home" className="text-white hover:text-gray-300 ease-in-out duration-300 text-4xl font-bold">JL</a>
            </div>
            <div className="flex text-md">
              <a
                href="#about"
                className="text-white hover:text-gray-300 ease-in-out duration-300 px-3 py-2 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-white hover:text-gray-200 ease-in-out duration-300 px-3 py-2 rounded-md font-medium"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-white hover:text-gray-200 ease-in-out duration-300 px-3 py-2 rounded-md font-medium"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-white hover:text-gray-200 ease-in-out duration-300 px-3 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
