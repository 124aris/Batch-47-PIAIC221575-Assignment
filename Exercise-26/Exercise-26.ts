/* Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block. */

//Version that Runs the If Block

let alienColor: string = "Green";

if (alienColor == "Green"){
    console.log("Player Just Earned 5 Points for Shooting the Alien.");
} else{
    console.log("Player Just Earned 10 Points.");
};

//Version that Runs the Else Block

console.log("");

alienColor = "Red";

if (alienColor == "Green"){
    console.log("Player Just Earned 5 Points for Shooting the Alien.");
} else{
    console.log("Player Just Earned 10 Points.");
};