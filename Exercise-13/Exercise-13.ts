/* Q13: Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.” */

let modeofTransportation = ["Car", "Motorcycle", "Train", "Airplane"];

//Series of Statements

for (let i = 0; i < modeofTransportation.length; i++){
    if (modeofTransportation[i] === "Car"){
        console.log("Car: \n I love driving racing cars.");
    } else if (modeofTransportation[i] === "Motorcycle"){
        console.log("Motorcycle: \n I would like to own a Honda motorcycle.");
    } else if (modeofTransportation[i] === "Train"){
        console.log("Train: \n Orange Line Metro Train in Lahore is very helpful for local people.");
    } else {
        console.log("Airplane: \n Airplanes are the fastest mode of transportation.");
    };
};