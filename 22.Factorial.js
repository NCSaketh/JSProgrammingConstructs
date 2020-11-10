const prompt = require('prompt-sync')();

let input1 = prompt("Enter a number : ");

if(input1 == 0)
    return console.log("Factorial : 1");
else{
    let factorial = 1;
    for(let i = 2; i <= input1; i++){
        factorial = factorial * i;
    }
    console.log("Factorial : " + factorial);
}