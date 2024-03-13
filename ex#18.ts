//Array place to visit
let placeToVisit : string[] = ["china", "malishiya","srilanka","japan","tokyo"]

//print Array in original order
console.log("original Order:", placeToVisit);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabatical Order:",[...placeToVisit].sort());

//Show that your array is still in its original order by printing it.
console.log("original order:",placeToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:",[...placeToVisit].reverse());

//Show that your array is still in its original order by printing it again
console.log("OriginalOrder:",placeToVisit);

// Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reverse order:",placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Back To Original Order:", placeToVisit);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorted in Alphabetical order:",placeToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("Stored in Reverse Alphabetical Order:",placeToVisit);