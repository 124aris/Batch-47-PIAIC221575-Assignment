/* Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed. */

let placestoVisit = ["Paris", "London", "Tokyo", "Sydney", "New York"];

//Original Order of Array

console.log("Original Order:", placestoVisit);

//Alphabetical Order of Array

console.log("\nAlphabetical Order:", [...placestoVisit].sort());

//Original Order of Array Again

console.log("\nOriginal Order:", placestoVisit);

//Reverse Alphabetical Order of Array

console.log("\nReverse Alphabetical Order:", [...placestoVisit].sort().reverse());

//Original Order of Array Again

console.log("\nOriginal Order:", placestoVisit);

//Reverse the Order of Array

placestoVisit.reverse();

console.log("\nReverse Order:", placestoVisit);

//Back to Original Oder

placestoVisit.reverse();

console.log("\nBack to Original Order:", placestoVisit);

//Sort the Order of Array

placestoVisit.sort();

console.log("\nSorted Order:", placestoVisit);

//Reverse Sort Order of Array

placestoVisit.sort((a, b) => b.localeCompare(a));

console.log("\nReverse Sorted Order:", placestoVisit);