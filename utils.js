const mongoose = require('mongoose')
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

module.exports = {connectDatabase}