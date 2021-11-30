//importing other javascript files
const dynamic = require("./dynamicVersion3");
const brute2 = require("./bruteVersion2");


//capturing input from user
var phrase1 = prompt("Phrase1: ");
var phrase2 = prompt("Phrase2: ");

//converting the provided strings into arrays
var phrase3 = reverse(phrase1);
var phrase4 = reverse(phrase2);


//Printing Result as a string
console.log("\n"+phrase1.toString()+"\n"+phrase2.toString()+"\n");

//Finding the largest subsequence using brute force returns result.
console.time("Brute Force: ");
brute2.bruteForce2(phrase1,phrase2);
console.timeEnd("Brute Force: ");

console.log("------------------");

console.time("Dynamic Version: ");
dynamic.printLcs(phrase3,phrase4,phrase3.length,phrase4.length);
console.timeEnd("Dynamic Version: ");

console.log("------------------");


function reverse(s){
    return s.split("").reverse().join("");
}