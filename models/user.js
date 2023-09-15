const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"]
        },
        email: {
            type: String,
            required: [true, "Please enter an email"]
        },
        company: {
            type: String,
            required: [true, "Please enter a company"]
        },
        position: {
            type: String,
            required: false
        },
        tags: {
            type: [{type: String}],
            required: false
        },
        petitions: {
            created: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'petitions',
            }],
            signed: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'petitions',
            }]
        }
        //$$?
    }
)

const Users = mongoose.model("Users", userSchema, "users")

module.exports = { userSchema, Users }