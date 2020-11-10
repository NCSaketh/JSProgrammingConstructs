const prompt = require('prompt-sync')();

let input = prompt("Enter a number : ");
let sum = 0;
for(let i = 1; i <= input; i++){
    sum = sum + (1/i);
}

console.log(sum);
