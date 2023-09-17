"use client"

import Petition from "@components/Petition";
import React, {useEffect, useState} from "react";
import {getPetition, signPetition} from "@data/petitions";
import {usePathname, useRouter} from "@node_modules/next/dist/client/components/navigation";
import {useUser} from "@node_modules/@auth0/nextjs-auth0/dist/client";
import {CircularProgress} from "@node_modules/@mui/material";

export default function Page() {
    const {user, error, isLoading} = useUser();
    const router = useRouter();

    const url = usePathname();
    const parts = url.split("/");
    const id = parts[parts.length - 1];
    const [petition, setPetition] = useState();

    useEffect(() => {
        async function fetchData() {
            setPetition(await getPetition(id));
        }

        fetchData();
    }, [])

    const handleSignPetition = async () => {
        try {
            await signPetition(id, user.email);
            router.refresh();
        } catch (e) {
            router.refresh();
        }

    }

    return (
        <div className="flex flex-col w-full items-center">

            <div className={"w-2/3 mt-12"}>
                {petition
                    ? <div>
                        <Petition
                            petition={{
                                title: petition.title,
                                company: petition.company,
                                location: petition.location,
                                description: petition.description,
                                signersCount: petition.signers.length
                            }}
                        />
                        <button
                            className="bg-primary-darkblue text-white transform hover:scale-125 rounded-lg p-2 mt-2"
                            onClick={handleSignPetition}
                        >
                            Sign this petition
                        </button>
                    </div>
                    : <CircularProgress/>}
            </div>
        </div>
    )
}