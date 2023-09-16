const {editUser, getUser, newUser} = require("./user");

test("Gets user data", async () => {
    const user = await getUser("6504f4f431f942efac8188c1");
    expect(user.name).toBe("New Bob");
});

test("Creates user with min reqs", async () => {
    await newUser("User", "user@gmail.com", "User's Company");
});

test("Creates user with all fields", async () => {
    await newUser("User2", "user2@gmail.com", "User2's Company", "User2's Position", ["Test", "Test2"]);
});

test("Edits user info", async () => {
    await editUser("6504f4f431f942efac8188c1", {
        "name": "New New Bob",
        "email": "newbob@gmail.com",
        "company": "New Bob's Company",
    });
    const user = await getUser("6504f4f431f942efac8188c1");
    expect(user.name).toBe("New New Bob");
});