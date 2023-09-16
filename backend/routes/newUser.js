const {connectDatabase} = require("../utils");
const {Users} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

// Input user schema
// Adds user to DB
router.post('', async (req, res) => {
    await connectDatabase(res);
    try {
        const user = req.body;
        let newUser = await Users.create(user);
        let userId = newUser._id;
        res.status(200).send("Created User " + user.name);
    } catch (error) {
        console.error("error" + error);
        res.status(400).send("Error creating user");
    } finally {
        mongoose.connection.close();
    }
});

module.exports = router;