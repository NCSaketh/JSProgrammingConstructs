const prompt = require('prompt-sync')();

const DATE_LOWER_LIMIT = new Date("2020-3-20");
const DATE_UPPER_LIMIT = new Date("2020-6-20");

var date = new Date(prompt("Enter date: ", "2020-3-20"));
console.log("Date entered by you: " + date);

if(date >= DATE_LOWER_LIMIT && date <=DATE_UPPER_LIMIT)
    console.log("Entered date in the range");
else
    console.log("Entered date outside of the range");
