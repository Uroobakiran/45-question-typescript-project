"use strict";
// Exercise#1
// installation complete
// exercise#2
let personName = "Toheed_ahmed";
console.log(`Hello! ${personName}, would you like to learn some python?`);
// exercise#3
//  print that person’s name in lowercase, .
let lowercase = personName.toLowerCase();
console.log(lowercase);
// print that person's name uppercase
let uppercase = personName.toUpperCase();
console.log(uppercase);
// print that person's name titlecase
let titlecase = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titlecase);
