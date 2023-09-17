const SERVER_LINK = require("./utils");

// Takes userId
// Returns user schema
// * Note: Deleted petitions are not deleted from user's list of signed and created petitions.
//         To get around this, for each petition, check if a petition with that ID truly exists
//         before using its data in the front-end
async function getUser(userId) {
    try {
        const response = await fetch(SERVER_LINK + '/user/get/' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.log('Error getting user');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

// Takes user email
// Returns user schema
// * Note: Deleted petitions are not deleted from user's list of signed and created petitions.
//         To get around this, for each petition, check if a petition with that ID truly exists
//         before using its data in the front-end
async function getUserIdByEmail(email) {
    try {
        const response = await fetch(SERVER_LINK + '/user/get-by-email/' + email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const json = response.json();
            return json._id;
        } else {
            console.log('Error getting user');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

// Takes name, email, company, and tags
// * Note: tags is an array of strings!
// Adds user to DB
async function newUser(name, email, company, position = undefined, tags = []) {
    try {
        const user = {
            "petitions": {
                "created": [],
                "signed": []
            },
            "name": name,
            "email": email,
            "company": company,
        }
        if (position) {
            user.position = position;
        }
        if (tags.length > 0) {
            user.tags = tags;
        }
        const response = await fetch(SERVER_LINK + '/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message);
        } else {
            console.log('Error creating user');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

// Takes userId and new user (object)
// * Note: new user can be an object with only parts of the user's data that was modified
// e.g. just { company: "New Company", tags: ["Healthcare", "Tech"] }
// Updates existing user in DB
async function editUser(userId, newUser) {
    try {
        const currentUser = await fetch(SERVER_LINK + '/user/get/' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const editedUser = {...currentUser, ...newUser};

        const response = await fetch(SERVER_LINK + '/user/edit/' + userId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedUser)
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.log('Error getting petition');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

module.exports = {getUser, getUserIdByEmail, newUser, editUser};