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
        tags: {
            type: [{type: String}],
            required: false
        },
        poster: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: [true, "Missing user"]
        },
        signers: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
            }],
            required: false
        },
        // Comments on the petition
    }
)

const Petitions = mongoose.model("Petitions", petitionSchema, "petitions")

module.exports = { petitionSchema, Petitions }