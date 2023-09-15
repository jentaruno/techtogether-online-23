const express = require('express');
const router = express.Router();
const {Petitions} = require("../models/petition");
const {connectDatabase} = require("../utils");
const mongoose = require("mongoose");

// Takes petition ID
// Returns petition schema
router.delete('/:petitionId', async (req, res) => {
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