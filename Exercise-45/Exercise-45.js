"use strict";
/* Q45: Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
function cars(manufacturer, ModelName, ...args) {
    let CarInfo = { Manufacturer: manufacturer, Model: ModelName };
    let additionalInfo = {};
    for (let [key, value] of args) {
        additionalInfo[key] = value;
    }
    ;
    if (Object.keys(additionalInfo).length > 0) {
        CarInfo.AdditionalInformation = additionalInfo;
    }
    ;
    return CarInfo;
}
;
let Car = cars('Toyota', 'Camry', ['Color', 'Blue'], ['OptionalFeature', 'Sunroof']);
console.log("Car Information:", Car);
