"use client";
import Link from "next/link";
import {useState} from "react";
import {BsPersonCircle} from 'react-icons/bs';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    //for toggling the search input field
    const toggleSearch = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div
            className="flex items-end justify-end w-full z-10 ease-in duration-300  border-b-2 bg-primary-darkblue">
            <ul className="flex flex-row items-between text-white ">
                <Link href="/">
                    <p className="text-primary-lightblue text-lg font-bold py-3 ml-7">
                        WorkVoice
                    </p>
                </Link>
                <Link href={"/petition"}>Petitions</Link>
                <li className="p-4 mr-8  transform hover:scale-125  transition duration-500">
                    <Link href="/login">
                        <BsPersonCircle size={24}/>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
