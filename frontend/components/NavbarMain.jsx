"use client";
import Link from "next/link";
import { useState } from "react";
import {IoMdArrowDropdown} from 'react-icons/io';
import {BiSearchAlt} from 'react-icons/bi';
import {BsPersonCircle} from 'react-icons/bs';


const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  //for toggling the search input field
  const toggleSearch = () => {
        setIsOpen(!isOpen);
  }


  return (
    <div>
      <div className="flex  fixed top-0 w-full z-10 ease-in duration-300  border-b-2 bg-primary-darkblue">
          <Link href="./">
            <p className="text-primary-lightblue text-lg font-bold py-3 ml-7">
             WorkVoice
            </p>
          </Link>
          
          
        
      </div>
    </div>
  );
};

export default NavbarMain;
