/* Q41: Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicianNames = ["David Copperfield", "David Blaine", "Criss Angel", "Derren Brown", "Dynamo"];

function show_magicians(Array: string[]){
    for (let i = 0; i < Array.length; i++){
        console.log("Magicians Name:", Array[i]);
    };
    return Array;
};

show_magicians(magicianNames);