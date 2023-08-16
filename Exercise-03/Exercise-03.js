"use strict";
/* Q3: Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase. */
let person_Name = "muhammad haris";
//Person's Name in Lowercase
let lowercaseName = person_Name.toLowerCase();
console.log("Person's Name in Lowercase:", lowercaseName);
//Person's Name in Uppercase
let uppercaseName = person_Name.toLocaleUpperCase();
console.log("\nPerson's Name in Uppercase:", uppercaseName);
//Person's Name in Titlecase
function titlecaseName(name) {
    const words = name.toLowerCase().split(" ");
    const titleCasedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return titleCasedWords.join(" ");
}
;
console.log("\nPerson's Name in Titlecase:", titlecaseName(person_Name));
