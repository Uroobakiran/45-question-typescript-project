"use strict";
// Exercise # 14
let guest_invite = ["Izzah", "Maryam", "Alina"];
guest_invite.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
// Exersice # 15
let canNotAttend = "Maryam";
console.log(canNotAttend + " " + "can not attend to the dinner");
let newGuest = "Laiba";
guest_invite[guest_invite.indexOf(canNotAttend)] = newGuest;
console.log(guest_invite);
guest_invite.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
// Exercise # 16
//  print statement to the end of your program informing people that you found a bigger dinner table.
guest_invite.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));
// Add one new guest to the beginning of your array.
let guest_big = "Mutiba";
guest_invite.unshift(guest_big);
console.log(guest_invite);
//   Add one new guest to the middle of your array.
let middleGuest = "Fatima";
let middleIndex = guest_invite.length / 3;
guest_invite.splice(middleIndex, 3, middleGuest);
console.log(guest_invite);
//  append() to add one new guest to the end of your list
guest_invite.push("Aliza");
console.log(guest_invite);
// Print a new set of invitation messages, one for each person in your list.
guest_invite.map((items) => console.log(`Dear ${items}, you are invited in the more people list on dinner.`));
// Exercise#17
// prints a message saying that you can invite only two people for dinner.
guest_invite.map((items) => console.log(`Dear ${items}, Due to limited space, only two people can be invited for dinner.`));
// Remove guests from your list one at a time until only two names remain
while (guest_invite.length > 2) {
    let removedGuest = guest_invite.pop();
    console.log(`sorry, ${removedGuest}, you're no longer invited to dinner.`);
}
// Print invitation messages for the remaining two guests
guest_invite.forEach(guest_invite => {
    console.log(`Dear ${guest_invite}, you're still invited to dinner.`);
});
guest_invite.splice(0, guest_invite.length);
console.log(guest_invite);
// Exercise#19
console.log(`Iam inviting ${guest_invite.length} people to dinner.`);
