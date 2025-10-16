const prompt = require('prompt-sync')();

let tab = [];
for (let i = 0; i < 8; i++) {
  tab.push(prompt(`Entrez le nombre ${i + 1} : `));
}
let recherche = prompt("Entrez le nombre à rechercher : ");


let position = tab.indexOf(recherche);

if (position) {
  console.log(` Le nombre ${recherche} est trouvé a la position ${position}`);
} 
