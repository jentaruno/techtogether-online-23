const express = require('express');
const router = express.Router();
const {Petitions} = require("../models/petition");
const {connectDatabase} = require("../utils");
const mongoose = require("mongoose");

// Takes petition ID
// Returns petition schema
router.get('/:petitionId', async (req, res) => {
    await connectDatabase(res)
    try {
        const petition = await Petitions.findById(req.params.petitionId);
        res.status(200).send(petition);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;