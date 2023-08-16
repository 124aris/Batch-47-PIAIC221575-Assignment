"use strict";
/* Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces. */
//Person's Name with Whitespaces
let personname = "\t \t Muhammad Haris \n \t";
console.log("Person's Name with Whitespaces:", personname);
//Person's Name without Whitespaces
let strippedName = personname.trim();
console.log("Person's Name without Whitespaces:", strippedName);
