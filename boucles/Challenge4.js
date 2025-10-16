const prompt=require('prompt-sync')();
let nomber=prompt("Enter un nomber");
let revers= nomber.split("").reverse().join("");
console.log(revers)
