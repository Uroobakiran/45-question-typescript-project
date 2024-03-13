// Exercise#41
//  Make an array of magician’s names
let magicians: string[] = ["Moiz", "Nameer", "Nabiek", "Imran"];

//  Pass the array to a function called show_magicians()
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Exercise#42
//  Write a function called make_great() that modifies the array of magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => magician + " the Great");
}

// Call show_magicians() to see that the list has actually been modified
show_magicians(magicians);

// Exercise#43
//  Call the make_great() function
let greatMagicians: string[] = make_great([...magicians]);

//  Call show_magicians() with each array
console.log("\nOriginal Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);