const prompt=require('prompt-sync')();
let tab=[];
for(let i=0;i<5;i++){
const saisie = prompt(`Entrez l'entier numéro  :`);
tab.push(parseInt(saisie));
  
  console.log(tab.reverse())
}