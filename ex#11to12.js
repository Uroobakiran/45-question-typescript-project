"use strict";
// Array of friends' names
let friendsName = ["Hina", "Rubab", "Saman", "Adeeba"];
// Print each person's name from the array
for (let i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// Exercise 12
// Print a personalized message to each person
for (let i = 0; i < friendsName.length; i++) {
    let greatingFriends = `Hello ${friendsName[i]}, have a great day!`;
    console.log(greatingFriends);
}
