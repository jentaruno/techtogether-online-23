const {userSchema} = require('./user')
const mongoose = require('mongoose')

const petitionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a title"]
        },
        image: {
            data: Buffer,
            contentType: String
        },
        description: {
            type: String,
            required: false
        },
        company: {
            type: String,
            required: [true, "Please enter a company"]
        },
        location: {
            type: String,
            required: [true, "Please enter a location"]
        },
        user: {
            type: userSchema,
            required: [true, "Missing user"]
        },
        tags: {
            type: [{type: String}],
            required: false
        },
    }
)

const Petition = mongoose.model("Petition", petitionSchema)

module.exports = { petitionSchema, Petition }