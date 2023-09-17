"use client";

import React from "react";
import { getPetition } from "@data/petitions";
import Navbar from "@components/Navbar";
import Petition from "@components/Petition";
import Image from "next/image";

const page = (petition) => {

	return (
		<main className="w-full h-screen ">
			<Navbar />
			<Petition
        petition={{title: "Title", company: "Company", location: "Location", description: "Description ..."}}
        />
		</main>
	);
};

export default page;
