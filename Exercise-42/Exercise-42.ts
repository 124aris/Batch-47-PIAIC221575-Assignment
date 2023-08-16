/* Q42: Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */

let magiciansNames = ["David Copperfield", "David Blaine", "Criss Angel", "Derren Brown", "Dynamo"];

function show_Magicians(Array: string[]){
    for (let i = 0; i < Array.length; i++){
        console.log("Magicians Name:", Array[i]);
    };
    return Array;
};

show_Magicians(magiciansNames);

console.log("")

function make_great(Array: string[]){
    for (let i = 0; i < Array.length; i++) {
        Array[i] = "The Great " + Array[i];
    };
    return Array;
};

make_great(magiciansNames);

show_Magicians(magiciansNames);