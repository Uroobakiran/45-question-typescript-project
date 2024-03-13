let some_Users: [] = [];

if (some_Users.length === 0) {
    console.log("We need to find some users!");
} else {
    console.log("Nothing to print");
}

// Removing all usernames from the array
some_Users = [];
console.log("List of users after removal:", some_Users);

// Exercise#32
// List of current users
let current_users = ["Ali", "Ibrahim", "Mohsin", "Shazaib", "Noman", "Hamzah"];

// List of new users
let new_users = ["Ali", "Fahime", "Muhtashim", "Noman", "Fasial"];

// Loop through new_users
for (let i = 0; i < new_users.length; i++) {
    // Check if the username is already in use (case insensitive)
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log(`Sorry, ${new_users[i]} is not available. Please enter a new username.`);
    } else {
        console.log(`${new_users[i]} is available.`);
    }
}