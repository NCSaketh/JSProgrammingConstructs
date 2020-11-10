const prompt = require('prompt-sync')();

let num1 = prompt("Enter the number between 0-9: ");
num1 = parseInt(num1);
if(num1 == 0)
        console.log("Zero");
else if(num1 == 1)
        console.log("One");
else if(num1 == 2)
        console.log("Two");
else if(num1 == 3)
        console.log("Three");
else if(num1 == 4)
        console.log("Four");
else if(num1 == 5)
        console.log("Five");
else if(num1 == 6)
        console.log("Six");
else if(num1 == 7)
        console.log("Seven");
else if(num1 == 8)
        console.log("Eight");
else if(num1 == 9)
        console.log("Nine");
else
        console.log("Wrong Input !")
