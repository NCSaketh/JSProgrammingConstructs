const prompt = require('prompt-sync')();

let input = prompt("Enter a number : ");
let num = 1;
let i = 1;
while(num != 256 || i <= input){
    num = num * i
    console.log(num);
    i ++;
}