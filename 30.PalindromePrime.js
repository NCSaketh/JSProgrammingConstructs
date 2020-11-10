const prompt = require('prompt-sync')();

let num = prompt("Enter the Number:  ")
num = parseInt(num)

let val1 = checkIfPrime(num)
let num_rev = getPalindrome(num)
let val2 = checkIfPrime(num_rev)

if(val1 == true && val2 == true)
    console.log("Given Number: Prime    Palindrome: Prime")
else if (val1 == true && val2 == false)
    console.log("Given Number: Prime    Palindrome: Not Prime")
else
    console.log("Given Number: Not Prime    Palindrome: Not Prime")

function checkIfPrime(num){
    console.log("Checking For Prime....")
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i == 0)
            return false;
    }
    return true;
}

function getPalindrome(num){
    console.log("Fetching Palindrome....")
    let reverse = 0;
    while(num != 0 ){
        let rem = num % 10;
        num = num / 10;
        reverse = reverse * 10 + rem;
    }
    return reverse;
}