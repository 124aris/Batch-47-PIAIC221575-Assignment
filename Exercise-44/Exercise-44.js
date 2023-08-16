"use strict";
/* Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
function orderSandwich(...items) {
    console.log("Sandwich Order Summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    }
    else {
        console.log("Bread with:");
        for (let i = 0; i < items.length; i++) {
            console.log(`- ${items[i]}`);
        }
        ;
    }
    ;
}
;
orderSandwich("Ham", "Swiss Cheese");
console.log("");
orderSandwich();
console.log("");
orderSandwich("Tuna", "Pickles", "Mustard", "Onions");
