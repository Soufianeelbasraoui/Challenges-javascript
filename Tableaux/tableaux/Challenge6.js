const prompt = require('prompt-sync')();

let tab = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt(`Entrez le nombre ${i + 1} : `);
    tab.push(nombre);
}

for (let i = 0; i < tab.length; i++) {
    console.log(`Le carré de ${tab[i]} est ${tab[i] * tab[i]}`);
}
