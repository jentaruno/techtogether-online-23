"use client";
import Link from "next/link";
import { useState } from "react";
import {IoMdArrowDropdown} from 'react-icons/io';
import {BiSearchAlt} from 'react-icons/bi';
import {BsPersonCircle} from 'react-icons/bs';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [smallMenu, setSmallMenu] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setSmallMenu(false);
  };

  const toggleSmallMenu = () => {
    setSmallMenu(!smallMenu);
  }

  const closeSmallMenu = () => {
    setSmallMenu(false);
  };

  const toggleSearch = () => {
    
  }


  return (
    <div>
      <div className={`flex items-end fixed top-0 w-full z-10 ease-in duration-300 bg-primary-darkblue border-b-2 border-primary-darkblue`}>
        <div
          className={`${
            isOpen ? "flex flex-col h-screen" : "hidden"
          } sm:flex flex-col sm:flex-row sm:w-full font-medium text-gray-500 gap-4`}
        >
          <ul className={`flex flex-col md:flex-row ism:flex mx-auto text-lg 2xl:text-2xl text-gray-600`}>
            
            <li className="p-4 mr-8 transform hover:scale-125  transition duration-500">
              <BiSearchAlt size={24} />
            </li>
            <li className="p-4 mr-8  transform hover:scale-125  transition duration-500">
              <BsPersonCircle size={24}/>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
