"use client";
import Link from "next/link";
import { useState } from "react";
import {IoMdArrowDropdown} from 'react-icons/io';
import {BiSearchAlt} from 'react-icons/bi';
import {BsPersonCircle} from 'react-icons/bs';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //for toggling the search input field
  const toggleSearch = () => {
        setIsOpen(!isOpen);
  }


  return (
    <div>
      <div className="flex items-end justify-end fixed top-0 w-full z-10 ease-in duration-300  border-b-2 bg-primary-darkblue">
          <ul className="flex items-end text-white ">  
          {isOpen && (
            <div>
              <input type="text" id="simple-search" class="mb-2 bg-gray-50 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Search branch name..." required/>
    
            </div>
          )}
            <li className="p-4 mr-8 ml-8 transform hover:scale-125  transition duration-500">
              <BiSearchAlt size={24} onClick ={toggleSearch} />
            </li>
            <li className="p-4 mr-8  transform hover:scale-125  transition duration-500">
              <Link href="/login" >
                <BsPersonCircle size={24}/>
              </Link>
            </li>  
          </ul>
          
        
      </div>
    </div>
  );
};

export default Navbar;
