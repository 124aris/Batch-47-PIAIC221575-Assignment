/* Q32: Checking Usernames: Do the following to create a program that
simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

let current_users = ["Admin", "124aris", "ZayaHaider", "MuhammadBaqir", "AhmedRashwan"];

let new_users = ["RidaFatima", "ADMIN", "NoorFatima", "124aris", "MuhammadHashir"];

//Convert Current Users to Lower Case

let currentUsers = current_users.map(username => username.toLowerCase());

//Loop to Check for Same Usernames

for (let i = 0; i < new_users.length; i++){
    if (currentUsers.includes(new_users[i].toLowerCase())){
        console.log(`Sorry ${new_users[i]}!, You Will Need to Enter a New Username.`);
    } else {
        console.log(`Username ${new_users[i]} is Available.`);
    };
};