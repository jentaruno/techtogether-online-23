const express = require('express')
const mongoose = require('mongoose')
const {Petitions} = require("../models/petition");
const {Users} = require("../models/user");
const router = express.Router()


const newUser = async (name, email, company, position, tags) => {
    try {
        await Users.create({
            name: name,
            email: email,
            company: company,
            position: position,
            tags: tags
        });
    } catch (err) {
        console.log(err);
    }
}

const editUser = async (userId, editedUser) => {
    try {
        const user = await Users.findById(userId).exec();
        user = editedUser;
        await user.save();
    } catch (err) {
        console.log(err);
    }
}

const getUser = async (userId) => {
    try {
        return await Users.findById(userId).exec;
    } catch (err) {
        console.log(err);
    }
}