import {Box, Grid} from "@node_modules/@mui/material";
import Petition from "@components/Petition";
import React from "react";


export default function PetitionGrid({petitionsArray}) {

    return <Grid container spacing={2}>
        {petitionsArray.map(e => <Grid item xs={4}>
            <Box p={2} sx={{boxShadow: 1}}>
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