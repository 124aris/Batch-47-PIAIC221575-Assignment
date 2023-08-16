/* Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */

let guestsfordinner = ["Zayan Haider", "Muhammad Baqir", "Muhammad Hashir", "Hamza Imran", "Ibrahim Suleman"];

//Invitation to Guests

function invitationtoguests(){
    guestsfordinner.forEach((guestsfordinner) =>{
    let message: string = `${guestsfordinner}: \n Hi ${guestsfordinner}, I invite you for dinner on the special occasion of my birthday.`;
    console.log(message);
    return;
})};

invitationtoguests();

//Guest who can't make it

console.log("\nImportant Message: Guest who can't make it is Muhammad Hashir.\n");

//New Guests List

guestsfordinner.splice(2, 1, "Rida Fatima");

//Invitation to New Guests

invitationtoguests();