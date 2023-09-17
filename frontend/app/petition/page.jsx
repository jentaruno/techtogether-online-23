import React from "react";
import Navbar from "@components/Navbar";
import Petition from "@components/Petition";
import {Box} from "@mui/material";

export default function Page() {

    return (
        <main className="w-full h-screen ">
            <Navbar/>
            <Box p={2} sx={{boxShadow: 1, width: '20rem'}}>
                <Petition
                    petition={{
                        title: "Title",
                        company: "Company",
                        location: "Location",
                        description: "Description ..."
                    }}
                />
            </Box>
        </main>
    );
}