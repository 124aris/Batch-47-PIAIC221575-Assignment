"use strict";
/* Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality,
greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
//Test for Equality and Inequality with Strings
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Apple";
console.log("Test for Equality with Stings: \n Question: Is fruit1 == fruit3?");
console.log(` Answer: ${fruit1 == fruit3}\n`);
console.log("Test for Equality with Stings: \n Question: Is fruit1 == fruit2?");
console.log(` Answer: ${fruit1 == fruit2}\n`);
console.log("Test for Inequality with Stings: \n Question: Is fruit1 != fruit2?");
console.log(` Answer: ${fruit1 != fruit2}\n`);
console.log("Test for Inequality with Stings: \n Question: Is fruit1 != fruit3?");
console.log(` Answer: ${fruit1 != fruit3}\n`);
//Test Using Lowercase Function
console.log("Test for Equality with Stings Using Lowercase Function: \n Question: Is fruit1 == fruit3?");
console.log(` Answer: ${fruit1.toLowerCase() == fruit3.toLowerCase()}\n`);
console.log("Test for Equality with Stings Using Lowercase Function: \n Question: Is fruit1 == fruit2?");
console.log(` Answer: ${fruit1.toLowerCase() == fruit2.toLowerCase()}\n`);
console.log("Test for Inequality with Stings Using Lowercase Function: \n Question: Is fruit1 != fruit2?");
console.log(` Answer: ${fruit1.toLowerCase() != fruit2.toLowerCase()}\n`);
console.log("Test for Inequality with Stings Using Lowercase Function: \n Question: Is fruit1 != fruit3?");
console.log(` Answer: ${fruit1.toLowerCase() != fruit3.toLowerCase()}\n`);
//Numerical Tests Involving Equality and Inequality
let num1 = 6;
let num2 = 14;
let num3 = 6;
console.log("Test for Equality with Numbers: \n Question: Is num1 == num3?");
console.log(` Answer: ${num1 == num3}\n`);
console.log("Test for Equality with Numbers: \n Question: Is num1 == num2?");
console.log(` Answer: ${num1 == num2}\n`);
console.log("Test for Inequality with Numbers: \n Question: Is num1 != num2?");
console.log(` Answer: ${num1 != num2}\n`);
console.log("Test for Inequality with Numbers: \n Question: Is num1 != num3?");
console.log(` Answer: ${num1 != num3}\n`);
//Numerical Tests Involving Greater Than and Less Than
let num4 = 1;
console.log("Test for Greater Than with Numbers: \n Question: Is num1 > num4?");
console.log(` Answer: ${num1 > num4}\n`);
console.log("Test for Greater Than with Numbers: \n Question: Is num1 > num2?");
console.log(` Answer: ${num1 > num2}\n`);
console.log("Test for Less Than with Numbers: \n Question: Is num1 < num2?");
console.log(` Answer: ${num1 < num2}\n`);
console.log("Test for Less Than with Numbers: \n Question: Is num1 < num4?");
console.log(` Answer: ${num1 < num4}\n`);
//Numerical Tests Involving Greater Than Or Equal To and Less Than Or Equal To
console.log("Test for Greater Than Or Equal To with Numbers: \n Question: Is num1 >= num3?");
console.log(` Answer: ${num1 >= num3}\n`);
console.log("Test for Greater Than Or Equal To with Numbers: \n Question: Is num1 >= num2?");
console.log(` Answer: ${num1 >= num2}\n`);
console.log("Test for Less Than Or Equal To with Numbers: \n Question: Is num1 <= num2?");
console.log(` Answer: ${num1 <= num2}\n`);
console.log("Test for Less Than Or Equal To with Numbers: \n Question: Is num3 <= num4?");
console.log(` Answer: ${num1 <= num4}\n`);
//Tests Using "And" and "Or" Operators
console.log('Tests Using "And" Operator: \n Question: Is num1 == num3 && num3 != num2?');
console.log(` Answer: ${num1 == num3 && num3 != num2}\n`);
console.log('Tests Using "And" Operator: \n Question: Is num1 == num4 && num3 != num2?');
console.log(` Answer: ${num1 == num4 && num3 != num2}\n`);
console.log('Tests Using "Or" Operator: \n Question: Is num1 == num4 || num3 != num2?');
console.log(` Answer: ${num1 == num4 || num3 != num2}\n`);
console.log('Tests Using "Or" Operator: \n Question: Is num1 == num4 || num3 != num1?');
console.log(` Answer: ${num1 == num4 || num3 != num1}\n`);
//Test Whether an Item is in a Array
let fruits = ["Orange", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Test Whether an Item is in a Array: \n Question: Is fruits[i] == 'Orange'?");
    console.log(` Answer: ${fruits[i] == "Orange"}\n`);
}
;
//Test Whether an Item is Not in a Array
for (let i = 0; i < fruits.length; i++) {
    console.log("Test Whether an Item is in a Array: \n Question: Is fruits[i] != 'Mango'?");
    console.log(` Answer: ${fruits[i] != "Mango"}\n`);
}
;
