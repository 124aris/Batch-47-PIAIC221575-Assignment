/* Q12: Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name,print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */

let friendNames = ["Hamza Dawood", "Mursal Rashid", "Rafey Faisal", "Haris Niaz", "Uzair Imran"];

//Message to Friends

friendNames.forEach((friendNames) =>{
    let message: string = `${friendNames}: \n Hi ${friendNames}, would you like to learn some Python today?`;
    console.log(message);
});