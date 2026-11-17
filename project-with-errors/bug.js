
const users = [];

function addUser(name, age) {
    if (typeof name !== "string" || name.trim() === "") {
        throw new Error("Invalid name");
    }

    if (!Number.isInteger(age) || age < 18) {
        throw new Error("User must be at least 18 years old");
    }

    const user = {
        name: name.trim(),
        age: age
    };

    users.push(user);

    return user;
}

function getUsers() {
    return [...users];
}

function findUser(name) {
    return users.find(
        user => user.name === name
    ) || null;
}

try {
    addUser("Ahmed", 25);
    addUser("Youssef", 30);

    console.log(getUsers());
    console.log(findUser("Ahmed"));
} catch (error) {
    console.error(error.message);
}
