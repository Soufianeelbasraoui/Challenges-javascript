const prompt = require("prompt-sync")();

let base = prompt("Entrez la base  : ");
let exposant = prompt("Entrez l'exposant : ");

let resultat = 1;
let i = 0;

while (i < exposant) {
    resultat = resultat * base;
    i++;
}

console.log(`${base} ^ ${exposant} = ${resultat}`);
