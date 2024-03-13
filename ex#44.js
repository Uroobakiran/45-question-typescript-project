"use strict";
function orderSandwich(...items) {
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some ingredients for your sandwich.");
    }
    else {
        console.log("Ingredients:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
        console.log("Enjoy your sandwich!");
    }
    console.log("--------------------------------------");
}
// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce");
orderSandwich("Turkey", "Tomato");
orderSandwich(); // No arguments provided
