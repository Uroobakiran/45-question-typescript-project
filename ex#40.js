"use strict";
// Album
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
// Making three dictionaries representing different albums
let album1 = make_album("Linkin Park", "Meteora");
let album2 = make_album("Ed Sheeran", "Divide", 12);
let album3 = make_album("Taylor Swift", "1989", 16);
// Printing each return value
console.log(album1);
console.log(album2);
console.log(album3);
