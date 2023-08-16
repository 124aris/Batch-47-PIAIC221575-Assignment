/* Q37: Large Shirts: Modify the make_shirt() function so that shirts
are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */

function Make_Shirt(size: string = "Large", message: string = "I love TypeScript"){
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
};

//Large by Default with a Message

console.log("Large by Default with a Message:");

Make_Shirt();

//Medium Shirt with the Default Message

console.log("\nMedium Shirt with the Default Message:");

Make_Shirt("Medium");

//Shirt of Any Size With a Different Message

console.log("\nShirt of Any Size With a Different Message:");

Make_Shirt("Small", "This is My Victory Shirt");