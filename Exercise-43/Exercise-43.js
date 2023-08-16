"use strict";
/* Q43: Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names
and one array with the Great added to each magician’s name. */
let Magicians_Names = ["David Copperfield", "David Blaine", "Criss Angel", "Derren Brown", "Dynamo"];
let MagiciansNames = ["David Copperfield", "David Blaine", "Criss Angel", "Derren Brown", "Dynamo"];
function Show_Magicians(Array) {
    for (let i = 0; i < Array.length; i++) {
        console.log("Magicians Name:", Array[i]);
    }
    ;
    return Array;
}
;
function make_Great(Array) {
    for (let i = 0; i < Array.length; i++) {
        Array[i] = "The Great " + Array[i];
    }
    ;
    return Array;
}
;
let greatMagiciansNames = make_Great(MagiciansNames);
Show_Magicians(Magicians_Names);
console.log("");
Show_Magicians(greatMagiciansNames);
