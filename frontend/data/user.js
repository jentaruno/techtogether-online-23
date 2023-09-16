import {SERVER_LINK} from "@data/utils";

// Takes userId
// Returns user schema
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
            alert('Error getting petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Takes name, email, company, and tags
// * tags is an array of strings!
// Adds user to DB
// TODO: position and tags are optional
async function newUser(name, email, company, position, tags) {
    try {
        const user = {
            "petitions": {
                "created": [],
                "signed": []
            },
            "name": name,
            "email": email,
            "company": company,
            "position": position,
            "tags": tags
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
            alert(responseData.message);
        } else {
            alert('Error creating user');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Input userId and new user
// Updates existing user in DB
// TODO: take fields for newUser
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
            alert('Error getting petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}