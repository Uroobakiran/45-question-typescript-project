// Exercise#38
// Function to describe a city and its country
function describe_city(city: string, country: string = "Unknown"){
    console.log(`${city} is in ${country}.`);
}

// Call your function for three different cities
describe_city("Karachi" , "Pakistan");
describe_city("Beijing","China");
describe_city("Tokyo");

// Exercise#39
// Function to format city and country
function city_country(city: string, country:string){
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let pairs1= city_country("Multan", "Pakistan");
let pairs2= city_country("Colomo", "Srilanka");
let pairs3= city_country("Kuala Lumpur", "Malaysia");

// Printing the values returned by the function
console.log(pairs1);
console.log(pairs2);
console.log(pairs3);