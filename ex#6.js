"use strict";
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces
let person = "\t   \n Toheed_ahmed \t   \n";
// Print the name with whitespace
console.log(`Name with whitespace: ${person}`);
// Strip leading and trailing whitespaces
let strippedName = person.trim();
// Print the name after stripping whitespaces
console.log(`Stripped name: ${strippedName}`);
