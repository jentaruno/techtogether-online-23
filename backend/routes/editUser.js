const {connectDatabase} = require("../utils");
const {Users} = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router()

// Input userId and new user
// Updates existing user in DB
router.patch('/:userId', async (req, res) => {
    await connectDatabase(res)
    try {
        const userToChange = await Users.findById(req.params.userId).exec();
        const editedUser = req.body
        if (!userToChange) {
            res.status(400).send("User not found");
        } else {
            userToChange = editedUser;
            await userToChange.save();
            res.status(200).send("Edited User " + userToChange.name);    
        }
    } catch (error) {
        console.error("error" + error);
        res.status(400).send("Error editing user");
    } finally {
        mongoose.connection.close();
    }
});