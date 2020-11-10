const prompt = require('prompt-sync')();

let num = prompt("Enter a Number:  ")
num = parseInt(num)
let factors = new Array()
for(let init = 2; init <= num; init++){
    while(num % init == 0){
        factors.push(init);
        num = num / init;
    }
}

console.log("Prime Factorization of given num is:  " + factors.toString())