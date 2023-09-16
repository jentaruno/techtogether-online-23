const {getAllPetitions, getPetition, createPetition, deletePetition, signPetition} = require("./petitions");
test("Gets all petitions", async () => {
    const petitions = await getAllPetitions();
    expect(petitions.length).toEqual(2);
})

test("Gets one petition", async () => {
    const petition = await getPetition("6504c0dd71e0284098d633f1");
    expect(petition).toEqual({
        "_id": "6504c0dd71e0284098d633f1",
        "title": "title",
        "company": "company",
        "location": "loc",
        "tags": [],
        "poster": "650494d18c60798c602ffbba",
        "signers": [],
        "__v": 0
    });
});

test("Create petition with min reqs", async () => {
    let petitions = await getAllPetitions();
    const firstLength = petitions.length;
    await createPetition({
        "userId": "650494d18c60798c602ffbba",
        "petition": {
            "title": "Test Petition",
            "company": "Test Company",
            "location": "Test Location",
            "poster": "650494d18c60798c602ffbba"
        }
    });
    petitions = await getAllPetitions();
    const secondLength = petitions.length;
    expect(secondLength).toBe(firstLength + 1);
})

test("Create petition with all data", async () => {
    let petitions = await getAllPetitions();
    const firstLength = petitions.length;
    await createPetition({
        "userId": "650494d18c60798c602ffbba",
        "petition": {
            "title": "Test Petition",
            "image": "https://metro.co.uk/wp-content/uploads/2019/04/SEI_62738373.jpg?quality=90&strip=all&zoom=1&resize=644%2C362",
            "description": "Lorem ipsum dolor sit amet",
            "company": "Test Company",
            "location": "Test Location",
            "tags": ["Test", "Test2"],
            "poster": "650494d18c60798c602ffbba"
        }
    });
    petitions = await getAllPetitions();
    const secondLength = petitions.length;
    expect(secondLength).toBe(firstLength + 1);
})

test("Delete petition", async () => {
    await deletePetition("6505330c39a1dd2f6bb1ee3a");
    const petition = await getPetition("6505330c39a1dd2f6bb1ee3a");
    expect(petition).toBeUndefined();
})

test("Sign petition as poster", async () => {
    await signPetition("6505330c39a1dd2f6bb1ee3a", "650494d18c60798c602ffbba");
    const petition = await getPetition("6505330c39a1dd2f6bb1ee3a");
    expect(petition.signers.length).toBe(0);
})

test("Sign petition normally", async () => {
    await signPetition("6505330c39a1dd2f6bb1ee3a", "6504f4f431f942efac8188c1");
    const petition = await getPetition("6505330c39a1dd2f6bb1ee3a");
    expect(petition.signers.length).toBe(1);
})

test("Sign petition as existing signer", async () => {
    await signPetition("6505330c39a1dd2f6bb1ee3a", "6504f4f431f942efac8188c1");
    const petition = await getPetition("6505330c39a1dd2f6bb1ee3a");
    expect(petition.signers.length).toBe(1);
})