/* Q16: More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let guestsFordinner = ["Zayan Haider", "Muhammad Baqir", "Muhammad Hashir", "Hamza Imran", "Ibrahim Suleman"];

//Invitation to Guests

function invitationToguests(){
    guestsFordinner.forEach((guestsFordinner) =>{
    let message: string = `${guestsFordinner}: \n Hi ${guestsFordinner}, I invite you for dinner on the special occasion of my birthday.`;
    console.log(message);
    return;
})};

invitationToguests();

//Guest who can't make it

console.log("\nImportant Message: Guest who can't make it is Muhammad Hashir.\n");

//New Guests List

guestsFordinner.splice(2, 1, "Rida Fatima");

//Invitation to New Guests

invitationToguests();

//Important Announment

console.log("\nImportant Message: Attention!, Ladies and Gentlemen, I have found a bigger dinner table for the dinner I invited you for.\n");

//More New Guests

guestsFordinner.unshift("Ahmed Rashwan");

guestsFordinner.splice(3, 0, "Noor Fatima");

guestsFordinner.push("Urwa Kamran");

//Invitation to More New Guests

invitationToguests();