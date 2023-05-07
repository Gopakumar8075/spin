import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
      <h1 className="w-3/12">
        <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold">
              Spin It
            </text>
            {/* <image href="logo.png" x="10" y="10" width="30" height="30" /> */}
          </svg>
        </a>
      </h1>

      <nav
        className={`nav font-semibold text-lg ${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to="/game" className="hover:text-gray-300">
              Game
            </Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end lg:hidden">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="h-8 w-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 4H19.5V6H4.5V4ZM4.5 10H19.5V12H4.5V10ZM19.5 18H4.5V16H19.5V18Z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z"
              />
            )}
          </svg>
        </button>
      </div>    
            </header>
            );
            };
            
            export default NavBar;
