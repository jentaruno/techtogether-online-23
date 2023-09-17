import {Box} from "@mui/material";
import React from "react";

export default function Petition({petition}) {
    return (
        <Box>
            <a href={petition.link && "/petition/" + petition.link}>
                <h1 className="text-3xl font-bold text-primary-darkblue">
                    {petition.title}
                </h1>
            </a>
            <h3 className="text-2xl  text-primary-darkblue">
                {petition.company}
            </h3>
            <p className={'mb-10'}>{petition.location}</p>
            <p className="text-sm  mb-10">
                {petition.description}
            </p>
            <p>{petition.signersCount + " people have signed"}</p>

        </Box>
    )
}