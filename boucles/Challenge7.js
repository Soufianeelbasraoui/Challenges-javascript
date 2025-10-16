
const prompt = require('prompt-sync')();
let somme = 0;
for (let i = 1; i <= 10; i++) {
    let nombre = prompt(`Entrez le nombre ${i}: `);
    if (nombre >= 0) {
        somme += nombre;
    }
}

console.log("La somme des nombres  est : " + somme);
