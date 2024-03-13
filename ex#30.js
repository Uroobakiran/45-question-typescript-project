"use strict";
// Array for usernames
let usernames = ["admin", "ali", "moien", "afan", "ahmed"];
// Loop through the array and print greetings
// Check if the username is 'admin'
for (let username of usernames) {
    if (username.toLowerCase() === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
}
