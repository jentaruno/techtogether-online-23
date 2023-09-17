"use client";

import React from 'react';
import { getPetition } from '@data/petitions';
import Navbar from '@components/Navbar';
import Image from 'next/image';

const page = () => {

  const {petition} = getPetition();

  const title = "Petition title";
  const company = "Company name";
  const location = "Company Location";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


  return (
    <main className="w-full h-screen ">
                <Navbar/>
                <div className='h-full flex justify-center items-center  bg-primary-lightblue '>

                    <div className="flex flex-col  rounded-lg gap-20  bg-white max-w-2xl mt-60 rounded-lg mb-40">
                    
                    <Image src="/assets/dino.jpg" width="1000" height="100" responsive />

                    <div className="flex flex-col justify-left items-start px-24 pb-16 ">
                      <p className='text-3xl font-bold text-primary-darkblue mb-10'>{title}</p>
                      <p className='text-2xl  text-primary-darkblue mb-10'>{company}, {location}</p>
                      <p className='text-sm  mb-10'>{description}</p>


                    </div>


                    
                    

                    </div>
                </div>
            </main>
  )
}

export default page