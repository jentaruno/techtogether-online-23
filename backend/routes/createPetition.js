const {connectDatabase, addPetitionToUser} = require("../utils");
const {Petitions} = require("../models/petition");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

// Takes petition schema and user ID
// Add petition to DB
// Add petition to user's created petitions
router.post('', async (req, res) => {
    await connectDatabase(res)
    try {
        const { userId, petition } = req.body;
        let newPetition = await Petitions.create(petition);
        let petitionId = newPetition._id;
        await addPetitionToUser(userId, petitionId, "created");
        res.status(200).send("Created Petition " + petition.title);
    } catch (error) {
        console.error("error" + error);
        res.status(400).send("Error creating petition");

    } finally {
        mongoose.connection.close()
    }
});

module.exports = router