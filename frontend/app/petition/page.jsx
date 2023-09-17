"use client"
import React, {useEffect, useState} from "react";
import PetitionGrid from "@components/PetitionGrid";
import {getAllPetitions} from "@data/petitions";
import {CircularProgress} from "@mui/material";

export default function Page() {
    const [petitions, setPetitions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setPetitions(await getAllPetitions());
        }

        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full items-center">

            <div className={"w-2/3 mt-12"}>
                {Array.isArray(petitions) && petitions.length > 0
                    ? <PetitionGrid/>
                    : <CircularProgress/>}
            </div>
        </div>
    );
}