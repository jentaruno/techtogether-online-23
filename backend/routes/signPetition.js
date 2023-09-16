const express = require('express');
const router = express.Router();
const {Petitions} = require("../models/petition");
const {connectDatabase, addPetitionToUser} = require("../utils");
const mongoose = require("mongoose");

// Takes petition ID, user ID
// Add to user's signed petitions
// Add this user's to the petition's signers
router.patch('/:petitionId', async (req, res) => {
    await connectDatabase(res)
    try {
        const petition = await Petitions.findById(req.params.petitionId);
        const { userId } = req.body;
        // If the petition with the given ID doesn't exist, return an error message
        if (!petition) {
            res.status(400).send("Petition not found");
        }
        // Check if the user ID is already in the signers array, or if they were the creator of the petition
        else if (petition.signers.includes(userId) || petition.poster.equals(userId)) {
            res.status(400).send("User already signed this petition");
        }
        // Add the user ID to the signers array
        else {
            petition.signers.push(userId);
            await petition.save();
            await addPetitionToUser(userId, req.params.petitionId, "signed");
            res.status(200).send("User added to signers of this petition");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;