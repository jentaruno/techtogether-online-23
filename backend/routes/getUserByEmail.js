const {connectDatabase} = require("../utils");
const {Users} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

// Input userId
// Returns user schema
router.get('/:email', async (req, res) => {
    await connectDatabase(res);
    try {
        const user = await Users.find({email: req.params.email})
        res.status(200).send(user);
    } catch (error) {
        console.error("error" + error);
        res.status(400).send("Error fetching user");
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;