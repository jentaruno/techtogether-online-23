"use client"

import Navbar from "@components/Navbar";
import Petition from "@components/Petition";
import React, {useEffect, useState} from "react";
import {getPetition} from "@data/petitions";
import {usePathname} from "@node_modules/next/dist/client/components/navigation";

export default function Page() {
    const url = usePathname();
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 1]; // Get the last part of the array
    console.log(id);
    const [petition, setPetition] = useState();

    useEffect(() => {
        async function fetchData() {
            setPetition(await getPetition(id));
        }

        fetchData();
    })

    return (
        <div className="flex flex-col w-full items-center">
            <Navbar/>
            <div className={"w-2/3 mt-12"}>
                {petition
                    ? <div>
                        <Petition
                            petition={{
                                title: petition.title,
                                company: petition.company,
                                location: petition.location,
                                description: petition.description
                            }}
                        />
                        <p>{petition.signers.length + " people have signed"}</p>
                        <button
                            className="bg-primary-darkblue text-white transform hover:scale-125 rounded-lg p-2 mt-2">
                            Sign this petition
                        </button>
                    </div>
                    : <p>Loading...</p>}
            </div>
        </div>
    )
}