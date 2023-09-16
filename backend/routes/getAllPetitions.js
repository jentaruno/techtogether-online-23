const express = require('express');
const router = express.Router();
const {Petitions} = require("../models/petition");
const {connectDatabase} = require("../utils");
const mongoose = require("mongoose");

// Returns all petitions in DB
router.get('', async (req, res) => {
    await connectDatabase(res)
    try {
        const petitions = await Petitions.find();
        res.status(200).send(petitions);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;