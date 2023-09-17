"use client";

import React from "react";
import { getPetition } from "@data/petitions";
import Navbar from "@components/Navbar";
import Image from "next/image";

export default function Petition({petition}) {

	return (
			<div className="h-full flex justify-center items-center  bg-primary-lightblue ">
				<div className="flex flex-col  rounded-lg gap-20  bg-white max-w-2xl mt-60 rounded-lg mb-40">
					<div className="flex flex-col justify-left items-start px-24 pb-16 ">
						<h1 className="text-3xl font-bold text-primary-darkblue mb-10">
							{petition.title}
						</h1>
						<h3 className="text-2xl  text-primary-darkblue mb-10">
							{petition.company}, {petition.location}
						</h3>
						<p className="text-sm  mb-10">{petition.description}</p>
					</div>
				</div>
			</div>
    )
}