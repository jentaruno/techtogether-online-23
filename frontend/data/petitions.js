import {SERVER_LINK} from "@data/utils";

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
            alert('Error getting all petitions');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

// Takes petition ID
// Returns petition schema
async function getPetition(petitionId) {
    try {
        const response = await fetch(SERVER_LINK + '/petitions/' + petitionId, {
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

// Takes a petition schema
// Updates to database
async function createPetition(petition) {
    try {
        const response = await fetch(SERVER_LINK + '/petitions/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(petition),
        });

        if (response.ok) {
            const responseData = await response.json();
            alert(responseData.message);
        } else {
            alert('Error creating petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
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
            alert('Deleted petition' + petitionId);
        } else {
            alert('Error creating petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
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
            alert(userId + ' signed petition ' + petitionId);
        } else {
            alert('Error signing petition');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
}

export {getAllPetitions, getPetition, createPetition, deletePetition, signPetition};