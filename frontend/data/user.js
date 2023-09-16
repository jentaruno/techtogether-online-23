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
            alert(responseData.message);
        } else {
            alert('Error creating user');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Takes userId and new user (object)
// Note: new user can be an object with only parts of the user's data that was modified
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
            alert('Error getting petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

export {getUser, newUser, editUser};