"use strict";
// List of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
for (let animal of animals) {
    console.log(animal);
}
// Print statements about each animal
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal} can be a loving companion.`);
            break;
        case "Rabbit":
            console.log(`A ${animal} is known for being cute and cuddly.`);
            break;
        default:
            console.log(`Information about ${animal} is not available.`);
            break;
    }
}
// Print a statement about the common characteristic
console.log("Any of these animals would make a great pet!");
