import React from "react";
import Navbar from "@components/Navbar";
import Petition from "@components/Petition";
import {Box, Grid} from "@mui/material";

export default function Page() {

    const petitionsArray = [
        {
            title: "Title",
            company: "Company",
            location: "Location",
            description: "Description ..."
        },
        {
            title: "Title2",
            company: "Company22",
            location: "Location2",
            description: "Description esufhouwhf ..."
        },
        {
            title: "Title",
            company: "Company",
            location: "Location",
            description: "Description ..."
        },
        {
            title: "Title2",
            company: "Company22",
            location: "Location2",
            description: "Description esufhouwhf ..."
        },
        {
            title: "Title",
            company: "Company",
            location: "Location",
            description: "Description ..."
        },
        {
            title: "Title2",
            company: "Company22",
            location: "Location2",
            description: "Description esufhouwhf ..."
        },
    ];

    return (
        <div className="flex flex-col w-full items-center">
            <Navbar/>
            <div className={"w-2/3 mt-12"}>
                <Grid container spacing={2}>
                    {petitionsArray.map(e =>
                        <Grid item xs={4}>
                            <Box p={2} sx={{boxShadow: 1}}>
                                <Petition
                                    petition={{
                                        title: e.title,
                                        company: e.company,
                                        location: e.location,
                                        description: e.description
                                    }}
                                />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
}