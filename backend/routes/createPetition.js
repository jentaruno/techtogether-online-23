const {connectDatabase} = require("../utils");
const {Petitions} = require("../models/petition");
const {Users} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

// Create a petition
// Takes petition schema and user ID
// Add petition to DB
// Add petition to user's created petitions
// Request body example:
/*
    {
        user: "650494d18c60798c602ffbba",
        petition: {
                title: "title",
                company: "company",
                location: "loc",
                poster: "650494d18c60798c602ffbba",
            }
    }
 */
router.post('', async (req, res) => {
    await connectDatabase(res)
    try {
        const { userId, petition } = req.body;
        let newPetition = await Petitions.create(petition);
        let petitionId = newPetition._id;
        await addPetitionToUser(userId, petitionId);
        res.status(200).send("Created Petition " + petition.title);
    } catch (error) {
        console.error("error" + error);
        res.status(400).send("Error creating petition");

    } finally {
        mongoose.connection.close()
    }
});

async function addPetitionToUser(userId, petitionId) {
    try {
        const user = await Users.findById(userId);
        if (!user) {
            console.error('User not found');
            return;
        }

        const petition = await Petitions.findById(petitionId);
        if (!petition) {
            console.error('Petition not found');
            return;
        }

        user.petitions.created.push(petition);

        await user.save();

        console.error(`Added petition to user's created petitions: User ID ${userId}, Petition ID ${petitionId}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = router