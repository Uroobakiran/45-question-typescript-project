"use strict";
// Exercise#23
// Sample variables for testing
let a = 5;
let b = 10;
let string4 = "Hello";
let string5 = "World";
let isSunny = true;
let isRainy = false;
//test 1
console.log("Test 1: is equal to 5");
console.log(a === 5); // Prediction: True
//Test 2
console.log("Test 2: b is greator then 10");
console.log(b > 10); // Prediction: False
//Test 3
console.log("Test 3: string1 is not equal to string2");
console.log(string4 !== string5); // Prediction: True
//Test 4
console.log("Test 4: it is sunny and not rainy");
console.log(isSunny && !isRainy); // Prediction: True
// Test 5
console.log("Test 5: a is less than or equal to b");
console.log(a <= b); // Prediction: True
// Test 6
console.log("Test 6: a is equal to b");
console.log(a === b); // Prediction: False
// Test 7
console.log("Test 7: string1 starts with 'H' and ends with 'o'");
console.log(string4.startsWith('H') && string5.endsWith('o')); // Prediction: True
// Test 8
console.log("Test 8: b is not equal to 10");
console.log(b !== 10); // Prediction: False
// Test 9
console.log("Test 9: It is either rainy or sunny");
console.log(isRainy || isSunny); // Prediction: True
// Test 10
console.log("Test 10: a is greater than b");
console.log(a > b); // Prediction: False
// Exercise24
//Additional testing 
// Tests for equality and inequality with strings
let string1 = "Apple";
let string2 = "orange";
console.log("Test fir equality:", string1 === string2); //prediction False
console.log("Test for inequality:", string1 !== string2); //prediction True
//Tests using the lowercase function
let uppercasestring = "HELLO";
let lowercasestring = "hello";
console.log(uppercasestring.toLowerCase(), lowercasestring); //prediction True
// Numerical tests
let num1 = 22;
let num2 = 24;
console.log("Test for equality:", num1 === num2); //prediction False
console.log("Test for notequality:", num1 !== num2); //prediction True
console.log("Test for greater than:", num1 > num2); //prediction False
console.log("Test foer less then:", num1 < num2); //prediction True
console.log("Test for greater than or equal to:", num1 >= num2); //prediction False
console.log("Test foe less than or equal to:", num1 <= num2); //prediction True
//Tests logical operator using "and" and "or" operator
let x = 10;
let y = 20;
console.log(x === 10 && x < y); //prediction True
console.log(x !== 10 || x > y || x === y); //prediction False
//Test whether an item is in a array
let fruits = ["Apple", "Mango", "Banana", "Orange"];
let fruitsToCheck = ["Banana"];
console.log(fruits.includes("fruitsToCheck")); // Prediction: True
//Test whether an item is not in a array
let vegetable = "carrot";
console.log(!fruits.includes("vegetable")); // Prediction: True
