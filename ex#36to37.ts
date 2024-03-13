// Function to create a T-shirt
function make_shirt(size = "Large", message = "I love TypeScript"){
    console.log(`T-Shirt Size: ${size}, Message: ${message}`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt("Medium");

// Creating a shirt of any size with a different message
make_shirt("Small", "I love pakistan");