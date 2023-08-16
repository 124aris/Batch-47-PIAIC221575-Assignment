/* Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner. */

let GuestsforDinner = ["Zayan Haider", "Muhammad Baqir", "Muhammad Hashir", "Hamza Imran", "Ibrahim Suleman"];

//Invitation to Guests

function InvitationtoGuests(){
    GuestsforDinner.forEach((GuestsforDinner) =>{
    let message: string = `${GuestsforDinner}: \n Hi ${GuestsforDinner}, I invite you for dinner on the special occasion of my birthday.`;
    console.log(message);
    return;
})};

InvitationtoGuests();

//Message Indicating the Number of People Invites to Dinner

let Message: string = "\nMessage: Hello, I am inviting 5 people to the dinner.";

console.log(Message);