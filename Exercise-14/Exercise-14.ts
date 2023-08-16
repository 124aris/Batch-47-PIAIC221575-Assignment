/* Q14: Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */

let guestsforDinner = ["Zayan Haider", "Muhammad Baqir", "Muhammad Hashir", "Hamza Imran", "Ibrahim Suleman"];

//Invitation to Guests

function invitationtoGuests(){
    guestsforDinner.forEach((guestsforDinner) =>{
    let message: string = `${guestsforDinner}: \n Hi ${guestsforDinner}, I invite you for dinner on the special occasion of my birthday.`;
    console.log(message);
    return;
})};

invitationtoGuests();