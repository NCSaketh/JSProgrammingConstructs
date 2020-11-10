let feet = 1;
let inch = 1/12 * feet;

let findFeet = 42 * inch;
console.log("A: 42 inches = " + findFeet + " feet.");

let length = 60;
let breadth = 40;
let areaOfOnePlotInFeet = length * breadth;
let areaOfOnePlotInAcre = areaOfOnePlotInFeet / 43560;

let areaOf25Plots = areaOfOnePlotInAcre * 25;

console.log("B: Area of One plot in square foot: " + areaOfOnePlotInFeet + ",  in acres: " + areaOfOnePlotInAcre);
console.log("C: Area of 25 such plots: " + areaOf25Plots + " acres");
