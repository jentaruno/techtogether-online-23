const express = require('express');
const router = express.Router();
const {Petitions} = require("../models/petition");
const {connectDatabase} = require("../utils");
const mongoose = require("mongoose");

// Takes petition ID
// Deletes petition
router.delete('/:petitionId', async (req, res) => {
    // TODO: delete from creator's created list, as well as signer's signed list
    await connectDatabase(res)
    try {
        const deletedPetition = await Petitions.findByIdAndDelete(req.params.petitionId);

        if (!deletedPetition) {
            res.status(400).send("Petition not found");
        } else {
            res.status(200).send(`Petition ${deletedPetition._id} deleted`);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;