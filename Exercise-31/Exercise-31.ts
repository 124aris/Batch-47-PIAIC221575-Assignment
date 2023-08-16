/* Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed. */

let Usernames = ["Admin", "124aris", "ZayaHaider", "MuhammadBaqir", "AhmedRashwan"];

Usernames = [];

if (Usernames.length == 0){
    console.log("We Need to Find Some Users!")
} else {
    for (let i = 0; i < Usernames.length; i++){
        if (Usernames.length > 0 && Usernames[i] == "Admin"){
            console.log("Hello Admin, Would You Like to See a Status Report?");
        } else {
            console.log(`Hello ${Usernames[i]}, Thank You for Logging in Again.`);
        };
    };
};