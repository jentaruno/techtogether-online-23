"use client";
import Link from "next/link";
import {useState} from "react";


const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    //for toggling the search input field
    const toggleSearch = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <div className="flex w-full z-10 ease-in duration-300  border-b-2 bg-primary-darkblue">
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
