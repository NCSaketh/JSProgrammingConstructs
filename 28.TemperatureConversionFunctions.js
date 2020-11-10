console.log("1. Convert Celsius to Fahrenheit \n2. Convert Fahrenheit to Celsius")
const prompt = require('prompt-sync')();
let choice = prompt("Enter your choice: ")
choice = parseInt(choice)

switch (choice){
    case 1:
        let degree1 = prompt("Enter the degree in Celsius:  ")
        degree1 = parseFloat(degree1)
        if(degree1 > -1 && degree1 < 101)
            celsiusToFahrenheit(degree1)
        else
            console.log("Wrong Input Degree")
        break;
    case 2:
        let degree2 = prompt("Enter the degree in Fahrenheit:  ")
        degree2 = parseFloat(degree2)
        if(degree2 > 31 && degree2 < 213)
            fahrenheitToCelsius(degree2)
        else
            console.log("Wrong Input Degree")
        break;
    default:
        console.log("Wrong Input !!")
}

function celsiusToFahrenheit(degree){
    let fah =  (degree * 9 / 5) + 32;
    console.log("In Fahrenheit Scale : " + fah)
}

function fahrenheitToCelsius(degree){
    let cel =  (degree -32) * 5 / 9;
    console.log("In Celsius Scale : " + cel)
}
