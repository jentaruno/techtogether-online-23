const express = require('express')
const mongoose = require('mongoose')
const {Petitions} = require("../models/petition");
const {Users} = require("../models/user");
const {UserFuncs} = require("./userFuncs");
const {connectDatabase} = require("../utils");
const router = express.Router()

// Initialises database with collections if it doesn't already exist
// - petitions - users
router.get('', async (req, res) => {
    await connectDatabase(res)
    let response = ""
    try {

        //UserFuncs.newUser("Joe", "Joe@gmail.com", "some company", "some position", ["first tag","second tag"]);

        // const petitions = await Petitions.findOne()
        // if (!petitions) {
        //     await Petitions.create({
        //         title: "title",
        //         company: "company",
        //         location: "loc",
        //         poster: {
        //             name: "Name",
        //             email: "my-email@gmail.com",
        //             company: "My Company",
        //         },
        //     })
        //     response += `Petitions document created<br/>`
        // } else {
        //     response += `Petitions document already exists<br/>`
        // }

        // const users = await Users.findOne()
        // if (!users) {
        //     await Users.create({
        //         name: "Name",
        //         email: "my-email@gmail.com",
        //         company: "My Company",
        //     })
        //     response += `Users document created<br/>`
        // } else {
        //     response += `Users document already exists<br/>`
        // }

        res.status(200).send(response);
    } catch (error) {
        console.error(error);
        res.status(400).send("Couldn't create documents")

    } finally {
        mongoose.connection.close()
    }
});

module.exports = router