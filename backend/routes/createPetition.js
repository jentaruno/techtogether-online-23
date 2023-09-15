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
    let response = [];
    try {
        const { userId, petition } = req.body;
        response.push(req.body);
        response.push(petition);
        let newPetition = await Petitions.create(petition);
        response.push(newPetition);
        let petitionId = newPetition._id;
        await addPetitionToUser(userId, petitionId, response);
        res.status(200).send("Created Petition " + petition.title);
    } catch (error) {
        response.push("error" + error);
        res.status(400).send(response);

    } finally {
        mongoose.connection.close()
    }
});

async function addPetitionToUser(userId, petitionId, response) {
    try {
        const user = await Users.findById(userId);
        if (!user) {
            response.push('User not found');
            return;
        }

        const petition = await Petitions.findById(petitionId);
        if (!petition) {
            response.push('Petition not found');
            return;
        }

        user.petitions.created.push(petition);

        await user.save();

        response.push(`Added petition to user's created petitions: User ID ${userId}, Petition ID ${petitionId}`);
    } catch (error) {
        response.push('Error:', error);
    }
}

module.exports = router