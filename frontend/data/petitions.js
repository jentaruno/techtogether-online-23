const SERVER_LINK = require("./utils");

// Returns all petitions in database
async function getAllPetitions() {
    try {
        const response = await fetch(SERVER_LINK + '/petitions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return await response.json();
        } else {
            console.log('Error getting all petitions');
            return 'Error getting all petitions';
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
        return error;
    }
}

// Takes petition ID
// Returns petition schema
async function getPetition(petitionId) {
    try {
        const response = await fetch(SERVER_LINK + '/petitions/get/' + petitionId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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

// Takes an email and petition schema
// Updates to database
async function createPetition(email, petition) {
    try {
        const body = JSON.stringify({email: email, petition: petition});
        console.log(body);
        const response = await fetch(SERVER_LINK + '/petitions/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message);
        } else {
            console.log('Error creating petition');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

// Takes petition ID
// Deletes petition
async function deletePetition(petitionId) {
    try {
        const response = await fetch(SERVER_LINK + '/petitions/delete/' + petitionId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Deleted petition' + petitionId);
        } else {
            console.log('Error creating petition');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

// Takes petition ID, user ID
// Add to user's signed petitions
// Add this user's to the petition's signers
async function signPetition(petitionId, userId) {
    try {
        const response = await fetch(SERVER_LINK + '/petitions/sign/' + petitionId, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userId": userId
            }),
        });

        if (response.ok) {
            await response.json();
            console.log(userId + ' signed petition ' + petitionId);
        } else {
            console.log('Error signing petition');
        }
    } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred');
    }
}

module.exports = {getAllPetitions, getPetition, createPetition, deletePetition, signPetition};