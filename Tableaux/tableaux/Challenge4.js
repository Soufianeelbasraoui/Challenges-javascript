const prompt = require('prompt-sync')();
let tab = [];
for (let i = 0; i < 3; i++) {
    let chaine = prompt(`Entrez la chaîne ${i + 1} : `);
    tab.push(chaine);
}
let rechercher = prompt("Entrez la chaîne a rechercher : ");
let position = tab.indexOf(rechercher);
if (position ) {
    console.log(`La chaîne "${rechercher}" a la position ${position + 1}`);
} else {
    console.log(`La chaîne n'a pas été trouvée.cle`);
}
