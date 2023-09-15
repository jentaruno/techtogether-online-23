const express = require('express')
const mongoose = require('mongoose')
const Petitions = require("../models/petition");
const Users = require("../models/user");
const {connectDatabase} = require("../utils");
const router = express.Router()

// Initialises database with collections if it doesn't already exist
// - petitions - users
router.get('', async (req, res) => {
    // TODO: test that you can create petition and user
    // TODO: init from database instead of from here

    await connectDatabase(res)
    let response = ""
    try {
        const petitions = await Petitions.findOne()
        if (!petitions) {
            await Petitions.create()
            response += `Petitions document created<br/>`
        } else {
            response += `Petitions document already exists<br/>`
        }

        const users = await Users.findOne()
        if (!users) {
            await Users.create()
            response += `Users document created<br/>`
        } else {
            response += `Users document already exists<br/>`
        }
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send("Couldn't create documents")
    } finally {
        mongoose.connection.close()
    }
});

module.exports = router