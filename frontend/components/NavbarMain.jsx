"use client";
import Link from "next/link";
import {useState} from "react";
import {BsPersonCircle} from "@node_modules/react-icons/bs";


const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    //for toggling the search input field
    const toggleSearch = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className="w-full z-10 ease-in duration-300 bg-primary-darkblue">
            <div className={"flex flex-row p-4 justify-between items-center"}>
                <div className={"flex flex-row items-center space-x-4"}>
                    <Link href="/">
                        <p className="text-primary-lightblue text-lg font-bold">
                            WorkVoice
                        </p>
                    </Link>
                    <Link href={"/petition"} className={"text-primary-lightblue"}>Petitions</Link>
                </div>
                <Link href="/login">
                    <BsPersonCircle fill={"white"} size={24}/>
                </Link>
            </div>
        </div>
    );
};

export default NavbarMain;
