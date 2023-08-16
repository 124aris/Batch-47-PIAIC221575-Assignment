"use strict";
/* Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list,
print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */
let Guestsfordinner = ["Zayan Haider", "Muhammad Baqir", "Muhammad Hashir", "Hamza Imran", "Ibrahim Suleman"];
//Invitation to Guests
function Invitationtoguests() {
    Guestsfordinner.forEach((Guestsfordinner) => {
        let message = `${Guestsfordinner}: \n Hi ${Guestsfordinner}, I invite you for dinner on the special occasion of my birthday.`;
        console.log(message);
        return;
    });
}
;
Invitationtoguests();
//Guest who can't make it
console.log("\nImportant Message: Guest who can't make it is Muhammad Hashir.\n");
//New Guests List
Guestsfordinner.splice(2, 1, "Rida Fatima");
//Invitation to New Guests
Invitationtoguests();
//Important Announment
console.log("\nImportant Message: Attention!, Ladies and Gentlemen, I have found a bigger dinner table for the dinner I invited you for.\n");
//More New Guests
Guestsfordinner.unshift("Ahmed Rashwan");
Guestsfordinner.splice(3, 0, "Noor Fatima");
Guestsfordinner.push("Urwa Kamran");
//Invitation to More New Guests
Invitationtoguests();
//Can Invite Only Two People
console.log("\nImportant Message: Sorry!, I can only invite two people for the dinner I invited you for.\n");
//Removing People From Guest List and Sending Apologies
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
console.log(`${Guestsfordinner.pop()}: \n I'm Sorry!, I cannot invite you for the dinner.`);
//Invitation to Left Over Guests
console.log(" ");
Invitationtoguests();
//Removing the Left Over Guests
Guestsfordinner.pop();
Guestsfordinner.pop();
//Confirming Empty Array
console.log("\nEmpty Array:", Guestsfordinner);
