const prompt = require('prompt-sync')();
let nomber = parseInt(prompt("Entrez un nombre : "));

let premier = 1;
  for (let i = 2; i < nomber/2; i++) {
    if (nomber % i == 0) {
      premier = 0;
      break;
    }
  }

if (premier) {
  console.log(" est un nombre premier.",nomber);
} else {
  console.log(" n'est pas un nombre premier.",nomber);
}