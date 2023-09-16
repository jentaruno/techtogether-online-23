const mongoose = require('mongoose')
const {Users} = require("./models/user");
const {Petitions} = require("./models/petition");
async function connectDatabase(res) {
    try {
        // Optional add for mongoose connect URL: /?retryWrites=true&w=majority
        await mongoose.connect('mongodb+srv://jentaruno:WkSfVH2iJpSAltmG@ttonlinecluster.pzdd4zj.mongodb.net', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        res.status(500).send("Couldn't connect to database")
    }
}

async function addPetitionToUser(userId, petitionId, createdOrSigned) {
    try {
        const user = await Users.findById(userId);
        if (!user) {
            console.error('User not found');
            return;
        }

        const petition = await Petitions.findById(petitionId);
        if (!petition) {
            console.error('Petition not found');
            return;
        }

        user.petitions[createdOrSigned].push(petition);

        await user.save();

        console.error(`Added petition to user's ${createdOrSigned} petitions: User ID ${userId}, Petition ID ${petitionId}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

module.exports = {connectDatabase, addPetitionToUser}