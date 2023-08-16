"use strict";
/* Q22: Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen.
Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program. */
let cities = ["Lahore", "Karachi", "Islamabad", "Quetta"];
//Intentional Error
console.log("Intentional Error:", cities[4]);
console.log("\nIntentional Error:", cities[-1]);
//Correction
console.log("\nCorrection:", cities[3]);
console.log("\nCorrection:", cities[0]);
