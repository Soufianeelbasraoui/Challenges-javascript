const prompt=require('prompt-sync')();
let nomber=prompt("enter un nomber:");
let tab=[];
let somme=1;
for(let i=1;i<nomber;i++){
    tab.push(nomber)
    somme+=nomber;
    
}
let moyenne=somme/tab.length;
console.log("le somme est : ",somme);
console.log("le moyenne est: ",moyenne)