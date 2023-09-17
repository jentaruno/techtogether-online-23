const {connectDatabase, addPetitionToUser} = require("../utils");
const {Petitions} = require("../models/petition");
const mongoose = require("mongoose");
const express = require("express");
const {Users} = require("../models/user");
const router = express.Router()

// Takes petition schema and user ID
// Add petition to DB
// Add petition to user's created petitions
router.post('', async (req, res) => {
    await connectDatabase(res)
    try {
        const {email, petition} = req.body;
        const user = await Users.find({email: email});
        const userId = user._id;
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