import {Box, Grid} from "@node_modules/@mui/material";
import Petition from "@components/Petition";
import React, {useEffect, useState} from "react";
import {getAllPetitions} from "@data/petitions";


export default function PetitionGrid({petitionsArray}) {
    const [petitions, setPetitions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setPetitions(await getAllPetitions());
        }

        fetchData();
    }, []);

    return <Grid container spacing={2}>
        {petitions.map(e => <Grid item xs={4}>
            <Box p={3} sx={{boxShadow: 1, height: "30rem", overflow: "hidden"}}>
                <Petition
                    petition={{
                        link: e._id,
                        title: e.title,
                        company: e.company,
                        location: e.location,
                        description: e.description,
                        signersCount: e.signers.length
                    }}
                />
            </Box>
        </Grid>)}
    </Grid>;
}